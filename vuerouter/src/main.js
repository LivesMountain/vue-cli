import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false
Vue.prototype.test= function(){
  console.log('test');
}
/* eslint-disable no-new */
new Vue({  
  el: '#app',
  router,
  render: h => h(App)
})
