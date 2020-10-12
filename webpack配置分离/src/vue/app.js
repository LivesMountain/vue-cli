export default {
    template:`
    <div>
        <h2>我是一个脚手架{{message}}</h2>
        <button @click='click'>按钮</button>
    </div>
    `,
    data(){
        return {
            message:'666'
        }
    },
    methods:{
        click(){
            console.log(this.message);
        }
    }
}