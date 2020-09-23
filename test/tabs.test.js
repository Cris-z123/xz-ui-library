const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.component('z-tabs-head', TabsHead)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
      })
    
      it('接受 selected 属性', (done) => {
    
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <g-tabs selected="finance">
            <g-tabs-head>
              <g-tabs-item name="woman"> 美女 </g-tabs-item>
              <g-tabs-item name="finance"> 财经 </g-tabs-item>
              <g-tabs-item name="sports"> 体育 </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
              <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
              <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
        `
        let vm = new Vue({
          el: div
        })
        vm.$nextTick(() => {
          let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
          expect(x.classList.contains('active')).to.be.true
          done()
        })
      })
    
      it('可以接受 direction prop', () => {
    
      })
})