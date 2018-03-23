import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  msg: 'Hello!'
}

const mutations = {
  changeMessage (state, msg) {
    state.msg = msg
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations
})
