---
title: 快速上手
sidebarDepth: 2
---
# 快速上手

## 引入必要资源
```js
import {Button} from "xz-ui";
import "xz-ui/dist/index.css";
```
## 注册组件
```js
export default {
  name: "ComponentName",
  components: {
    "z-button": Button,
  },
}
```
## 使用
代码:
```html
<template>
  <div>
    <z-button>默认按钮</z-button>
  </div>
</template>
```