import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types.js'
Vue.use(Vuex)

const moduleA = {
    state:{
        name:'张三'
    },
    mutations:{
        updateName(state,payload){
            state.name=payload
        }
    },
    actions:{
        // 这里的context不代表store对象，只有在root下面定义的actions里面的context才代表store对象，这里的context只代表上面的mutations
        aUpdataname(context){
            setTimeout(() => {
                context.commit('updateName','wangwu')
            },1000)
        }
    },
    getters:{
        fullname(state){
            return state.name+'1111'
        },
        fullname1(state,getters){
            return getters.fullname+'2222'
        },
        fullname2(state,getters,rootState){
            return getters.fullname1 + rootState.counter
        }
    }
}







const store = new Vuex.Store({
    state:{
        counter: 1000,
        students: [
            {id: 110, name: 'zzz', age: '18'},
            {id: 111, name: 'ttt', age: '20'},
            {id: 112, name: 'yyy', age: '22'},
            {id: 113, name: 'zty', age: '25'}
          ],
        info:{
            name:'kobe',
            age:30,
            height:198
        }
    },
    mutations:{
        // imcrement是事件类型，剩下的部分就是回调函数
        [INCREMENT](state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        imcrementcount(state,count){
            // state.counter+=count
            console.log(count);
            state.counter +=count.count
        },
        addstudent(state,stu){
            state.students.push(stu)
        },
        updateinfo(state){
            state.info.name='coderwhy'
            // 非响应式
            // state.info['address']='洛杉矶'
            // delete state.info.age
            // 响应式的
            // Vue.set(state.info,'address', '洛杉矶')
            // Vue.delete(state.info,'age')
            // 下面代码是错误代码
            // setTimeout(()=>{
            //     state.info.name='codewhy'
            // },1000)
        }
    },
    actions:{
        // context上下文，
        aupdateinfo(context,payload){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('updateinfo')
                    console.log(payload.message);
                    payload.success()
                    resolve('1111')
                },1000)
            })
            // setTimeout(()=>{
            //     context.commit('updateinfo')
            //     console.log(payload.message);
            //     payload.success()
            // },1000)
        }
    },

    getters:{
        powercounter(state){
            return state.counter * state.counter
        },
        more20stu(state){
            return state.students.filter(s => s.age >10)
        },
        // more20length(state){
        //     return state.students.filter(s => s.age >20).length
        // }
        // getters的第一个参数一定是state，第二个参数一定是getters。
        more20Length(state,getters){
            return getters.more20stu.length
        },
        // 带参getters，传递参数一定要返回一个函数
        moreagestu(state){
            return function (age){
                return  state.students.filter(s => s.age > age)
            }
        },
        // 上面对象的增强写法，改为箭头函数写法
        moreagestu1: state =>{
            return function (age){
                return  state.students.filter(s => s.age > age)
            }
        },
        
    },
    modules:{
        a:moduleA
    }
})
export default store