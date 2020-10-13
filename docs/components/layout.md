---
title: Layout - 布局
sidebarDepth: 0
---
# Layout

## 预览
布局的基础形式

<layout-demo/>

## 使用方法
```html
<z-layout>
  <z-header> header </z-header>
  <z-layout>
    <z-sider> sider </z-sider>
    <z-content> content </z-content>
  </z-layout>
  <z-footer> footer </z-footer>
</z-layout>
<style>
.layout {
  height: 30vh;
  background-color: #fff;
}
.header {
  background: lighten(#3eaf7c, 15%);
  line-height: 50px;
}
.layout .sider {
  background: lighten(#3eaf7c, 30%);
  width: 50px;
}
.layout .content {
  background: lighten(#3eaf7c, 30%);
}
.footer {
        background: lighten(#3eaf7c, 15%);
        line-height: 50px;
}
</style>
```


## 选项
提供基础布局，样式自定义

## 注意事项
::: tip
* z-layout: 布局容器，可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。
* z-header: 顶部布局，可嵌套任何元素，只能放在 Layout 中。
* z-sider: 侧边栏，可嵌套任何元素，只能放在 Layout 中。
* z-content: 内容部分，可嵌套任何元素，只能放在 Layout 中。
* z-footer: 底部布局，可嵌套任何元素，只能放在 Layout 中。
:::