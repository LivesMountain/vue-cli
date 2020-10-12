<template>
  <tabbar>
    <tabbaritem path='/home' activecolor='deepPink'>
      <template v-slot:item-icon>
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="~assets/img/tabbar/home.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="~assets/img/tabbar/home_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <!-- <div slot="item-text">首页</div> -->
        <div>首页</div>
      </template>
    </tabbaritem>
    <tabbaritem path='/category' activecolor='red'>
      <template v-slot:item-icon>
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="~assets/img/tabbar/categories.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="~assets/img/tabbar/categories_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <!-- <div slot="item-text">首页</div> -->
        <div>分类</div>
      </template>
    </tabbaritem>
    <tabbaritem path='/cart' activecolor='red'>
      <template v-slot:item-icon >
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="../assets/img/tabbar/shopcart.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="../assets/img/tabbar/shopcart_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <!-- <div slot="item-text">首页</div> -->
        <div>购物车</div>
      </template>
    </tabbaritem>
    <tabbaritem path='/profile'>
      <template v-slot:item-icon activecolor='red'>
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="../assets/img/tabbar/profile.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <!-- <img slot='item-icon' src="./assets/img/tabbar/home.png" alt=""> -->
        <img src="../assets/img/tabbar/profile_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <!-- <div slot="item-text">首页</div> -->
        <div>我的</div>
      </template>
    </tabbaritem> 
  </tabbar>
</template>

<script>
import tabbar from "./tabbar/tabbar"
import tabbaritem from "./tabbar/tabbaritem"
export default {
    name:'maintabbar',
    components:{
        tabbar,
        tabbaritem
    }
}
</script>

<style>

</style>