---
title: Collapse - 折叠面板
sidebarDepth: 0
---
# Collapse

## 预览


<collapse-demo/>

## 使用方法
```html
<z-collapse :selected.sync="selected">
  <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
  <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
  <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
</z-collapse>

<z-collapse :selected.sync="selected" single>
  <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
  <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
  <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
</z-collapse>
```

## 选项
| 参数        | 说明           | 类型    | 可选值    | 默认值 |
| ----------- |:-------------- |:--------|:----------|:------|
| title       | 折叠面板的标题 | string  |-          |-      |
| name        | 选中的内容     | string  |-          |left   |
| single      | 手风琴状态     | boolean |-          |false  |
| selected    | 双向绑定       | boolean |-          |false  |