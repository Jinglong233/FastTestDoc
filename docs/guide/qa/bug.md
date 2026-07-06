# BUG 池

BUG 池用于跟踪缺陷从发现到关闭的全过程。

## BUG 字段

| 字段 | 说明 |
|------|------|
| BUG 编号 | 项目内唯一编码 |
| 标题 | BUG 名称 |
| 描述 | 问题描述 |
| 重现步骤 | 复现方法 |
| 严重程度 | FATAL / SERIOUS / NORMAL / TIPS |
| 优先级 | URGENT / HIGH / MEDIUM / LOW |
| 状态 | NEW / CONFIRMED / FIXING / FIXED / VERIFIED / CLOSED / REJECTED |
| 所属模块 | 关联 `qa_module` |
| 截止日期 | 修复期限 |
| 环境 | TEST / STAGING / PROD |
| 发现版本 | 发现 BUG 的版本 |
| 修复版本 | 修复 BUG 的版本 |
| 重现概率 | ALWAYS / OFTEN / SOMETIMES / RARE |
| 关闭原因 | FIXED / DUPLICATE / NOT_BUG / CANNOT_REPRODUCE / WONT_FIX |
| 标签 | 逗号分隔 |
| 关联需求 | `requirement_id` |
| 关联用例 | `test_case_id` |
| 计划用例 | `plan_case_id` |
| 报告人 | `reporter_id` |
| 指派人 | `assignee_id` |

## 状态流转

BUG 状态在弹窗中自由下拉选择，后端校验合法性。

合法状态：

```
NEW → CONFIRMED → FIXING → FIXED → VERIFIED → CLOSED
```

也可直接流转为 `REJECTED`。

## 筛选条件

BUG 池支持以下筛选：

- 关键词（标题/编号模糊）
- 状态
- 严重程度
- 优先级
- 所属模块
- 环境
- 重现概率
- 关闭原因
- 关联需求
- 关联用例

::: tip 截图占位
此处需补充「BUG 池列表页」截图，包含顶部统计卡片、筛选栏、BUG 表格。
:::

## 新建/编辑 BUG

点击新建或编辑图标，弹出 BUG 编辑弹窗。

::: tip 截图占位
此处需补充「BUG 编辑弹窗」截图，包含严重程度、优先级、状态、关联需求、关联用例、指派人等字段。
:::

## 评论与操作日志

每个 BUG 支持：

- **评论**：团队成员可发表评论，支持 @ mention。
- **操作日志**：自动记录字段级变更历史。

::: tip 截图占位
此处需补充「BUG 详情抽屉」截图，展示基本信息、评论、操作日志三个标签页。
:::

## 删除 BUG 的级联行为

删除 BUG 时，会级联删除：

1. `bug_comment` 评论
2. `bug_operation_log` 操作日志
3. `bug` 本身

## 相关接口

| 接口 | 说明 |
|------|------|
| `GET /qa/bug/list` | BUG 列表 |
| `POST /qa/bug/save` | 保存 BUG |
| `POST /qa/bug/update` | 更新 BUG |
| `POST /qa/bug/delete/{id}` | 删除 BUG |
| `POST /qa/bug/batchDelete` | 批量删除 |
| `GET /qa/bug/{id}` | BUG 详情 |
| `POST /qa/bug/transition` | 状态流转 |
| `GET /qa/bug/comment/list` | BUG 评论列表 |
| `POST /qa/bug/comment/save` | 保存评论 |
| `GET /qa/bug/operationLog/list` | 操作日志列表 |
