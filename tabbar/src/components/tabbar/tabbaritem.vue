<template>
  <div @click='clickbar' class="tab-bar-item">
    <div v-if="!isactive">
      <slot name='item-icon'></slot>
    </div>
    <div v-else>
      <slot name='item-icon-active'></slot>
    </div>
    <!-- :class='{active:isactive}' -->
    <div :style="activestyle">  
      <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"tabbaritem",
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      // isactive:true
    }
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path) !== -1
             
    },
    activestyle(){
      return this.isactive ? {color: this.activecolor} : {}
    }
  },
  methods:{
    clickbar(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 59px;
    font-size: 14px;
  }
  .tab-bar-item image {
    width: 24px;
    height: 24px;
    /* margin-top: 3px; */
    /* vertical-align: middle; */
    /* margin-bottom: 2px; */
  }
  /* .active {
    color :red
  } */
</style>