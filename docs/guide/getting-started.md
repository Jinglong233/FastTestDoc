# 快速开始

本页面将指导你如何本地部署和运行 FastTest 平台。

## 环境要求

- Node.js ≥ 18
- Java 17+
- MySQL 8.0+
- Maven 3.8+

## 1. 克隆仓库

```bash
git clone <仓库地址>
cd platform
```

## 2. 初始化数据库

执行 `backEnd/sql/fasttest_full_schema.sql` 创建表结构，然后执行演示数据脚本：

```bash
# 创建数据库
create database fasttest default character set utf8mb4 collate utf8mb4_unicode_ci;

# 执行初始化脚本
mysql -u root -p fasttest < backEnd/sql/fasttest_full_schema.sql
mysql -u root -p fasttest < backEnd/sql/qa_demo_data.sql
```

::: tip 截图占位
此处可补充 Navicat/命令行执行 SQL 的截图。
:::

## 3. 启动后端

```bash
cd backEnd/platform-parent
mvn clean install
mvn spring-boot:run -pl platform-starter
```

后端默认启动在 `http://localhost:8080`。

## 4. 启动前端

```bash
cd frontEnd
npm install
npm run dev
```

浏览器访问 `http://localhost:5173` 即可进入 FastTest 平台。

::: tip 截图占位
此处需补充「登录页」截图。
:::

## 5. 默认账号

演示数据预置了管理员账号：

- 账号：`admin`
- 密码：`123456`

::: warning 注意
生产环境请务必修改默认密码并配置合适的权限策略。
:::

## 6. 创建第一个团队/项目

登录后：

1. 在顶部导航创建或切换团队。
2. 进入团队工作台，创建项目。
3. 切换到新建项目，开始使用 QA、接口测试、UI 自动化等功能。

::: tip 截图占位
此处需补充「项目概览页」截图。
:::

## 后续阅读

- [核心概念](./concepts) — 团队、项目、需求、用例、场景等
- [团队与项目](./team-project/) — 团队、项目、成员、权限
- [质量管理](./qa/) — 需求、BUG、用例、测试计划
- [接口测试](./api-test/) — API 接口、Mock、数据模板
- [UI 自动化](./ui-automation/) — 元素库、UI 场景
- [测试运行](./test-run/) — 任务计划、报告
