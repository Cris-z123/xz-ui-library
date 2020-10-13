---
title: Input - 输入框
sidebarDepth: 0
---
# Input

## 预览
输入框的基础形式

<input-demo/>

## 使用方法
```html
<z-input></z-input>
<z-input disabled></z-input>
<z-input readonly></z-input>
<z-input error="错误信息"></z-input>
<z-input v-model="value"></z-input>
<span>value:&nbsp;{{value}}</span>

<script>
    export default {
        data(){
            return{ value:'双向绑定' }
        }
    }
</script>
```


## 选项
| 参数        | 说明          | 类型    | 可选值    | 默认值 |
| ----------- |:--------------|:--------|:----------|:------|
| v-model     | 双向绑定      | string  |-          |-      |
| error       | 错误提示      | string  |-          |-      |
| readonly    | 只读状态      | boolean |-          |false  |
| disabled    | 不可用状态    | boolean |-          |false  |
| placeholder | 输入框占位文本| string  |-          |-      |