import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/Home'
import about from '../components/about'
Vue.use(Router)
const routes=[
  {
    path:'/home',
    component:null
  },
  {
    path:'/auout',
    component:null
  }
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }
]





const router =new Router({
  routes
})
export default router
