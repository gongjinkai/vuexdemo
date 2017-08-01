import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 10
}
const mutations = {
   inc(state){
     state.count = state.count+5
   },
  dec(state){
    if(state.count<=5){
      return
    }
    state.count = state.count-5
  }
}
const actions = {
  inc:({commit})=>commit('inc'),
  dec:({commit})=>commit('dec')
}

const getters= {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
