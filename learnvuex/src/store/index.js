import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types.js'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import modulea from './modules/modulesa'
Vue.use(Vuex)





const state ={
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
}


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a:modulea
    }
})
export default store