<template>
    <div class="popover" 
         ref="popover">
        <div ref="contentWrapper" 
            class="content-wrapper" 
            v-if="visible"
            :class="{[`position-${position}`]: true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" 
            style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'XZPopover',
        data() {
            return { visible: false }
        },
        mounted() {
            if(this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if(this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        computed: {
            openEvent () {
                if(this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent () {
                if(this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                let positions = {
                    top: {
                        left: left + window.scrollY,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollY,
                        top: top + height + window.scrollY
                    },
                    left: {
                        left: left + window.scrollY,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                    right: {
                        left: left + width + window.scrollY,
                        top: top + window.scrollY + (height - height2) / 2
                    }
                }
                this.$refs.contentWrapper.style.left = positions[this.position].left + 'px'
                this.$refs.contentWrapper.style.top = positions[this.position].top + 'px'

            },
            onClickDocument (e) {
                if(this.$refs.popover 
                    && (this.$refs.popover === e.target
                    || this.$refs.popover.contains(e.target))){ 
                        return 
                }
                if(this.$refs.contentWrapper 
                    && (this.$refs.contentWrapper  === e.target
                    || this.$refs.contentWrapper .contains(e.target))){ 
                        return 
                }
                this.close()
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if(this.$refs.triggerWrapper.contains(event.target)){
                    if(this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
    position: relative;
    display: inline-block;
    vertical-align: top;
}
.content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background: white;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, .5));
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: 10px solid transparent;
    }
    &.position-top {
        transform: translateY(-100%);
        margin-top: -10px;
        &::before, &::after {
            left: 10px;
        }
        &::before {
            border-top-color: black;
            border-bottom: none;
            top: 100%;
        }
        &::after {
            border-top-color: white;
            border-bottom: none;
            top: calc(100% - 1px)
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &::before, &::after {
            left: 10px;
        }
        &::before {
            border-bottom-color: black;
            border-top: none;
            bottom: 100%;
        }
        &::after {
            border-bottom-color: white;
            border-top: none;
            bottom: calc(100% - 1px)
        }
    }
    &.position-left {
        transform: translateX(-100%);
        margin-left: -10px;
        &::before, &::after {
            transform: translateY(-50%);
            top: 50%;
        }
        &::before {
            border-left-color: black;
            border-right: none;
            left: 100%;
        }
        &::after {
            border-left-color: white;
            border-right: none;
            left: calc(100% - 1px)
        }
    }
    &.position-right {
        margin-left: 10px;
        &::before, &::after {
            transform: translateY(-50%);
            top: 50%;
        }
        &::before {
            border-right-color: black;
            border-left: none;
            right: 100%;
        }
        &::after {
            border-right-color: white;
            border-left: none;
            right: calc(100% - 1px)
        }
    }
}
</style>