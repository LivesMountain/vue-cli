<template>
  <div>
      <h2>我现在是用户信息</h2>
      <h2>{{userid}}</h2>
  </div>
</template>

<script>
export default {
    name:'userid',
    computed:{
        userid(){
            return this.$route.params.abc
        }
    }

}
</script>

<style>

</style>