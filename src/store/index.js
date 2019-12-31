import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: State,
    mutations: {
        setState(state, obj) {
            Object.assign(state, obj)
            localStorage.store = JSON.stringify(state)
        }
    },
    actions: {

    }
})

export default store;