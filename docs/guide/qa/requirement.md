# 需求池

需求池用于管理产品需求，是测试工作的源头。

## 需求字段

| 字段 | 说明 |
|------|------|
| 需求编号 | 项目内唯一编码 |
| 标题 | 需求名称 |
| 描述 | 需求详细说明 |
| 优先级 | P0 / P1 / P2 / P3 |
| 状态 | DRAFT / REVIEWING / CONFIRMED / DEVELOPING / TESTING / RELEASED / CLOSED |
| 所属模块 | 关联 `qa_module` |
| 父需求 | 支持 Epic → Story 层级，0 表示无父需求 |
| 需求类型 | FEATURE / BUGFIX / OPTIMIZE / TECH_DEBT |
| 来源 | CLIENT / INTERNAL / COMPETITOR / ONLINE |
| 参与人 | 参与需求的人员 ID 列表（JSON） |
| 期望上线时间 | 日期 |
| 标签 | 逗号分隔 |
| 版本 | 需求版本 |
| 负责人 | `owner_id` |

## 状态流转

需求状态不限定固定路径，在弹窗中自由下拉选择目标状态，后端校验目标状态是否合法。

合法状态：

```
DRAFT → REVIEWING → CONFIRMED → DEVELOPING → TESTING → RELEASED → CLOSED
```

## 筛选条件

需求池支持以下筛选：

- 关键词（标题/编号模糊）
- 状态
- 所属模块
- 需求类型
- 来源

::: tip 截图占位
此处需补充「需求池列表页」截图，包含顶部统计卡片、筛选栏、需求表格。
:::

## 新建/编辑需求

点击新建按钮或表格操作列编辑图标，弹出需求编辑弹窗。

::: tip 截图占位
此处需补充「需求编辑弹窗」截图，包含标题、优先级、所属模块、父需求、需求类型、来源等字段。
:::

## 删除需求的级联行为

删除需求时，遵循「资产保留、关联解绑」原则：

1. 解绑关联用例：`UPDATE test_case SET requirement_id = NULL WHERE requirement_id = ?`
2. 解绑关联 BUG：`UPDATE bug SET requirement_id = NULL WHERE requirement_id = ?`
3. 子需求变根需求：`UPDATE requirement SET parent_id = 0 WHERE parent_id = ?`
4. 删除需求本身

## 相关接口

| 接口 | 说明 |
|------|------|
| `GET /qa/requirement/list` | 需求列表 |
| `POST /qa/requirement/save` | 保存需求 |
| `POST /qa/requirement/update` | 更新需求 |
| `POST /qa/requirement/delete/{id}` | 删除需求 |
| `POST /qa/requirement/batchDelete` | 批量删除 |
| `GET /qa/requirement/{id}` | 需求详情 |
| `POST /qa/requirement/transition` | 状态流转 |
| `GET /qa/requirement/{id}/trace` | 需求血缘 |
