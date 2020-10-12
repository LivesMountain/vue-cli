console.log('aaaaa');
const {add} = require('./js/aaa.js')

console.log(add(30,40));



import {a} from './js/bbb.js'

console.log(a);


// 依赖css
require('./css/normal.css')
require('./css/special.less')

document.writeln('<h2>牛逼 </h2>')

import vue from 'vue'

const app=new vue({
    el:'#app',
    template:`
    <div>
        <h2>我是一个脚手架{{message}}</h2>
        <button @click='click'>按钮</button>
    </div>
    `,
    data:{
        message:'6666'
    },
    methods:{
        click(){
            console.log(message);
        }
    }
    // components:{
    //     app
    // }
})