# 逻辑删除与级联行为

FastTest 核心模块启用 MyBatis-Plus `@TableLogic` 逻辑删除，删除操作不会真正移除数据，而是将 `is_deleted` 置为 1 并写入 `deleted_at`。

## 启用逻辑删除的表

### QA 模块

- `requirement`
- `bug`
- `test_case`
- `test_case_set`
- `qa_module`
- `test_plan`

### 自动化模块

- `scene`
- `api_request`
- `plan`
- `environment`
- `global_var`
- `data_template`
- `element`
- `report`

### 基础平台

- `team`
- `project`
- `role`

## 级联删除行为

### 删除需求

1. 解绑关联用例：`UPDATE test_case SET requirement_id = NULL`
2. 解绑关联 BUG：`UPDATE bug SET requirement_id = NULL`
3. 子需求变根需求：`UPDATE requirement SET parent_id = 0`
4. 逻辑删除需求本身

### 删除用例

1. 解绑关联 BUG：`UPDATE bug SET test_case_id = NULL`
2. 物理清理自动化绑定：`DELETE FROM test_case_auto_bind`
3. 物理清理计划用例关联：`DELETE FROM test_plan_case`
4. 逻辑删除用例本身

### 删除 BUG

1. 物理删除 `bug_comment`
2. 物理删除 `bug_operation_log`
3. 逻辑删除 BUG 本身

### 删除测试集

测试集删除仅删除测试集本身和 `test_case_set_relation` 关联关系，**不删除用例**。

### 删除 QA 模块

模块删除后，模块下的需求、BUG、用例保留，仅 `module_id` 被清空。

### 删除场景/API 目录

目录删除会递归逻辑删除子节点，并物理清理 `test_step` 和接口用例数据。

### 删除计划

自动化计划删除前，若任务正在运行会先停止任务，再执行逻辑删除。

### 删除环境/全局变量

直接逻辑删除。

## 编号唯一约束

`requirement`、`bug`、`test_case` 的编号唯一约束为复合唯一索引 `(code, is_deleted)`，支持删除后复用编号。

## 技术注意

MyBatis-Plus 的 `update(entity, wrapper)` 方法只会把非 null 字段放入 SET 子句。因此设置 `NULL` 时必须使用 `UpdateWrapper.set("field", null)`，而不是 `entity.setField(null)`。

```java
// 正确
UpdateWrapper<TestCase> wrapper = new UpdateWrapper<>();
wrapper.set("requirement_id", null);
wrapper.eq("requirement_id", requirementId);
testCaseMapper.update(null, wrapper);

// 错误（会生成缺少 SET 子句的 SQL）
TestCase entity = new TestCase();
entity.setRequirementId(null);
UpdateWrapper<TestCase> wrapper = new UpdateWrapper<>();
wrapper.eq("requirement_id", requirementId);
testCaseMapper.update(entity, wrapper);
```

## CTE 查询过滤

递归查询场景/API 目录时，需追加 `is_deleted = 0` 条件，避免返回已删除节点。
