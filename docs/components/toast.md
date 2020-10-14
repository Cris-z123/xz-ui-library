---
title: Toast - 弹出提示框
sidebarDepth: 0
---
# Toast

## 预览
弹出提示框的基础形式

<ClientOnly>
  <toast-demo/>
</ClientOnly>

## 使用方法
```html
<z-button @click="auto">点击</z-button>
<z-button @click="middle">点击</z-button>
<z-button @click="bottom">点击</z-button>

<script>
    import Vue from 'vue'
    import Toast from '../../../src/toast.vue'
    import Button from '../../../src/button.vue'
    import plugin from '../../../src/plugin.js'
    Vue.use(plugin)
    
    export default {
        components: {
            'z-toast': Toast,
            'z-button': Button
        },
        methods: {
            auto() {
                this.$toast('我是 toast 内容', {
                    autoClose: 5,
                    closeButton: {
                        text:'确定',
                        callback:()=>{
                            console.log('回调的输出')
                        }
                    }
                })
            },
            middle(){
                this.$toast('我是 toast 内容', { position: 'mid' })
            },
            bottom(){
                this.$toast('我是 toast 内容', { position: 'bottom' })
            }
        }
    }
</script>
```

## 选项
| 参数         | 说明                 | 类型            | 可选值        | 默认值|
| ------------ |:---------------------|:----------------|:--------------|:------|
| autoClose    | 自动关闭时间         | number/boolean  |-              |3      |
| closeButton  | 关闭按钮（支持回调） | cb/string       |-              |-      |
| position     | 弹出位置             | string          |top/bottom/mid |top    |