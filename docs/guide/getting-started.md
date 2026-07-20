# 快速开始

本页面将指导你通过 Docker Compose 快速部署和运行 FastTest 平台。

## 环境要求

- Docker Engine 20.10+
- Docker Compose plugin（`docker compose` 命令可用）
- Git

建议预留至少 2 核 CPU、4 GB 内存、40 GB 磁盘空间。首次构建会下载 Maven 依赖和 Playwright 浏览器镜像，需要较好的网络环境。

---

### 步骤一：克隆代码仓库

> 路径：任意本地目录

1. 打开终端，执行以下命令克隆仓库：

   ```bash
   git clone <仓库地址>
   cd FastTest
   ```

2. 确认项目根目录包含 `docker-compose.yml` 和 `.env.example` 文件。

---

### 步骤二：配置环境变量

> 路径：项目根目录

1. 复制环境变量模板：

   ```bash
   cp .env.example .env
   ```

2. 编辑 `.env`，重点修改以下配置项：

   | 字段 | 说明 | 默认值 |
   |------|------|--------|
   | `HOST_HTTP_PORT` | 前端对外访问端口 | `8080` |
   | `BACKEND_PORT` | 后端对外访问端口 | `7529` |
   | `MYSQL_ROOT_PASSWORD` | MySQL root 密码 | `fasttest123` |
   | `QA_INIT_SQL` | 是否加载 QA 演示数据 | 空（不加载） |

3. 若宿主机已有 MySQL 占用 `3306` 端口，可修改 `.env` 中的 `MYSQL_PORT` 为其他端口，例如 `3307`。

---

### 步骤三：启动服务

> 路径：项目根目录

1. 执行以下命令构建并启动服务：

   ```bash
   docker compose up -d --build
   ```

   首次构建需要较长时间，请耐心等待。构建完成后，服务会自动在后台运行。

2. 查看启动状态：

   ```bash
   docker compose ps
   docker compose logs -f backend
   ```

3. 当 `backend` 服务状态变为 `healthy` 时，表示启动成功。

---

### 步骤四：访问系统

> 路径：浏览器

1. 浏览器打开平台地址：

   ```
   http://localhost:<HOST_HTTP_PORT>
   ```

   默认值为 `http://localhost:8080`。

2. 输入默认账号和密码：

   | 字段 | 值 |
   |------|-----|
   | 账号 | `admin` |
   | 密码 | `123456` |

3. 登录后进入主界面，顶部导航可切换团队。

---

### 步骤五：创建第一个团队/项目

> 路径：顶部导航 → 团队/项目

1. 点击顶部导航栏的团队下拉框，**创建团队**。
2. 进入团队工作台后，**创建项目**。
3. 切换到新建项目，开始使用 QA、接口测试、UI 自动化等功能。

---

## 加载 QA 演示数据

如需在首次启动时加载质量管理模块的演示数据（需求、BUG、用例等），按以下步骤操作：

1. 修改 `.env`：

   ```dotenv
   QA_INIT_SQL=./backEnd/sql/qa_demo_data.sql
   ```

2. 重新创建数据卷并启动：

   ```bash
   docker compose down -v
   docker compose up -d --build
   ```

::: warning 注意
`QA_INIT_SQL` 仅在**首次创建 `mysql_data` 数据卷**时生效。若已启动过并生成了数据卷，修改后不会重新执行，需要先删除卷。
:::

---

## 本地开发（可选）

如果你需要修改源码并本地调试，可参考以下方式：

- 后端：`cd backEnd && mvn clean install && mvn spring-boot:run -pl platform-starter`，默认端口 `7529`
- 前端：`cd frontEnd && npm install && npm run dev`，默认端口 `3000`

详细的 Docker 生产部署、HTTPS、备份恢复等内容可参考 [生产部署](./deploy)。

---

## 后续阅读

- [核心概念](./concepts) — 团队、项目、需求、用例、场景等
- [团队与项目](./team-project/) — 团队、项目、成员、权限
- [质量管理](./qa/) — 需求、BUG、用例、测试计划
- [接口测试](./api-test/) — API 接口、Mock、数据模板
- [UI 自动化](./ui-automation/) — 元素库、UI 场景
- [测试运行](./test-run/) — 任务计划、报告
