<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'XZTabs',
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                defalult: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
        }
    }
</script>

<style lang="scss" scoped>

</style>