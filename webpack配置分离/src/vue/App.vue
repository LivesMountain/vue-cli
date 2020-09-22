<template>
    <div>
        <h2>我是一个脚手架{{message}}</h2>
        <button @click='click'>按钮</button>
    </div>
</template>

<script>
    export default {
        name:"App",
        data(){
            return {
                message:'6666'
            }
        },
        methods:{
        click(){
            console.log(this.message);
        }
        }
    }

</script>



<style scoped>
    .h2 {
        color:green;
    }
</style>