<template>
    <div class="wrapper">
        <z-layout>
            <z-header>header</z-header>
            <z-layout>
                <z-sider>sider</z-sider>
                <z-content>content</z-content>
            </z-layout>
            <z-footer>footer</z-footer>
        </z-layout>
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Footer from '../../../src/footer'
    import Content from '../../../src/content'
    import Sider from '../../../src/sider'
    export default {
        components: {
            'z-layout': Layout,
            'z-header': Header,
            'z-footer': Footer,
            'z-content': Content,
            'z-sider': Sider
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    height: 400px;
    border: 1px solid #eee;
    padding: 32px;
}
.layout {
    height: 30vh;
    background-color: #eee;
    > .header {
        background: lighten(#3eaf7c, 15%);
        line-height: 50px;
        border-radius: 4px;
    }
    > .layout {
        > .sider {
            background: lighten(#3eaf7c, 30%);
            width: 50px;
            border-radius: 4px;
        }
        > .content {
            background: lighten(#3eaf7c, 40%);
            flex-grow: 1;
            border-radius: 4px;
        }
    }
    > .footer {
        background: lighten(#3eaf7c, 15%);
        line-height: 50px;
        border-radius: 4px;
    }
}
</style>