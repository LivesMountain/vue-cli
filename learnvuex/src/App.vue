<template>
  <div id="app">
    <h2>{{counter}}</h2>
    <button @click="counter++">+++</button>
    <button @click="counter--">---</button>
    <h2>store</h2>
    <button @click="addition">+++</button>
    <button @click="sub">---</button>


    <h2>{{$store.getters.powercounter}}</h2>
    <!-- <h2>{{more20stu}}  </h2> -->
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stu.length}}</h2>
    <h2>{{$store.getters.more20length}}</h2>
    <h2>{{$store.getters.moreagestu(20)}}</h2>
    <hellowordvue :ccounter='counter'></hellowordvue>


    <button @click='addcount(5)'>111</button>
    <button @click='addcount(10)'>222</button>


    <button @click='addstudent'>add</button>
    <h2>{{$store.state.students}}</h2>





    <h2>-------------app的内容  info对象的内容是否是响应式的</h2>
    <button @click="updateinfo">updatename</button>
    <h2>{{$store.state.info}}</h2>
    <!-- <router-view/> -->


    <!-- module拆分vuex -->
    <button @click="updateName">module</button>
    {{$store.state.a.name}}
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname1}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>


    <button @click='aactionname'>222</button>
  </div>
</template>

<script>
import hellowordvue from './components/HelloWorld.vue'
import { INCREMENT } from './store/mutations-types.js'
export default {
  name: 'App',
  data(){
    return {
      counter:1000
    }
  },
  components:{
    hellowordvue
  },
  methods:{
    addition(){
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    addcount(count){
      // 普通的提交风格
      // this.$store.commit('imcrementcount',count)
      // 特殊的提交风格
      // 在这种提交风格下面，count是一个payload。传递的是整个commit过去的对象
      this.$store.commit({
        type:'imcrementcount',
        count:count
      })
    },
    // 特殊的提交风格
    addstudent(){
      const stu ={id:114,name:'777',age:140}
      this.$store.commit('addstudent',stu)
    },
    updateinfo(){
      // this.$store.dispatch('aupdateinfo',{
      //   message:"我是payload",
      //   success:() => console.log('我已经完成了')
      // })
      this.$store.dispatch('aupdateinfo',{message:"我是payload",success:() => console.log('我已经完成了')})
        .then(res => {
          console.log('完成提交了');
          console.log(res);
        })
    },
    updateName(){
      this.$store.commit('updateName','list')
    },
    aactionname(){
      this.$store.dispatch('aUpdataname')
    }
  },
  computted:{
    more20stu(){
      // return this.$store.state.students.filter(s => {
      //   return s.age >=20
      // })
      return this.$store.state.students.filter(s => s.age >=20)
    }
  }
}
</script>

<style>

</style>
