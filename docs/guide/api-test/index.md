# 接口测试

接口测试模块支持接口定义、接口调试、Mock 响应、环境变量、全局变量和数据模板。

## 模块组成

| 页面 | 路由 | 说明 |
|------|------|------|
| API 测试 | `/interface-test/apiList` | 接口目录树 + 多标签接口编辑 |
| API 场景 | `/interface-test/sceneList` | API 场景编排 |
| 环境管理 | `/interface-test/envConfig` | 团队级环境配置 |
| 数据模板 | `/interface-test/dataTemplate` | 数据模板管理 |

## 核心数据模型

接口定义存储在 `api_request` 表中，主要字段包括：

| 字段 | 说明 |
|------|------|
| `api_name` | 接口名称 |
| `api_node` | 节点类型：INTERFACE / FOLDER |
| `request_method` | HTTP 方法 |
| `request_path` | 请求路径 |
| `request_header` | 请求头（JSON） |
| `cookies` | Cookie（JSON） |
| `query` | Query 参数（JSON） |
| `body` | 请求体（JSON） |
| `env_info` | 环境相关配置（JSON） |
| `association_extraction` | 关联提取规则（JSON） |
| `api_result_assert` | 结果断言（JSON） |
| `mock_response` | Mock 响应配置（JSON） |
| `response_examples` | 响应示例（JSON） |
| `pre_script` | 前置脚本 |
| `post_script` | 后置脚本 |

::: tip 截图占位
此处需补充「API 测试主界面」截图，展示左侧目录树和右侧多标签编辑区。
:::
