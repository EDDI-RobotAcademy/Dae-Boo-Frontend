import axiosInst from '@/utility/axiosInst'
import { REQUEST_CARD_LIST_TO_SPRING, REQUEST_ACCOUNT_LIST_TO_SPRING, REQUEST_USER_INFO_TO_SPRING, REQUEST_CARD_INFO_TO_SPRING, REQUEST_Purchase_LIST_TO_SPRING } from './mutation-types'

export default {
  async requestCardListToSpring({ commit }) {

    await axiosInst.post('/card/manage/list')
      .then((res) => {
        // console.log(res.data)
        commit(REQUEST_CARD_LIST_TO_SPRING, res.data);
      })
      .catch(() => {
        console.error
      })
  },
  async requestCardRegisterToSpring(context, payload) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return await axiosInst.post("card/manage/register", payload, config)
      .then((resRegister) => {
        return resRegister.data
      });
  },
  async requestAccountListToSpring({ commit }) {

    await axiosInst.post('/user/manage/list')
      .then((res) => {
        commit(REQUEST_ACCOUNT_LIST_TO_SPRING, res.data);
      })
      .catch(() => {
        console.error
      })
  },
  async getAccountInfoToSpring({ commit }, payload) {
    
    console.log("userId: " + payload)
    const res = await axiosInst.get('/user/manage/userInfo', { params: { userId: payload } });
    console.log("UserInfo res: " + res.data.name);
    commit(REQUEST_USER_INFO_TO_SPRING, res.data);
  },
  async getCardInfoToSpring({ commit }, payload) {
    
    const res = await axiosInst.get('/card/manage/CardInfo', { params: { cardId: payload } });
    console.log("UserInfo res: " + res.data);
    commit(REQUEST_CARD_INFO_TO_SPRING, res.data);
  },
  async requestAccountStatusSetToSpring({ commit }, payload) {
    return await axiosInst.get('/user/manage/userStop', { params: { userId: payload } })
      .then((res)=>{
        commit(REQUEST_USER_INFO_TO_SPRING, res.data);
      })
  },
  async requestCardStatusSetToSpring({ commit }, payload) {
    return await axiosInst.get('/card/manage/userStop', { params: { userId: payload } })
      .then((res)=>{
        commit(REQUEST_CARD_INFO_TO_SPRING, res.data);
      })
  },
  async requestPurchaseListToSpring({ commit }) {

    await axiosInst.post('/purchase/list')
      .then((res) => {
        // console.log(res.data)
        commit(REQUEST_Purchase_LIST_TO_SPRING, res.data);
      })
      .catch(() => {
        console.error
      })
  },
  // 관리자 메인 페이지 -  회원 수 가져오기
  async requestMemberNumberToSpring() {
    return await axiosInst.get('/user/manager/main-page/memberNum')
    .then((res) => {
      return res.data;
    })
  },
  // 관리자 메인 페이지 -  미 응답 개수 가져오기
  async requestNoResponseNumberToSpring() {
    return await axiosInst.get('/question/manager/main-page/no-response')
    .then((res) => {
      return res.data;
    })
  },
  // 관리자 메인 페이지 -  총 판매량 개수 가져오기
  async requestTotalSalesToSPring() {
    return await axiosInst.get('/purchase/manager/main-page/total-salesNum')
    .then((res) => {
      return res.data;
    })
  },
  // 관리자 메인 페이지 -  환불 신청 개수 가져오기
  async requestApplyRefundToSpring() {
    return await axiosInst.get('/purchase/manager/main-page/apply-refundNum')
    .then((res) => {
      return res.data;
    })
  },
}