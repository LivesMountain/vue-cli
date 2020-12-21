import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})



axios(
  {
    url:'http://123.207.32.32:8000/home/multidata',
    method:'get'
  }
).then(res =>{
  console.log(res);
})



// axios(
//   {
//     url:'http://123.207.32.32:8000/home/data?type=sell&page=2',
//     method:'get'
//   }
// ).then(res =>{
//   console.log(res);
// })
// 上面等价于下面
axios(
  {
    url:'http://123.207.32.32:8000/home/data',
    prarms:{
      type:'sell',
      page:1
    },
    method:'get'
  }
).then(res =>{
  console.log(res);
})


// 并发请求
axios.all([axios({
  url:'http://123.207.32.32:8000/home/data',

}),axios({
  url:'http://123.207.32.32:8000/home/data'
})]).then(res =>{
  console.log(res);
})


// 公共配置
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000
axios.all([axios({
  url:'/home/data',

}),axios({
  url:'/home/data'
})]).then(axios.spread((res1,res2) =>{
  console.log(res1);
  console.log(res2);
}))


// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/data',

// }),axios({
//   baseURL:'http://123.207.32.32:8000',
//   url:'/home/data',
//   timeout:5
// })]).then(axios.spread(res1,res2 =>{
//   console.log(res1);
//   console.log(res2);
// }))








const instance1=axios.create({
  baseURL:'http://123.207.32.32:8000',
  time:5000
})


instance1({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
})


instance1({
  url:'/home/data',
  params:{
    type:'pop',
    page:1
  }
}).then(res => {
  console.log(res);

})






import {request} from "./network/request"
// request({
//   url:'/home/multidata'
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })



// request({
//   baseconfig:{

//   },
//   success:function (res){

//   },
//   failure:function(err){

//   },
// })




request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err => {
  console.log(err);
})





