# UI 自动化

UI 自动化模块包含元素库和 UI 场景编排，用于实现端到端自动化测试。

## 模块组成

| 页面 | 路由 | 说明 |
|------|------|------|
| UI 场景 | `/ui-automation/sceneList` | 场景目录树 + 步骤编排 |
| 元素库 | `/ui-automation/elementList` | 页面元素集中管理 |

## 核心数据模型

### 场景（Scene）

| 字段 | 说明 |
|------|------|
| `name` | 场景名称 |
| `scene_type` | SCENE / FOLDER |
| `scene_category` | UI / API / MIXED |
| `scene_setting` | 运行配置（JSON） |

### 步骤（TestStep）

| 字段 | 说明 |
|------|------|
| `step_type` | 步骤类型 |
| `step_name` | 步骤名称 |
| `step_detail` | 步骤详细配置（JSON） |
| `order_index` | 执行顺序 |
| `is_disable` | 是否禁用 |

### 元素（Element）

| 字段 | 说明 |
|------|------|
| `element_name` | 元素名称 |
| `element_type` | ELEMENT / FOLDER |
| `locator_type` | 定位方式 |
| `locator_value` | 定位值 |

::: tip 截图占位
此处需补充「UI 场景编辑器」整体截图。
:::

## 典型工作流程

1. 在元素库中定义页面元素。
2. 在 UI 场景中新建场景，按业务流编排步骤。
3. 步骤中引用元素库中的元素。
4. 配置运行参数，执行场景调试。
5. 将场景加入任务计划，定时或手动执行。
