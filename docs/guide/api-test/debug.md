# 接口调试

接口编辑完成后，可直接在页面内发送请求并查看响应结果。

## 调试表单

调试区域包含：

- 请求方法下拉（GET/POST/PUT/DELETE 等）
- 请求路径输入框
- Query 参数表格
- Header 参数表格
- Cookie 参数表格
- Body 编辑器（支持 JSON/XML/FORM_DATA/x-www-form-urlencoded）

::: tip 截图占位
此处需补充「接口调试表单」截图。
:::

## 断言与提取

### 断言

支持对接口响应设置断言规则，例如：

- 状态码等于 200
- 响应体某字段等于预期值
- 响应头包含指定内容

### 关联提取

支持从响应中提取字段保存为变量，供后续步骤使用：

- JSON Path 提取
- 正则提取
- Header 提取

::: tip 截图占位
此处需补充「断言/提取规则配置」截图。
:::

## 响应结果

发送请求后，响应区展示：

- 实际请求信息
- 响应状态码
- 响应 Header
- 响应 Body
- 断言执行结果

::: tip 截图占位
此处需补充「接口响应结果区」截图。
:::

## 脚本

接口支持前置脚本和后置脚本，用于动态修改变量或处理响应。

```javascript
// 前置脚本示例：设置变量
context.setVariable("token", "abc123");

// 后置脚本示例：从响应中提取变量
const json = JSON.parse(context.response.body);
context.setVariable("userId", json.data.id);
```

## 发送链路注意

JSON/XML 请求体发送时，为避免 okhttp 自动追加 `; charset=utf-8` 导致服务端解析失败，后端使用 `RequestBody.create(MediaType, byte[])` 重载，原样发送 Content-Type。

## 相关接口

| 接口 | 说明 |
|------|------|
| `REQ /interface/debug` | 接口调试 |
| `REQ /interface/debugByConfig` | 按配置调试 |
