# ---- 阶段 1：构建 ----
FROM node:22-slim AS builder

WORKDIR /app

# 安装 git（VitePress 构建时需要）
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

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