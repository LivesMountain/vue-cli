import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import home from '../components/Home.vue'
// import about from '../components/about.vue'
// import user from "../components/user.vue";
Vue.use(Router)


const home = () => import('../components/Home.vue')
const about = () => import('../components/about.vue')
const user = () => import('../components/user.vue')
const news = () => import('../components/homenew.vue')
const message = () => import('../components/homemessage.vue')
const profile = () => import('../components/profile.vue')
const routes=[
  {
    path:'',
    redirect:'/home',
    // component:home,
  },
  {
    path:'/home',
    component:home,
    children:[
      {
        path:'',
        redirect:'new'
      },
      {
        path:'new',
        component:news
      },
      {
        path:'message',
        component:message
      }
    ]

  },
  {
    path:'/about',
    component:about
  },
  {
    path:'/user/:abc',
    component:user
  },
  {
    path:'/profile',
    component:profile
  }
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }
]





const router =new Router({
  routes,
  mode:'history'
})
export default router
