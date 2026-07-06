# 测试运行

测试运行模块用于管理自动化任务计划、Webhook 通知和测试报告。

## 模块组成

| 页面 | 路由 | 说明 |
|------|------|------|
| 任务计划 | `/test-run/planList` | 自动化任务计划列表 |
| 任务详情 | `/test-run/planDetail/:planId` | 任务计划配置/执行 |
| Webhook | `/test-run/webhook` | 通知配置 |
| 测试报告 | `/test-run/reportList` | 报告列表 |
| 报告详情 | `/test-run/reportDetail/:reportId` | 报告详情 |

## 两种计划

FastTest 中存在两类「计划」：

- **QA 测试计划**（`/qa/testPlan`）：组合文字用例，手动执行。
- **自动化任务计划**（`/test-run/planList`）：组合 UI/API 场景，支持定时和手动执行。

本章档描述的是自动化任务计划。

::: tip 截图占位
此处需补充「任务计划列表页」截图。
:::
