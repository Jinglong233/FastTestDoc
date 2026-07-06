# 用例与测试集

用例是具体的测试执行单元。FastTest 中，用例通过 **QA 模块** 和 **测试集** 两种维度组织。

## 用例字段

| 字段 | 说明 |
|------|------|
| 用例编号 | 项目内唯一编码 |
| 用例名称 | 用例标题 |
| 前置条件 | 执行前需满足的条件 |
| 测试步骤 | JSON 数组，每项含 `step` 和 `expected` |
| 用例类型 | FUNCTION / API / PERFORMANCE / COMPATIBILITY / SMOKE |
| 优先级 | P0 / P1 / P2 |
| 状态 | DRAFT / REVIEWING / REVIEWED / DEPRECATED |
| 所属模块 | 关联 `qa_module` |
| 最近执行结果 | PASS / FAIL / BLOCK / NA |
| 最近执行时间 | 日期时间 |
| 标签 | 逗号分隔 |
| 预期执行时长 | 分钟 |
| 关联需求 | `requirement_id` |

## 用例组织方式

### 按模块组织

每个用例必须归属一个 QA 模块，模块树在需求/BUG/用例页面共享。

### 按测试集组织

测试集（`test_case_set`）是另一种用例分组方式，一个用例可属于多个测试集。

| 字段 | 说明 |
|------|------|
| 测试集名称 | 集合名称 |
| 描述 | 测试集说明 |
| 排序 | 同级排序 |

::: tip 截图占位
此处需补充「用例列表页」截图，展示左侧模块树/测试集、右侧用例表格。
:::

## 测试步骤

测试步骤以 JSON 数组存储，每个步骤包含：

```json
{
  "step": "输入正确的用户名和密码",
  "expected": "登录成功，跳转到首页"
}
```

## 自动化绑定

用例支持与自动化场景绑定：

- `auto_type = UI_SCENE`：绑定 UI 场景
- `auto_type = API_CASE`：绑定 API 用例

绑定后，可在 QA 测试计划中执行自动化用例，或在血缘追踪中查看关联。

::: tip 截图占位
此处需补充「用例编辑弹窗」截图，包含测试步骤编辑区和自动化绑定区域。
:::

## 状态流转

用例合法状态：

```
DRAFT → REVIEWING → REVIEWED → DEPRECATED
```

## 筛选条件

用例列表支持以下筛选：

- 关键词（名称/编号模糊）
- 所属模块
- 测试集
- 最近执行结果
- 关联需求

## 删除用例的级联行为

删除用例时：

1. 解绑关联 BUG：`UPDATE bug SET test_case_id = NULL WHERE test_case_id = ?`
2. 清理自动化绑定：`DELETE FROM test_case_auto_bind WHERE test_case_id = ?`
3. 清理计划用例关联：`DELETE FROM test_plan_case WHERE test_case_id = ?`
4. 删除用例本身

## 相关接口

| 接口 | 说明 |
|------|------|
| `GET /qa/testCase/list` | 用例列表 |
| `POST /qa/testCase/save` | 保存用例 |
| `POST /qa/testCase/update` | 更新用例 |
| `POST /qa/testCase/delete/{id}` | 删除用例 |
| `POST /qa/testCase/batchDelete` | 批量删除 |
| `GET /qa/testCase/{id}` | 用例详情 |
| `POST /qa/testCase/transition` | 状态流转 |
| `POST /qa/testCase/bindAuto` | 绑定自动化 |
| `POST /qa/testCase/unbindAuto` | 解绑自动化 |
| `GET /qa/testCase/autoOptions` | 可绑定自动化选项 |
| `GET /qa/testCase/export` | 导出 Excel |
| `GET /qa/testCaseSet/list` | 测试集列表 |
| `POST /qa/testCaseSet/save` | 保存测试集 |
| `POST /qa/testCaseSet/bind/{caseId}` | 用例绑定测试集 |
