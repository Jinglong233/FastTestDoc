# 权限码清单

FastTest 使用 `模块:资源:操作` 三段式权限码，以下清单根据后端 Controller 的 `@SaCheckPermission` 注解整理。

## QA 模块

### 需求

| 权限码 | 说明 |
|--------|------|
| `qa:requirement:view` | 查看需求 |
| `qa:requirement:create` | 创建需求 |
| `qa:requirement:update` | 编辑需求 |
| `qa:requirement:delete` | 删除需求 |
| `qa:requirement:transition` | 需求状态流转 |

### BUG

| 权限码 | 说明 |
|--------|------|
| `qa:bug:view` | 查看 BUG |
| `qa:bug:create` | 创建 BUG |
| `qa:bug:update` | 编辑 BUG |
| `qa:bug:delete` | 删除 BUG |
| `qa:bug:transition` | BUG 状态流转 |
| `qa:bug:comment:view` | 查看 BUG 评论 |
| `qa:bug:comment:create` | 创建 BUG 评论 |
| `qa:bug:comment:delete` | 删除 BUG 评论 |
| `qa:bug:operationlog:view` | 查看 BUG 操作日志 |

### 用例与测试集

| 权限码 | 说明 |
|--------|------|
| `qa:testcase:view` | 查看用例/测试集 |
| `qa:testcase:create` | 创建用例/测试集 |
| `qa:testcase:update` | 编辑用例/测试集 |
| `qa:testcase:delete` | 删除用例/测试集 |

### 测试计划

| 权限码 | 说明 |
|--------|------|
| `qa:testplan:view` | 查看测试计划 |
| `qa:testplan:create` | 创建测试计划 |
| `qa:testplan:update` | 编辑测试计划 |
| `qa:testplan:delete` | 删除测试计划 |
| `qa:testplan:execute` | 执行测试计划 |

### QA 模块管理

| 权限码 | 说明 |
|--------|------|
| `qa:module:view` | 查看 QA 模块 |
| `qa:module:create` | 创建 QA 模块 |
| `qa:module:update` | 编辑 QA 模块 |
| `qa:module:delete` | 删除 QA 模块 |

### 概览

| 权限码 | 说明 |
|--------|------|
| `qa:overview:view` | 查看 QA 概览 |

## 接口测试模块

### API 接口

| 权限码 | 说明 |
|--------|------|
| `auto:api:view` | 查看接口 |
| `auto:api:create` | 创建接口 |
| `auto:api:update` | 编辑接口 |
| `auto:api:delete` | 删除接口 |
| `auto:api:execute` | 调试接口 |

### API 场景

| 权限码 | 说明 |
|--------|------|
| `auto:scene:view` | 查看场景 |
| `auto:scene:create` | 创建场景 |
| `auto:scene:update` | 编辑场景 |
| `auto:scene:delete` | 删除场景 |
| `auto:scene:execute` | 执行场景 |

### 场景步骤

| 权限码 | 说明 |
|--------|------|
| `auto:step:view` | 查看步骤 |
| `auto:step:create` | 创建步骤 |
| `auto:step:update` | 编辑步骤 |
| `auto:step:delete` | 删除步骤 |

### 元素库

| 权限码 | 说明 |
|--------|------|
| `auto:element:view` | 查看元素 |
| `auto:element:create` | 创建元素 |
| `auto:element:update` | 编辑元素 |
| `auto:element:delete` | 删除元素 |

### 环境与全局变量

| 权限码 | 说明 |
|--------|------|
| `auto:env:view` | 查看环境 |
| `auto:env:create` | 创建环境 |
| `auto:env:update` | 编辑环境 |
| `auto:env:delete` | 删除环境 |
| `auto:globalvar:view` | 查看全局变量 |
| `auto:globalvar:update` | 编辑全局变量 |
| `auto:globalvar:delete` | 删除全局变量 |

### 数据模板

| 权限码 | 说明 |
|--------|------|
| `auto:template:view` | 查看数据模板 |
| `auto:template:create` | 创建数据模板 |
| `auto:template:update` | 编辑数据模板 |
| `auto:template:delete` | 删除数据模板 |

## 测试运行与报告

### 任务计划

| 权限码 | 说明 |
|--------|------|
| `auto:plan:view` | 查看任务计划 |
| `auto:plan:create` | 创建任务计划 |
| `auto:plan:update` | 编辑任务计划 |
| `auto:plan:delete` | 删除任务计划 |
| `auto:plan:execute` | 执行任务计划 |

### Webhook

| 权限码 | 说明 |
|--------|------|
| `auto:plan:webhook:view` | 查看 Webhook |
| `auto:plan:webhook:create` | 创建 Webhook |
| `auto:plan:webhook:update` | 编辑 Webhook |
| `auto:plan:webhook:delete` | 删除 Webhook |

### 报告

| 权限码 | 说明 |
|--------|------|
| `report:view` | 查看报告 |
| `report:delete` | 删除报告 |

## 团队与项目

| 权限码 | 说明 |
|--------|------|
| `team:member:manage` | 管理团队成员 |
| `team:role:manage` | 管理团队角色模板 |
| `project:view` | 查看项目 |
| `project:create` | 创建项目 |
| `project:update` | 编辑项目 |

## 自动化概览

| 权限码 | 说明 |
|--------|------|
| `auto:overview:view` | 查看自动化概览 |

## 使用说明

- 前端通过 `GET /rbac/user/permissions` 获取当前用户权限列表。
- 按钮/菜单是否显示通常只校验 `view` 权限；新增/编辑/删除/执行等操作校验对应操作权限。
- 部分页面使用组合权限，例如「保存并调试」需要同时满足 `auto:api:update` 和 `auto:api:execute`。
