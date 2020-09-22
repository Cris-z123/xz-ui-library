<template>
    <div class="toast" :class="toastClasses" ref="wrapper">
        <slot></slot>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'XZToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'mid'].indexOf(value) >= 0
                }              
            }
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        },
        mounted() {
            if(this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(() => {
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, .75);
.toast {    
    position: fixed;
    left: 50%;
    display: flex;
    align-items: center;
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8;
    background: $toast-bg;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    padding: 0 16px;
    &.position-top {
        top: 10px;
        transform: translateX(-50%);
    }
    &.position-mid {
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &.position-bottom {
        bottom: 10px;
        transform: translateX(-50%);
    }
}
.close {
    padding-left: 16px;
    flex-shrink: 0;
}
.line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
}
</style>