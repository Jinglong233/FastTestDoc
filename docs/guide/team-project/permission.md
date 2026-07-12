# 权限模型

FastTest 采用 RBAC（Role-Based Access Control）权限模型，通过角色模板将权限批量分配给用户。

## 核心实体

| 实体 | 说明 | 对应表 |
|------|------|--------|
| 权限点（Permission） | 最小的权限单元，格式为 `模块:资源:操作` | `permission` |
| 角色（Role） | 权限点的集合 | `role` |
| 用户授权（UserRole） | 用户在某个团队/项目下拥有什么角色 | `user_role` |

## 权限点格式

权限码统一采用 `模块:资源:操作` 三段式，例如：

- `qa:requirement:view` — 查看需求
- `qa:requirement:create` — 创建需求
- `qa:requirement:update` — 编辑需求
- `qa:requirement:delete` — 删除需求
- `qa:requirement:transition` — 需求状态流转

## 角色模板

角色分为系统角色和自定义模板：

- `scope_type = SYSTEM`：系统内置角色，全局可用。
- `scope_type = TEMPLATE`：自定义角色模板，按团队/项目创建后可复用。

::: tip 截图占位
此处需补充「角色权限分配抽屉」截图，展示按业务域标签页勾选权限的界面。
:::

## 授权范围

用户授权通过 `user_role.scope_id` 区分生效范围：

- `scope_id = team.id`：角色在团队级生效。
- `scope_id = project.id`：角色在项目级生效。

同一个用户在不同团队、不同项目可以拥有不同角色。

## 权限校验

后端使用 Sa-Token 的 `@SaCheckPermission` 注解校验接口权限；前端通过 `/rbac/user/permissions` 获取当前用户权限列表，控制按钮/菜单显示。


