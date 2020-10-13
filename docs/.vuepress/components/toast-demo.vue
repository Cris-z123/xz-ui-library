<template>
    <div>
        <div class="input-wrapper">
            <div class="title">toast基础用法</div>
            <z-button @click="auto">点击</z-button>
        </div>
        <div class="input-wrapper">
            <div class="title">手动关闭弹出框</div>
            <z-button @click="handleClose">点击</z-button>
        </div>
        <div class="input-wrapper">
            <div class="title">居中弹出</div>
            <z-button @click="middle">点击</z-button>
        </div>
        <div class="input-wrapper">
            <div class="title">下方弹出</div>
            <z-button @click="bottom">点击</z-button>
        </div>
    </div>
</template>

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
            handleClose() {
                this.$toast('我是 toast 内容', {
                    autoClose: false
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

<style lang="scss" scoped>
.input-wrapper {
    padding: 16px;
    margin: 16px;
    min-height: 50px;
    border: 1px solid #eee;
    > .title {
        font-size: 14px;
        padding: 8px 0;
    }
}
</style>