import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    }
  },
  actions: {
    async loadUsers ({commit}) {
      const response = await fetch('https://randomuser.me/api/?results=20')
      const data = await response.json()
      commit('SET_USERS', data.results)
      }
    }
})
