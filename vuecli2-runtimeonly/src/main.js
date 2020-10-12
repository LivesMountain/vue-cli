import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
console.log(App)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 这种模式下就是render->vdom->ui
// 这种模式下的vue里面的template是由webpack-template-compiler解析的  
//  解析出来的是render函数。