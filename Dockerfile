# ============================================
# MokaTest 文档 - Docker 构建文件
# 多阶段构建：Node 构建 VitePress → Nginx 托管静态文件
# ============================================

# ---- 阶段 1：构建 ----
FROM node:22-slim AS builder

WORKDIR /app

# 配置国内 npm 镜像
RUN npm config set registry https://registry.npmmirror.com

# 先复制依赖文件，利用 Docker 缓存层
COPY package.json package-lock.json ./

# 安装依赖
RUN npm ci

# 复制文档源码
COPY docs/ docs/

# 设置 Docker 部署的 base 路径（GitHub Pages 不受影响）
ENV DOCS_BASE=/docs/

# 构建 VitePress
RUN npm run build

# ---- 阶段 2：运行 ----
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY docs/nginx.conf /etc/nginx/conf.d/default.conf

# 时区
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
