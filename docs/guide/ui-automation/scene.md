# UI 场景编排

UI 场景由多个测试步骤组成，支持可视化编排。

## 场景编辑器布局

- **左侧**：场景目录树
- **中间**：步骤列表
- **右侧/底部**：步骤编辑抽屉
- **底部工具栏**：添加步骤按钮

## 步骤类型

UI 场景支持多种步骤类型，常见包括：

- 打开浏览器/页面
- 点击元素
- 输入文本
- 等待
- 断言
- 切换 iframe
- 处理弹窗
- 循环 / if 判断

::: tip 截图占位
此处需补充「UI 场景步骤列表」截图，展示各种步骤类型按钮。
:::

## 新建步骤

1. 在步骤列表下方点击对应步骤类型按钮。
2. 在步骤编辑表单中配置参数。
3. 如需操作页面元素，从元素库中选择。
4. 保存后步骤自动按顺序加入列表。

::: tip 截图占位
此处需补充「步骤编辑抽屉」截图。
:::

## 步骤管理

- 拖拽调整步骤顺序
- 启用/禁用单个步骤
- 批量启用/禁用/删除
- 复制步骤
- 跨场景导入步骤

## 场景分类

场景按 `scene_category` 分为 UI / API / MIXED。UI 场景和 API 场景在编辑器中展示的步骤类型不同，执行通道也不同。

::: tip 注意
UI 场景和 API 场景的目录树相互隔离，同分类下才允许拖拽。
:::

## 相关接口

| 接口 | 说明 |
|------|------|
| `POST /scene/addScene` | 新增场景 |
| `POST /scene/updateScene` | 更新场景 |
| `Get /scene/deleteFolderOrScene` | 删除场景/文件夹 |
| `Get /scene/getSceneById` | 场景详情 |
| `POST /scene/updateSceneSort` | 排序 |
| `POST /scene/copyScene` | 复制场景 |
| `Post /step/addStep` | 新增步骤 |
| `Post /step/updateStep` | 更新步骤 |
| `Get /step/deleteStep` | 删除步骤 |
| `Post /step/updateStepSort` | 步骤排序 |
| `Post /step/batchEnableStep` | 批量启用 |
| `Post /step/batchDisableStep` | 批量禁用 |
| `Post /step/batchDeleteStep` | 批量删除 |
