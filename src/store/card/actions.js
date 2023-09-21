import { CARD_LIST } from "./mutation-types";
import axiosInst from "@/utility/axiosInst";

export default {
  async requestCardList({ commit }) {
    return await axiosInst
      .get("/card/age/list")
      .then((res) => {
        commit(CARD_LIST, res.data);
      })
      .catch(() => {
        console.error;
      });
  },
  bestCardListToSpring({commit}) {
    return axiosInst.get("/card/interest/list")
    .then((res) => {
      commit(CARD_LIST, res.data)
      console.log(res.data)
      return res.data
    })
  },
  requestLikeCardList({commit}, userId) {
    console.log(userId)
    return axiosInst.get("/card/wishCardList", {params: {userId: userId}})
    .then((res) => {
      commit(CARD_LIST, res.data)
      console.log(res.data)
      return res.data
    })
  }
};

