<template>
    <div class="popover" 
        @click="onClick" ref="popover">
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
        props: {
            position: {
                type: String,
                default: 'left',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                if(this.position === 'top') {
                    this.$refs.contentWrapper.style.left = left + window.scrollY + 'px'
                    this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                } else if(this.position === 'bottom') {
                    this.$refs.contentWrapper.style.left = left + window.scrollY + 'px'
                    this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px'
                }else if(this.position === 'left') {
                    this.$refs.contentWrapper.style.left = left + window.scrollY + 'px'
                    let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
                }else if(this.position === 'right') {
                    this.$refs.contentWrapper.style.left = left + width + window.scrollY + 'px'
                    let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
                }
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
            top: 100%;
        }
        &::after {
            border-top-color: white;
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
            bottom: 100%;
        }
        &::after {
            border-bottom-color: white;
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
            left: 100%;
        }
        &::after {
            border-left-color: white;
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
            right: 100%;
        }
        &::after {
            border-right-color: white;
            right: calc(100% - 1px)
        }
    }
}
</style>