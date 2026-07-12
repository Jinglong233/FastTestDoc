# 生产部署

FastTest 提供 Docker Compose 编排，适合在服务器上一键部署。本文覆盖从环境准备到日常运维的核心步骤。

## 环境要求

### 服务器配置

| 场景 | CPU | 内存 | 磁盘 | 说明 |
|------|-----|------|------|------|
| 演示/小团队 | 2 核 | 4 GB | 40 GB | 最低可运行配置 |
| 生产推荐 | 4 核 | 8 GB | 80 GB+ | Playwright 浏览器 + JVM 占用较高 |

后端镜像基于 `mcr.microsoft.com/playwright/java`，已内置 Chrome，镜像约 1.5 GB，首次构建需预留足够磁盘空间和带宽。

### 软件依赖

- Docker Engine 20.10+
- Docker Compose plugin（`docker compose` 命令可用）
- Git

验证：

```bash
docker --version
docker compose version
```

## 快速开始

### 1. 拉取代码

```bash
git clone <仓库地址> fasttest
cd fasttest
```

### 2. 配置环境变量

```bash
cp .env.example .env
# 编辑 .env，重点修改 MYSQL_ROOT_PASSWORD 和端口
vim .env
```

关键配置项：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `HOST_HTTP_PORT` | 前端对外访问端口 | `8080` |
| `BACKEND_PORT` | 后端对外访问端口 | `7529` |
| `MYSQL_PORT` | MySQL 对外映射端口 | `3306` |
| `MYSQL_ROOT_PASSWORD` | MySQL root 密码 | `fasttest123` |
| `QA_INIT_SQL` | 是否加载 QA 演示数据 | 空（不加载） |

### 3. 启动服务

```bash
docker compose up -d --build
```

首次构建需要较长时间（下载依赖 + Maven 打包 + Playwright 镜像）。

### 4. 查看状态

```bash
docker compose ps
docker compose logs -f backend
```

### 5. 访问系统

```
http://<服务器IP>:<HOST_HTTP_PORT>
```

默认账号：

- 用户名：`admin`
- 密码：`123456`

## QA 演示数据

系统默认只初始化表结构和 RBAC 默认角色/权限/账号。**质量管理模块的演示数据不会自动加载**。

如需在首次启动时加载 QA 演示数据，修改 `.env`：

```dotenv
QA_INIT_SQL=./backEnd/sql/qa_demo_data.sql
```

::: warning 注意
MySQL 初始化脚本仅在**首次创建数据卷**时执行。如果已经启动过并生成了 `mysql_data` 卷，修改 `QA_INIT_SQL` 后不会重新执行。需要删除卷后重新启动：

```bash
docker compose down -v
docker compose up -d --build
```
:::

## HTTPS / 域名配置

生产环境建议通过宿主机反向代理接入 HTTPS，不在容器内直接管理证书。

**Nginx 示例：**

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 备份与恢复

### 备份 MySQL

```bash
source .env
docker exec fasttest-mysql mysqldump -uroot -p"${MYSQL_ROOT_PASSWORD}" --single-transaction fasttest > fasttest_backup_$(date +%F_%H%M%S).sql
tar czf uploads_backup_$(date +%F_%H%M%S).tar.gz uploads/
```

### 恢复 MySQL

```bash
source .env
docker exec -i fasttest-mysql mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" fasttest < fasttest_backup_xxxx.sql
```

## 升级

```bash
# 拉取最新代码
git pull origin master

# 重新构建并启动
docker compose down
docker compose up -d --build

# 查看日志
docker compose logs -f backend
```

若新版本包含数据库结构变更，需要手动执行对应的升级 SQL 脚本。

## 常见问题

### backend 一直 unhealthy

检查 actuator 是否正常工作：

```bash
curl http://localhost:7529/api/actuator/health
```

若返回 `{"status":"UP"}` 但 Docker 仍显示 unhealthy，可能是服务器性能较差，`start-period` 不够，可在 `docker-compose.yml` 中适当延长。

### 质量管理模块没有数据/菜单

确认 `.env` 中未禁用 QA，且后端日志有 QA 模块启动信息：

```bash
docker compose logs backend | grep -i "qa"
```

### 上传文件丢失

确认 `uploads/` 目录已挂载：

```bash
docker compose exec backend ls -la /app/uploads
```

宿主机 `uploads/` 目录应与容器内 `/app/uploads` 同步。

### MySQL 端口冲突

若宿主机已有 MySQL 占用 3306 端口，修改 `.env` 中的 `MYSQL_PORT`，例如：

```dotenv
MYSQL_PORT=3307
```

如不需要从宿主机外部连接 MySQL，可直接删除 `docker-compose.yml` 中 mysql 服务的 `ports` 映射。

## 安全建议

1. **修改默认密码**：部署后务必修改 `admin` 账号密码和 MySQL root 密码。
2. **不对外暴露 MySQL**：如不需要外部访问，删除 `docker-compose.yml` 中 mysql 的 `ports` 映射。
3. **不提交 .env**：`.env` 已加入 `.gitignore`，密码不会进入 Git。
4. **启用 HTTPS**：生产环境必须配置 SSL，避免明文传输登录凭证和 Token。
5. **定期备份**：建议配置定时任务自动备份 MySQL 和 `uploads/` 目录。
