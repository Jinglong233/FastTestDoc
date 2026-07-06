# 接口管理

接口按目录树组织，支持新建、编辑、复制、排序、Swagger 导入。

## 目录树

接口目录树节点类型：

- **FOLDER**：目录，可包含子目录和接口
- **INTERFACE**：接口定义

目录树支持拖拽排序、调整层级。

::: tip 截图占位
此处需补充「API 目录树」截图。
:::

## 新建接口

选中目录后，点击「新建接口」或标签栏「+」，填写请求方法、路径、名称等信息。

## 接口用例

同一个接口可以保存多个用例（case），用于不同参数组合或不同断言场景。

::: tip 截图占位
此处需补充「接口编辑区」截图，展示请求方法/路径、参数表格、请求体编辑区。
:::

## Swagger 导入

支持通过 Swagger JSON 文件或 URL 批量导入接口。

导入时可选择：

- 目标目录
- 导入范围（全部接口或按标签筛选）
- 冲突处理策略

::: tip 截图占位
此处需补充「Swagger 导入弹窗」截图。
:::

## 响应示例

接口支持配置多个响应示例，按状态码分组展示，方便前端/mock 使用。

::: tip 截图占位
此处需补充「响应示例面板」截图。
:::

## 相关接口

| 接口 | 说明 |
|------|------|
| `REQ /interface/save` | 保存接口 |
| `REQ /interface/saveCase` | 保存接口用例 |
| `REQ /interface/folderList` | 目录列表 |
| `REQ /interface/apiListTree` | 接口树 |
| `REQ /interface/getApiById` | 接口详情 |
| `REQ /interface/deleteApi` | 删除接口 |
| `REQ /interface/copyApi` | 复制接口 |
| `REQ /interface/updateApiSort` | 更新排序 |
| `REQ /interface/importSwagger` | Swagger 导入 |
