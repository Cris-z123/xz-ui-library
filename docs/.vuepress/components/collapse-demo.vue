<template>
    <div>
        <div class="collapse-wrapper">
            <div class="title">基础用法</div>
            <z-collapse :selected.sync="selected">
                <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
                <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
                <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
            </z-collapse>
        </div>
        <div class="collapse-wrapper">
            <div class="title">手风琴效果</div>
            <z-collapse :selected.sync="selected" single>
                <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
                <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
                <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
            </z-collapse>
        </div>
    </div>
</template>

<script>
    import Collapse from '../../../src/collapse.vue'
    import CollapseItem from '../../../src/collapse-item'
    export default {
        components: {
            'z-collapse': Collapse,
            'z-collapse-item': CollapseItem
        },
        data() {
            return {
                selected: ['1']
            }
        }
    }
</script>

<style lang="scss" scoped>
.collapse-wrapper {
    padding: 16px;
    margin: 16px;
    min-height: 150px;
    border: 1px solid #eee;
    > .title {
        font-size: 16px;
        padding: 8px;
    }
}
</style>