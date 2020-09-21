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
import cpn from './vue/App.vue'
const app=new vue({
    el:'#app',
    template:'<app/>',
    components:{
        app:cpn
    }
})