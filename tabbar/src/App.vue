<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
    
<style>
  @import "./assets/css/base.css";
  

  #tab-bar {
    display: flex;
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
</style>
