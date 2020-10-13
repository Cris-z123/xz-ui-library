---
title: Tabs - 标签页
sidebarDepth: 0
---
# Tabs

## 预览
标签页的基础形式

<tabs-demo/>

## 使用方法
此组件的 z-tabs z-tabs-item z-tabs-pane 必须有一一对应的 name。
```html
<z-tabs :selected.sync="selectedTab">
  <z-tabs-head>
    <z-tabs-item name='tab1'>Tab1</z-tabs-item>
    <z-tabs-item name='tab2'>Tab2</z-tabs-item>
    <z-tabs-item name='tab3' disabled>Tab3</z-tabs-item>
  </z-tabs-head>
  <z-tabs-body>
    <z-tabs-pane name='tab1'>内容1</z-tabs-pane>
    <z-tabs-pane name='tab2'>内容2</z-tabs-pane>
    <z-tabs-pane name='tab3'>内容3</z-tabs-pane>
  </z-tabs-body>
</z-tabs>
<script>
  export default {
    data() { 
      return { 
        selectedTab: 'tab1' 
      } 
    }
  }
</script>
```

## 选项
| 参数         | 说明         | 类型    | 可选值    | 默认值 |
| ------------ |:-------------|:-------|:----------|:-------|
| selected     | 默认高亮标签 | string  |-          |-      |
| disabled     | 不可用状态   | boolean |-          |false  |

::: tip
z-tabs的子组件应该是 z-tabs-head 和 z-tabs-body ，否则你会得到一个警告。
:::
::: tip
disabled 状态 disabled 属性用于 z-tabs-item 标签。
:::