# 系统架构

FastTest 采用前后端分离架构，通过团队/项目两级隔离数据，支持 QA 管理与自动化测试一体化协作。

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vue 3 + Vite + TypeScript + Arco Design Vue |
| 后端 | Spring Boot + MyBatis-Plus + Sa-Token |
| 数据库 | MySQL 8.0+ |
| UI 自动化 | Playwright |
| 文档 | VitePress |

## 部署架构

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   浏览器     │◄────►│  前端 Nginx  │      │  MySQL 8.0  │
│  (用户界面)  │      │  (Vue 3 SPA) │      │  (业务数据)  │
└─────────────┘      └──────┬──────┘      └─────────────┘
                            │
                            ▼
                     ┌─────────────┐
                     │  后端服务    │
                     │ Spring Boot │
                     │  (7529 端口) │
                     └──────┬──────┘
                            │
                     ┌──────┴──────┐
                     │  Playwright  │
                     │  (UI 自动化) │
                     └─────────────┘
```

- 前端静态资源由 Nginx 提供，开发阶段通过 Vite 代理到后端。
- 后端统一以 `/api` 为前缀提供 REST 接口。
- UI 自动化执行时，后端调用 Playwright 驱动浏览器完成操作。

## 后端模块划分

| 模块 | 路径 | 职责 |
|------|------|------|
| platform-starter | `backEnd/platform-starter` | Spring Boot 启动入口、统一配置 |
| platform-automation | `backEnd/platform-automation` | 团队/项目/用户、接口测试、UI 自动化、测试计划、报告、Mock、数据模板 |
| platform-qa | `backEnd/platform-qa` | 质量管理：需求池、BUG 池、用例、测试计划、血缘追踪 |

platform-qa 为可插拔模块，可在配置中启用或禁用：

```yaml
module:
  qa:
    enabled: true   # true=启用, false=禁用
```

## 数据隔离

平台通过两层上下文实现数据隔离：

1. **团队（Team）**：顶层工作空间，环境、全局变量、成员角色归属团队。
2. **项目（Project）**：团队下的数据容器，需求、用例、BUG、接口、场景等数据都归属项目。

切换团队或项目时，前端会清空当前上下文并重新加载权限，避免跨团队/跨项目数据串扰。

## 权限模型

- 基于 RBAC，支持团队级和项目级授权。
- 权限码按业务域划分，如 `qa:requirement:view`、`auto:api:update`、`auto:plan:execute` 等。
- 角色可在团队或项目维度分配，同一用户在不同项目可拥有不同角色。

## 典型请求链路

1. 用户在前端操作，请求统一发到 `/api/...`。
2. Sa-Token 校验登录态和权限。
3. Controller 接收请求，Service 处理业务逻辑。
4. MyBatis-Plus 访问 MySQL 完成数据读写。
5. 返回统一响应结构到前端。

UI 自动化执行时，后端会额外启动 Playwright 浏览器实例，执行步骤后收集截图、Trace、视频并写入报告。
