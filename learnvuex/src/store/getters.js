export default {
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
    
}