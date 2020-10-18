<template>
  <div id="app">
    <h2>{{counter}}</h2>
    <button @click="counter++">+++</button>
    <button @click="counter--">---</button>
    <hellowordvue :ccounter='counter'></hellowordvue>
    <router-view/>
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
  }
}
</script>

<style>

</style>
