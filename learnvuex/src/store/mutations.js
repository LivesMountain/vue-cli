import { INCREMENT } from './mutations-types.js'

export default {
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
}