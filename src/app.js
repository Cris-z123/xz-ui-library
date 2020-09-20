import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-input', Input)
Vue.component('z-row', Row)
Vue.component('z-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }
})
