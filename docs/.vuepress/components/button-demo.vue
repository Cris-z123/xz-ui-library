<template>
    <div>
        <div class="button-wrapper">
            <div class="title">基础用法</div>
            <z-button>默认按钮</z-button>
        </div>
        <div class="button-wrapper">
            <div class="title">带icon的按钮</div>
            <z-button icon="settings">默认按钮</z-button>
            <z-button icon="settings" iconPosition="right">默认按钮</z-button>
        </div>
        <div class="button-wrapper">
            <div class="title">loading按钮</div>
            <z-button :loading="true">默认按钮</z-button>
        </div>
        <div class="button-wrapper">
            <div class="title">禁用按钮</div>
            <z-button disabled>默认按钮</z-button>
        </div>
        <div class="button-wrapper">
            <div class="title">按钮组</div>
            <z-button-group>
                <z-button>默认按钮</z-button>
                <z-button>默认按钮</z-button>
                <z-button>默认按钮</z-button>
            </z-button-group>
        </div>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import buttonGroup from '../../../src/button-group'
    import Icon from '../../../src/icon'
    export default {
        components: {
            'z-button': Button,
            'z-button-group': buttonGroup
        }
    }
</script>

<style lang="scss" scoped>
.button-wrapper {
    padding: 16px;
    margin: 15px;
    min-height: 80px;
    border: 1px solid #eee;
    > .title {
        padding: 8px;
        font-size: 14px;
    }
}
</style>