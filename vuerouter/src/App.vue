<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>属性</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="/user/+userid" replace>user</router-link>
    <router-link :to="{path:'/profile',query:{name:'li',age:'18',heigin:1.88}}">档案</router-link>
    <keep-alive exclude='profile'>
      <router-view/>
    </keep-alive>
    <!-- <router-view></router-view> -->
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
      userid:"liming",
      path:""
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
  },
  // 下面这两个方法只有开启了keepalive插件才能被执行，一个是出于活跃的页面，并且keepalive保持组建不会被销毁
  activated(){
    this.$router.push(this.path)
    console.log('active');
  },
  deactivated(){
    console.log('deactived');
  },
  beforeRouteLeave(to,from,next){
    console.log(this.$router.path);
    this.path=this.$router.path
    next()
  }
  // componetes:{

  // }
}
</script>

<style>

</style>
