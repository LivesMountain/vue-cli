export default {
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
