# Mock 响应

Mock 用于在接口调试/场景执行时模拟后端响应，避免依赖真实服务。

## 适用场景

- 后端接口未开发完，提前编写接口定义和测试用例
- 后端不稳定/限流，希望自动化场景稳定跑通
- 模拟异常响应（500、特殊错误码）验证断言逻辑
- 多团队协作时，依赖方未 ready 先用 Mock 顶住

## 配置入口

在 API 测试页面编辑接口，内层 Tab 切换到 **Mock**：

- 启用 Mock 开关
- 设置响应状态码
- 设置响应延迟（ms）
- 配置响应 Header
- 配置响应体

::: tip 截图占位
此处需补充「Mock 配置面板」截图。
:::

## 响应体生成方式

Mock 响应体支持两种模式：

### 1. 字段规则模式（推荐）

通过可视化字段规则配置生成 JSON，无需手写表达式。

每个字段包含：

| 属性 | 说明 |
|------|------|
| 字段名 | JSON 中的 key |
| 字段类型 | STRING / INT / FLOAT / BOOLEAN / OBJECT / ARRAY |
| Mock 规则 | 标量字段的生成规则 |
| 参数 | 规则对应的参数 |
| 子字段 | OBJECT / ARRAY 类型时展开配置 |

### 2. 原始 JSON 模式

支持手写 JSON，并解析 <code v-pre>{{__MOCK()__}}</code>、<code v-pre>{{__TEMPLATE()__}}</code>、`${var}` 等表达式。

## 参数级 Mock

除接口级 Mock 响应外，Header / Query / Cookie / Body 等参数值也支持配置 Mock 生成规则。

参数值固定使用占位符 <code v-pre>{{__MOCK__}}</code>，真实生成规则存储在同参数的 `mockConfig` 字段中。

## 执行行为

- 接口 `mock_response.enabled = true` 时，执行器在变量替换后、发送真实请求前返回 Mock 响应
- Mock 响应状态固定为 `mock`，前端结果区可识别
- 断言、提取规则、后置脚本对 Mock 响应同样生效

## 相关接口

| 接口 | 说明 |
|------|------|
| `REQ /mock/generate` | 根据表达式生成单个 Mock 值 |
| `POST /mock/preview` | 预览字段规则生成的响应体 |
