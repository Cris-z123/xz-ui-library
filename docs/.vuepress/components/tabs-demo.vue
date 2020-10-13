<template>
    <div class="tabs-wrapper">
        <z-tabs :selected.sync="selectedTab">
            <z-tabs-head>
                <z-tabs-item name="a">Tab1</z-tabs-item>
                <z-tabs-item name="b">Tab2</z-tabs-item>
                <z-tabs-item name="c" disabled>Tab3</z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
                <z-tabs-pane name="a">内容1</z-tabs-pane>
                <z-tabs-pane name="b">内容2</z-tabs-pane>
                <z-tabs-pane name="c">内容3</z-tabs-pane>
            </z-tabs-body>
        </z-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'
    import TabsHead from '../../../src/tabs-head'
    import TabsBody from '../../../src/tabs-body'
    export default {
        components: {
            'z-tabs': Tabs,
            'z-tabs-item': TabsItem,
            'z-tabs-pane': TabsPane,
            'z-tabs-head': TabsHead,
            'z-tabs-body': TabsBody,
        },
        data() { 
            return { 
                selectedTab: 'tab1' 
            } 
        }
    }
</script>

<style lang="scss" scoped>
.tabs-wrapper {
    border: 1px solid #eee;
    height: 100px;
}
</style>