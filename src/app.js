import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Layout from './layout'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import PopOver from './popover'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-input', Input)
Vue.component('z-row', Row)
Vue.component('z-col', Col)
Vue.component('z-header', Header)
Vue.component('z-footer', Footer)
Vue.component('z-content', Content)
Vue.component('z-layout', Layout)
Vue.component('z-sider', Sider)
Vue.component('z-toast', Toast)
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-popover', PopOver)

Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        selectedTab: 'a'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast() {
            this.$toast('i am message')
        },
        yyy(data){
            console.log('yyy')
            console.log(data)
        }
    }
})
