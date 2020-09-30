import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const cart = () => import('../views/cart/cart.vue')
const home = () => import('../views/home/home.vue')
const category = () => import('../views/category/category.vue')
const profile = () => import('../views/profile/profile.vue')

export default new Router({
  mode:'history',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/profile',
      component:profile
    },
  ]
})
// require('../assets/css/base.css')