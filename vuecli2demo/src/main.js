// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement){
    // createElement("标签",{标签属性}， ['标签内容'])
    return createElement('h2',{class:'box'},['hello'])
  }
})
// 这种模式就是template->ast->render->vdom->ui