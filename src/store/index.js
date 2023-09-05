import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import LogInModule from '@/store/logIn/LogInModule'
import BoardModule from '@/store/board/BoardModule'
import MyPageModule from '@/store/myPage/MyPageModule'
import ManagementModule from './management/ManagementModule'
import CardModule from "@/store/card/CardModule";
import NoticeModule from './notice/NoticeModule'


export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LogInModule:LogInModule,
    BoardModule:BoardModule,
    MyPageModule: MyPageModule,
    ManagementModule:ManagementModule,
    CardModule: CardModule,
    NoticeModule: NoticeModule
  },
  plugins: [
    createPersistedState(),
  ],
})
