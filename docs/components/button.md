---
title: Button - 按钮
sidebarDepth: 0
---
# 按钮

## 预览
按钮的基础形式

<ClientOnly>
  <button-demo/>
</ClientOnly>

## 使用方法
```html
<z-button>默认按钮</z-button>
<z-button icon="settings">默认按钮</z-button>
<z-button :loading="true">默认按钮</z-button>
<z-button disabled>默认按钮</z-button>
<z-button-group>
  <z-button>默认按钮</z-button>
  <z-button>默认按钮</z-button>
  <z-button>默认按钮</z-button>
</z-button-group>
```

## 选项
| 参数         | 说明       | 类型    | 可选值    | 默认值 |
| ------------ |:---------- |:--------|:----------|:------|
| icon         | 图标名     | string  |-          |-      |
| iconPosition | 图标位置   | string  |left/right |left   |
| loading      | 加载中状态 | boolean |-          |false  |
| disabled     | 不可用状态 | boolean |-          |false  |