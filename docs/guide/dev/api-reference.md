# API 接口速查

按模块汇总 FastTest 核心 API。接口统一返回 `ResponseVO` 或 `SaResult`，权限校验使用 Sa-Token。

## QA 模块

### 需求

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/requirement/list` | 需求列表 |
| POST | `/qa/requirement/save` | 保存需求 |
| POST | `/qa/requirement/update` | 更新需求 |
| POST | `/qa/requirement/delete/{id}` | 删除需求 |
| POST | `/qa/requirement/batchDelete` | 批量删除 |
| GET | `/qa/requirement/{id}` | 需求详情 |
| POST | `/qa/requirement/transition` | 状态流转 |
| GET | `/qa/requirement/{id}/trace` | 需求血缘 |

### BUG

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/bug/list` | BUG 列表 |
| POST | `/qa/bug/save` | 保存 BUG |
| POST | `/qa/bug/update` | 更新 BUG |
| POST | `/qa/bug/delete/{id}` | 删除 BUG |
| POST | `/qa/bug/batchDelete` | 批量删除 |
| GET | `/qa/bug/{id}` | BUG 详情 |
| POST | `/qa/bug/transition` | 状态流转 |

### BUG 评论与日志

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/bug/comment/list` | 评论列表 |
| POST | `/qa/bug/comment/save` | 保存评论 |
| POST | `/qa/bug/comment/delete/{id}` | 删除评论 |
| GET | `/qa/bug/operationLog/list` | 操作日志 |

### 用例

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/testCase/list` | 用例列表 |
| POST | `/qa/testCase/save` | 保存用例 |
| POST | `/qa/testCase/update` | 更新用例 |
| POST | `/qa/testCase/delete/{id}` | 删除用例 |
| POST | `/qa/testCase/batchDelete` | 批量删除 |
| GET | `/qa/testCase/{id}` | 用例详情 |
| POST | `/qa/testCase/transition` | 状态流转 |
| POST | `/qa/testCase/bindAuto` | 绑定自动化 |
| POST | `/qa/testCase/unbindAuto` | 解绑自动化 |
| GET | `/qa/testCase/bindAuto/{caseId}` | 已绑定列表 |
| GET | `/qa/testCase/autoOptions` | 可绑定选项 |
| GET | `/qa/testCase/export` | 导出 Excel |

### 测试集

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/testCaseSet/list` | 测试集列表 |
| GET | `/qa/testCaseSet/options` | 测试集选项 |
| POST | `/qa/testCaseSet/save` | 保存测试集 |
| POST | `/qa/testCaseSet/update` | 更新测试集 |
| POST | `/qa/testCaseSet/delete/{id}` | 删除测试集 |
| POST | `/qa/testCaseSet/bind/{caseId}` | 用例绑定测试集 |

### 测试计划

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/testPlan/list` | 计划列表 |
| POST | `/qa/testPlan/save` | 保存计划 |
| POST | `/qa/testPlan/update` | 更新计划 |
| POST | `/qa/testPlan/delete/{id}` | 删除计划 |
| GET | `/qa/testPlan/{id}` | 计划详情 |
| POST | `/qa/testPlan/addCases` | 添加用例 |
| POST | `/qa/testPlan/removeCase` | 移除用例 |
| POST | `/qa/testPlan/execute` | 执行用例 |
| POST | `/qa/testPlan/batchExecute` | 批量执行 |
| POST | `/qa/testPlan/generateBug` | 转 BUG |
| GET | `/qa/testPlan/executionHistory` | 执行历史 |
| GET | `/qa/testPlan/{planId}/report` | 计划报告 |

