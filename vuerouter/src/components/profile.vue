<template>
  <div>
      <h2>我是profile</h2>
      <h2>{{$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
    name:'profile',
    created(){
        console.log('created');
    },
    destroyed(){
        console.log('destroyed');
    }
}
</script>

<style>

</style>