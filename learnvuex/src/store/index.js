import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        counter: 1000
    },
    mutations:{
        imcrement(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }
    },
    actions:{

    },

    getters:{
        powercounter(state){
            return state.counter * state.counter
        }
    },
    modules:{

    }
})
export default store