### QA 模块管理

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/module/list` | 模块列表 |
| GET | `/qa/module/tree` | 模块树 |
| POST | `/qa/module/save` | 保存模块 |
| POST | `/qa/module/update` | 更新模块 |
| POST | `/qa/module/delete/{id}` | 删除模块 |
| POST | `/qa/module/sort` | 排序 |

### 站内消息

| Method | Path | 说明 |
|--------|------|------|
| GET | `/qa/message/list` | 消息列表 |
| GET | `/qa/message/unreadCount` | 未读数 |
| POST | `/qa/message/read/{id}` | 标记已读 |
| POST | `/qa/message/readAll` | 全部已读 |
| POST | `/qa/message/delete/{id}` | 删除消息 |

## 接口测试模块

### API 接口

| Method | Path | 说明 |
|--------|------|------|
| REQ | `/interface/save` | 保存接口 |
| REQ | `/interface/saveCase` | 保存接口用例 |
| REQ | `/interface/folderList` | 文件夹列表 |
| REQ | `/interface/apiListTree` | 接口树 |
| REQ | `/interface/getApiById` | 接口详情 |
| REQ | `/interface/deleteApi` | 删除接口 |
| REQ | `/interface/copyApi` | 复制接口 |
| REQ | `/interface/updateApiSort` | 排序 |
| REQ | `/interface/importSwagger` | Swagger 导入 |
| REQ | `/interface/debug` | 接口调试 |
| REQ | `/interface/debugByConfig` | 按配置调试 |

### API 场景

| Method | Path | 说明 |
|--------|------|------|
| POST | `/apiScene/debug` | API 场景调试 |

### 环境

| Method | Path | 说明 |
|--------|------|------|
| REQ | `/env/getEnvList` | 环境列表 |
| REQ | `/env/saveOrUpdate` | 保存/更新环境 |
| REQ | `/env/delete` | 删除环境 |
| REQ | `/env/copy` | 复制环境 |

### 全局变量

| Method | Path | 说明 |
|--------|------|------|
| REQ | `/globalVar/getGlobalArgList` | 全局变量列表 |
| REQ | `/globalVar/saveOrUpdate` | 保存/更新 |
| REQ | `/globalVar/deleteById` | 删除 |

### 数据模板

| Method | Path | 说明 |
|--------|------|------|
| POST | `/dataTemplate/save` | 保存模板 |
| POST | `/dataTemplate/folder/save` | 保存文件夹 |
| GET | `/dataTemplate/list` | 模板列表 |
| GET | `/dataTemplate/tree` | 模板树 |
| GET | `/dataTemplate/{id}` | 模板详情 |
| POST | `/dataTemplate/delete/{id}` | 删除 |
| POST | `/dataTemplate/sort` | 排序 |
| POST | `/dataTemplate/copy/{id}` | 复制 |
| POST | `/dataTemplate/generate` | 单条生成 |
| POST | `/dataTemplate/batchGenerate` | 批量生成 |
| POST | `/dataTemplate/batchGenerate/export` | 导出 |

### Mock

| Method | Path | 说明 |
|--------|------|------|
| REQ | `/mock/generate` | 生成 Mock 值 |

## UI 自动化模块

### 元素库

| Method | Path | 说明 |
|--------|------|------|
| POST | `/element/pageElementList` | 元素列表 |
| POST | `/element/getElementList` | 元素选项 |
| REQ | `/element/folderList` | 文件夹树 |
| Get | `/element/getElementById` | 元素详情 |
| Post | `/element/add` | 新增元素 |
| Post | `/element/update` | 更新元素 |
| Get | `/element/deleteElementOrFolder` | 删除 |
| Post | `/element/deleteElementBatch` | 批量删除 |
| Post | `/element/updateElementSort` | 排序 |

### 场景

| Method | Path | 说明 |
|--------|------|------|
| POST | `/scene/addScene` | 新增场景 |
| POST | `/scene/updateScene` | 更新场景 |
| Get | `/scene/deleteFolderOrScene` | 删除 |
| Get | `/scene/getSceneById` | 详情 |
| POST | `/scene/debugScene` | 调试 |
| POST | `/scene/copyScene` | 复制 |
| POST | `/scene/importScene` | 导入 |
| POST | `/scene/updateSceneSort` | 排序 |
| POST | `/scene/updateSceneSetting` | 运行配置 |

### 步骤

| Method | Path | 说明 |
|--------|------|------|
| Post | `/step/addStep` | 新增步骤 |
| Post | `/step/updateStep` | 更新步骤 |
| Get | `/step/deleteStep` | 删除步骤 |
| Post | `/step/addAdjacentStep` | 相邻插入 |
| Post | `/step/importExistSceneStep` | 跨场景导入 |
| Post | `/step/updateStepSort` | 排序 |
| Get | `/step/copyStep` | 复制 |
| Get | `/step/disableStep` | 禁用 |
| Post | `/step/batchEnableStep` | 批量启用 |
| Post | `/step/batchDisableStep` | 批量禁用 |
| Post | `/step/batchDeleteStep` | 批量删除 |

## 测试运行模块

### 任务计划

| Method | Path | 说明 |
|--------|------|------|
| GET | `/plan/allPlan` | 计划列表 |
| GET | `/plan/getPlanById` | 详情 |
| POST | `/plan/addPlan` | 新增 |
| POST | `/plan/updatePlan` | 更新 |
| GET | `/plan/deletePlan` | 删除 |
| POST | `/plan/updatePlanRunningConfig` | 运行配置 |

### 任务执行

| Method | Path | 说明 |
|--------|------|------|
| POST | `/task/active/{planId}` | 激活 |
| POST | `/task/stop/{planId}` | 停止 |
| POST | `/task/execute/{taskId}` | 执行 |
| POST | `/task/reRun` | 重跑 |
| GET | `/task/status` | 状态 |

### Webhook

| Method | Path | 说明 |
|--------|------|------|
| GET | `/planWebhook/list` | 列表 |
| POST | `/planWebhook/save` | 保存 |
| POST | `/planWebhook/update` | 更新 |
| GET | `/planWebhook/delete` | 删除 |
| POST | `/planWebhook/test` | 测试 |

### 报告

| Method | Path | 说明 |
|--------|------|------|
| POST | `/report/reportPageList` | 报告列表 |
| GET | `/report/allReport` | 所有报告 |
| GET | `/report/reportDetail` | 详情 |
| GET | `/report/deleteReport` | 删除 |

## 团队与项目

### 团队

| Method | Path | 说明 |
|--------|------|------|
| REQ | `/team/getTeamList` | 团队列表 |
| REQ | `/team/createTeam` | 创建团队 |
| REQ | `/team/updateTeam` | 更新团队 |
| REQ | `/team/deleteTeam/{teamId}` | 删除团队 |
| REQ | `/team/members/{teamId}` | 成员列表 |
| REQ | `/team/addTeamMember` | 添加成员 |
| REQ | `/team/member/updateRole` | 修改角色 |
| REQ | `/team/member/remove` | 移除成员 |

### 项目

| Method | Path | 说明 |
|--------|------|------|
| REQ | `/project/allProject` | 项目列表 |
| REQ | `/project/getProjectById/{id}` | 详情 |
| POST | `/project/addProject` | 创建 |
| POST | `/project/updateProject` | 更新 |
| POST | `/project/deleteProject/{projectId}` | 删除 |
| GET | `/project/member/list/{projectId}` | 成员列表 |
| POST | `/project/member/assign` | 分配角色 |
| POST | `/project/member/remove` | 移除 |

### RBAC

| Method | Path | 说明 |
|--------|------|------|
| GET | `/rbac/roles` | 角色列表 |
| POST | `/rbac/role/create` | 创建角色 |
| POST | `/rbac/role/update` | 更新角色 |
| POST | `/rbac/role/delete/{id}` | 删除角色 |
| GET | `/rbac/role/permissions/{roleId}` | 角色权限 |
| POST | `/rbac/role/assignPermissions` | 分配权限 |
| GET | `/rbac/permissions/tree` | 权限树 |
| GET | `/rbac/user/permissions` | 当前用户权限 |

## 系统操作日志

| Method | Path | 说明 |
|--------|------|------|
| GET | `/operationLog/list` | 日志列表 |
| GET | `/operationLog/moduleOptions` | 模块选项 |
| GET | `/operationLog/typeOptions` | 操作类型选项 |
| GET | `/operationLog/targetTypeOptions` | 目标类型选项 |

## 文件

| Method | Path | 说明 |
|--------|------|------|
| POST | `/file/upload` | 文件上传 |
| POST | `/file/uploadImage` | 图片上传 |
| POST | `/file/deleteImage` | 删除图片 |
| GET | `/file/image/{fileId}` | 读取图片 |
| GET | `/file/preview/{fileId}` | 文件预览 |
| GET | `/file/{fileId}` | 文件下载 |
