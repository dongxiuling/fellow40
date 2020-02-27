import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 用来存储状态
  state: {
    count:1,
    num:20
  },
  // 修改状态
  mutations: {
    add(state,x){
      state.count+=x;
    }
  },
  actions: {
  },
  modules: {
  }
})
