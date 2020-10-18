import Vue from 'vue'
import App from './App'
import router from './router'
// import stroe from './stroe'

// Vue.use(vuex)


Vue.config.productionTip = false
// Vue.
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
