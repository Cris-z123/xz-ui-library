<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'XZTabsHead',
        inject: ['eventBus']
    }
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
    display: flex;
    height: $tab-height;
    align-items: center;
    justify-content: flex-start;
    > .actions-wrapper {
        margin-left: auto;
    }
}
</style>