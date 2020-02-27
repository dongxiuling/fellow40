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
    },
    reduce(state){
      state.count--;
    }
  },
  getters:{
    xx:function(state){
      return state.count*2 + state.num;
    }
  },
  actions: {
    addAction({commit}){
      // 异步操作。。。。
      // 调用mutations
      setTimeout(function(){
        commit('add',10);
      },1000)
    }
  },
  modules: {
  }
})
