<template>
  <div id="app">
    <h2>{{counter}}</h2>
    <button @click="counter++">+++</button>
    <button @click="counter--">---</button>
    <h2>store</h2>
    <button @click="addition">+++</button>
    <button @click="sub">---</button>


    <h2>{{$store.getters.powercounter}}</h2>
    <hellowordvue :ccounter='counter'></hellowordvue>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import hellowordvue from './components/HelloWorld.vue'
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
      this.$store.commit('imcrement')
    },
    sub(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
