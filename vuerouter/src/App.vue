<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>属性</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="/user/+userid" replace>user</router-link>
    <router-link :to="{path:'/profile',query:{name:'li',age:'18',heigin:1.88}}">档案</router-link>
    <router-view></router-view>
    <!-- <button @click='click1'>home</button>
    <button @click='click2'>about</button> -->
    <button @click="userclick">用户</button>
    <button @click="profileclick">环境</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userid:"liming"
    }
  },
  methods:{
    click1(){
      this.$router.push('/home')
    },
    click2(){
      this.$router.push('/about')
    },
    userclick(){
      this.$router.push('/user/'+this.userid)
    },
    profileclick(){
      this.$router.push({
        path: 'profile',
        query:{
          name:'li',
          age:'18',
          heigin:1.88
        }
      })
    }
  }
  // componetes:{

  // }
}
</script>

<style>

</style>
