import { createStore } from 'vuex'
import LogInModule from '@/store/logIn/LogInModule'
import BoardModule from '@/store/board/BoardModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LogInModule:LogInModule,
    BoardModule:BoardModule
  }
})
