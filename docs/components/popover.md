---
title: Popover - 弹出框
sidebarDepth: 0
---
# Popover

## 预览
弹出框的基础形式

<ClientOnly>
  <popover-demo/>
</ClientOnly>

## 使用方法
```html
<z-popover>
    <template slot="content" slot-scope="{close}">
      <div>展示内容1</div>
    </template>
    <template>
      <button>click激活</button>
    </template>
</z-popover>
<z-popover>
    <template slot="content" slot-scope="{close}">
      <div>展示内容1</div>
        <button @click="close">关闭</button>
     </template>
    <template>
        <button>click激活</button>
    </template>
</z-popover>
 <z-popover position="right" trigger="hover">
    <template slot="content">
        <div>展示内容2</div>
    </template>
    <template>
        <button>hover激活</button>
    </template>
</z-popover>
```


## 选项
| 参数      | 说明      | 类型    | 可选值                | 默认值|
| --------- |:---------:|:--------|:----------------------|:------|
| position  | 显示位置  | string  |top/bottom/left/right  |top    |
| trigger   | 显示事件  | string  |click/hover            |click  |