<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar/>
  </div>
</template>

<script>
import maintabbar from './components/maintabbar'
export default {
  name: 'App',
  components:{
    maintabbar
  }
}
</script>
    
<style>
  @import './assets/css/base';
</style>
