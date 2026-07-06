# Webhook 通知

任务计划执行完成后，可通过 Webhook 发送通知到外部系统。

## 支持的 Webhook 类型

| 类型 | 说明 |
|------|------|
| DINGTALK | 钉钉机器人 |
| WECHAT | 企业微信机器人 |
| FEISHU | 飞书机器人 |
| CUSTOM | 自定义 Webhook |

## Webhook 字段

| 字段 | 说明 |
|------|------|
| 名称 | Webhook 名称 |
| 类型 | 机器人类型 |
| URL | 机器人 Webhook 地址 |
| Secret | 签名密钥 |
| 通知时机 | 成功/失败/总是 |
| @手机号 | 钉钉/飞书 @ 指定用户 |

::: tip 截图占位
此处需补充「Webhook 配置页」截图。
:::

## 测试 Webhook

配置完成后，可点击「测试」按钮发送一条测试消息，验证配置是否正确。

::: tip 截图占位
此处需补充「Webhook 测试弹窗」截图。
:::

## 在计划中使用

创建/编辑任务计划时，可选择已配置的 Webhook，任务执行完成后自动触发通知。

## 相关接口

| 接口 | 说明 |
|------|------|
| `GET /planWebhook/list` | Webhook 列表 |
| `POST /planWebhook/save` | 保存 Webhook |
| `POST /planWebhook/update` | 更新 Webhook |
| `GET /planWebhook/delete` | 删除 Webhook |
| `POST /planWebhook/test` | 测试 Webhook |
