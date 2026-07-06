# 核心概念

使用 FastTest 前，先了解平台中的几个核心概念和数据组织方式。

## 团队（Team）

团队是 FastTest 的顶层隔离单位，相当于一个独立的工作空间。

- 每个用户可以加入多个团队，在顶部导航栏切换当前团队。
- 切换团队时，项目上下文会被清空，避免跨团队数据串扰。
- 团队下的数据包括：项目、成员、角色模板、全局变量、环境配置等。

对应数据库表：`team`、`team_member`。

::: tip 截图占位
此处需补充一张「顶部团队切换下拉框」的截图。
:::

## 项目（Project）

项目是团队下的数据容器，需求、用例、BUG、自动化场景等数据都归属于项目。

- 进入项目后，所有页面只展示当前项目的数据。
- 项目概览页展示质量管理和自动化测试的统计卡片。
- 切换项目时会重新加载当前用户在项目下的权限。

对应数据库表：`project`。

::: tip 截图占位
此处需补充一张「项目概览页」截图，展示质量管理/自动化测试标签切换和统计卡片。
:::

## QA 模块（Module）

QA 模块用于对需求、BUG、用例进行分类，支持多级树形结构。

- 每个项目有一套独立的 QA 模块树。
- 模块可以拖拽排序、调整层级。
- 删除模块时，模块下的需求、BUG、用例不会被删除，仅解除 module_id 关联。

对应数据库表：`qa_module`。

::: tip 截图占位
此处需补充一张「QA 模块树」截图。
:::

## 需求（Requirement）

需求是测试工作的源头，描述需要被验证的功能点。

- 支持 Epic → Story 两级层级，`parent_id` 为 0 表示根需求。
- 支持状态自由流转：DRAFT → REVIEWING → CONFIRMED → DEVELOPING → TESTING → RELEASED → CLOSED。
- 可关联用例和 BUG，支持血缘追踪。

对应数据库表：`requirement`。

## 用例（Test Case）

用例是具体的测试执行单元，描述如何验证一个功能点。

- 用例通过 `module_id` 归属 QA 模块，通过 `test_case_set` 组织成测试集。
- 支持绑定自动化场景：`test_case_auto_bind` 关联 UI 场景或 API 用例。
- 支持状态流转：DRAFT → REVIEWING → REVIEWED → DEPRECATED。

对应数据库表：`test_case`、`test_case_set`、`test_case_set_relation`、`test_case_auto_bind`。

## BUG

BUG 记录测试过程中发现的问题。

- 支持关联需求、用例、测试计划用例，明确问题来源。
- 状态机：NEW → CONFIRMED → FIXING → FIXED → VERIFIED → CLOSED，或 REJECTED。
- 支持评论、操作日志、站内信通知。

对应数据库表：`bug`、`bug_comment`、`bug_operation_log`。

## 场景（Scene）

场景是自动化测试的核心执行单元，分为 UI 场景和 API 场景。

- UI 场景：由多个 UI 测试步骤组成，调用元素库中的页面元素。
- API 场景：由多个 API 请求步骤组成，可引用接口测试中的接口用例。
- 场景和目录统一用 `scene` 表管理，`scene_category` 字段区分 UI / API。

对应数据库表：`scene`、`test_step`。

## 元素（Element）

元素是 UI 自动化中的页面元素定位信息。

- 元素库按目录树组织，支持元素和文件夹两种节点。
- 每个元素包含定位方式（locator_type）和定位值（locator_value）。
- 元素可在多个 UI 场景中复用。

对应数据库表：`element`。

## 接口（ApiRequest）

接口是 API 测试中的请求定义，也作为 API 场景中的步骤来源。

- 支持目录树组织，节点类型为 INTERFACE 或 FOLDER。
- 包含请求方法、路径、Header、Query、Cookie、Body、断言、提取规则、Mock 响应等。
- 支持 Swagger 导入、复制、排序。

对应数据库表：`api_request`。

## 环境（Environment）

环境用于管理不同部署环境的基础配置。

- 环境归属于团队，可被团队下所有项目使用。
- 包含基础 URL、Header、Cookie、变量、数据库配置等。

对应数据库表：`environment`。

## 全局变量（GlobalVar）

全局变量是团队级的共享变量，分为 HEADER、COOKIE、VARIABLE、ASSERT 四种类型。

- 可在接口测试、API 场景中引用。
- 支持按团队隔离。

对应数据库表：`global_var`。

## 数据模板（DataTemplate）

数据模板用于定义可复用的结构化数据生成规则。

- 数据模板和文件夹统一用 `data_template` 表管理，`node_type` 区分 FOLDER / TEMPLATE。
- 支持单条生成、批量生成、导出 JSON/CSV/Excel。
- 可在接口请求、Mock 响应、脚本中引用。

对应数据库表：`data_template`。

## 测试计划（Plan）

测试计划用于组合执行用例或场景。

- QA 测试计划：组合文字用例，手动/批量执行。
- 自动化任务计划：组合 UI/API 场景，支持 Cron 定时执行和手动触发。
- 执行完成后生成测试报告。

对应数据库表：`test_plan`（QA）、`plan`（自动化）。

## 报告（Report）

报告汇总一次测试计划的执行结果。

- 包含场景数、步骤数、断言数、通过/失败/跳过统计。
- 支持查看每个步骤的请求/响应详情、截图、Trace 日志等。

对应数据库表：`report`。
