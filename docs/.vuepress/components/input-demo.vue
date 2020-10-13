<template>
    <div class="wrapper">
        <div class="input-wrapper">
            <div class="title">基础用法</div>
            <z-input placeholder="请输入内容"></z-input>
        </div>
        <div class="input-wrapper">
            <div class="title">禁用状态</div>
            <z-input placeholder="请输入内容" disabled></z-input>
        </div>
        <div class="input-wrapper">
            <div class="title">只读状态</div>
            <z-input placeholder="请输入内容" readonly></z-input>
        </div>
        <div class="input-wrapper">
            <div class="title">错误提示</div>
            <z-input placeholder="请输入内容" error="错误信息"></z-input>
        </div>
        <div class="input-wrapper">
            <div class="title">数据绑定</div>
            <z-input v-model="value"></z-input>
            <span>value:&nbsp;{{value}}</span>
        </div>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        components: {
            'z-input': Input
        },
        data(){
            return{ value:'双向绑定' }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 15px;
}
.input-wrapper {
    padding: 15px;
    margin: 15px;
    min-height: 80px;
    border: 1px solid #eee;
    > .title {
        font-size: 14px;
    }
}
</style>