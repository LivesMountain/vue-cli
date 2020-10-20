import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import vuex from 'vuex'

// Vue.use(vuex)


Vue.config.productionTip = false

// Vue.prototype.$store= store
// Vue.
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
