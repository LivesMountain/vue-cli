<template>
  <div>
      <h2>{{ccounter}}</h2>

      <h2>store</h2>
      <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
export default {
    name:'hello',
    props:{
        ccounter:{
            type:Number
        }
    }
}
</script>

<style>

</style>