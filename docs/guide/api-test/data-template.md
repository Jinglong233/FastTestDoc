# 数据模板

数据模板用于定义可复用的结构化数据生成规则，可在接口请求、Mock 响应、脚本中引用。

## 数据模型

数据模板和文件夹统一存储在 `data_template` 表中：

| 字段 | 说明 |
|------|------|
| `node_type` | FOLDER / TEMPLATE |
| `parent_id` | 父节点 ID，0 表示根 |
| `template_name` | 模板/文件夹名称 |
| `template_schema` | 字段规则（JSON，文件夹为 NULL） |
| `is_shared` | 是否共享 |
| `sort` | 排序 |

::: tip 注意
旧文档中曾设计 `data_template_folder` 分表，当前系统已改为单表自引用树结构。
:::

## 字段规则

模板由多个字段规则组成，规则类型包括：

- 字符串：姓名、手机号、邮箱、UUID、随机字符串、固定值等
- 数字：整数、浮点数、长整数、双精度
- 日期时间：日期、日期时间、时间、时间戳
- 个人信息：身份证、银行卡号、地址、公司名
- 枚举选择
- 数据模板引用

::: tip 截图占位
此处需补充「数据模板编辑页」截图，展示字段规则表格和子字段展开。
:::

## 单条生成

编辑模板时，可点击预览按钮实时生成一条样例数据。

## 批量生成

可指定数量批量生成数据，单次最多 1000 条，支持导出 JSON / CSV / Excel。

## 引用方式

### 在请求体中引用

```json
{
  "user": "{{__TEMPLATE(123)__}}",
  "users": "{{__TEMPLATE_BATCH(123, 5)__}}"
}
```

### 在脚本中使用

```javascript
const user = context.utils.template(123);
const users = context.utils.templateBatch(123, 10);
context.setVariable("user", user);
context.setVariable("users", users);
```

## 相关接口

| 接口 | 说明 |
|------|------|
| `POST /dataTemplate/save` | 保存模板 |
| `POST /dataTemplate/folder/save` | 保存文件夹 |
| `GET /dataTemplate/tree` | 模板树 |
| `GET /dataTemplate/{id}` | 模板详情 |
| `POST /dataTemplate/delete/{id}` | 删除节点 |
| `POST /dataTemplate/sort` | 拖拽排序 |
| `POST /dataTemplate/copy/{id}` | 复制模板 |
| `POST /dataTemplate/generate` | 单条生成 |
| `POST /dataTemplate/batchGenerate` | 批量生成 |
| `POST /dataTemplate/batchGenerate/export` | 批量生成并导出 |
