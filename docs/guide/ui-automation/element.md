# 元素库

元素库集中管理 UI 自动化所需的页面元素定位信息。

## 元素字段

| 字段 | 说明 |
|------|------|
| 元素名称 | 元素标识名称 |
| 元素类型 | ELEMENT / FOLDER |
| 定位方式 | id / xpath / css / name / class / tag / linkText 等 |
| 定位值 | 具体的定位表达式 |
| 描述 | 元素说明 |

## 目录树

元素库按目录树组织，支持：

- 新建文件夹和元素
- 拖拽排序、调整层级
- 批量删除

::: tip 截图占位
此处需补充「元素库列表」截图。
:::

## 复用优势

元素集中管理的优势在于：当页面元素定位发生变化时，只需在元素库中修改一次，所有引用该元素的场景自动生效。

## 相关接口

| 接口 | 说明 |
|------|------|
| `POST /element/pageElementList` | 元素列表 |
| `POST /element/getElementList` | 元素下拉选项 |
| `REQ /element/folderList` | 文件夹树 |
| `Get /element/getElementById` | 元素详情 |
| `Post /element/add` | 新增元素 |
| `Post /element/update` | 更新元素 |
| `Get /element/deleteElementOrFolder` | 删除元素/文件夹 |
| `Post /element/deleteElementBatch` | 批量删除 |
| `Post /element/updateElementSort` | 排序 |
