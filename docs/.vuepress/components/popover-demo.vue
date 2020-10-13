<template>
    <div>
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
                <button @click="close" class="close">关闭</button>
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
    </div>
</template>

<script>
    import Popover from '../../../src/popover.vue'
    export default {
        components: {
            'z-popover': Popover
        }
    }
</script>

<style lang="scss" scoped>
button {
    border: 1px solid #dcdfe6;
    border-radius: 8px;
    background-color: #fff;
    line-height: 36px;
    margin: 10px;
    padding: 2px 18px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
}
.close {
    line-height: 24px;
}
</style>