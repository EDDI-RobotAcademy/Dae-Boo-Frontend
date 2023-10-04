import {
  CARD_LIST,
  CARD_INFO,
  AGE_CARD_LIST,
  KEYWORD_CARD_LIST,
} from "./mutation-types";
import axiosInst from "@/utility/axiosInst";
import axiosInstFastApi from "@/utility/axiosInstFastapi";

export default {
  async requestCardList({ commit }) {
    return await axiosInst
      .get("/card/list")
      .then((res) => {
        commit(CARD_LIST, res.data);
      })
      .catch(() => {
        console.error;
      });
  },
  async responseAgeCardList() {
    return await axiosInstFastApi
      .get("/ai-response")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch(() => {
        console.error;
      });
  },
  async requestAgeCardListToSpring({ commit }, cardList) {
    console.log("actions에서 확인하는 cardList: ", cardList);

    return await axiosInst
    .post("/card/age/result", JSON.stringify(cardList), {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        commit(AGE_CARD_LIST, res.data);
      })
      .catch(() => {
        console.error;
      });
  },

  async responseKeywordCardList({ commit }) {
    return await axiosInstFastApi
      .get("/ai-response")
      .then((res) => {
        commit(KEYWORD_CARD_LIST, res.data);
      })
      .catch(() => {
        console.error;
      });
  },
  bestCardListToSpring({ commit }) {
    return axiosInst.get("/card/interest/list").then((res) => {
      commit(CARD_LIST, res.data);
      console.log(res.data);
      return res.data;
    });
  },
  requestLikeCardList({ commit }, userId) {
    console.log(userId);
    return axiosInst
      .get("/card/wishCardList", { params: { userId: userId } })
      .then((res) => {
        commit(CARD_LIST, res.data);
        console.log(res.data);
        return res.data;
      });
  },
  async getCardBenefit(_, payload) {
    console.log("cardId: " + payload);
    return await axiosInst
      .get("/card/cardBenefit", { params: { cardId: payload } })
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  },
  requestKeywordList({ commit }, categorizationSymbol) {
    return axiosInst
      .get(`/card/keyword/${categorizationSymbol}`)
      .then((res) => {
        commit(CARD_LIST, res.data);
      })
      .catch(() => {
        console.error;
      });
  },
  requestCardDetail({ commit }, cardId) {
    return axiosInst
      .get(`/card/${cardId}`)
      .then((res) => {
        commit(CARD_INFO, res.data);
        return res;
      })
      .catch(() => {
        console.error;
      });
  },

  async requestAllActivateCards({ commit }) {
    return await axiosInst
      .get("/card/list")
      .then((res) => {
        commit(CARD_LIST, res.data);
      })
      .catch(() => {
        console.error;
      });
  },
  responseWishCard(_, payload) {
    return axiosInst
      .post("/card/wishCard", null, {
        params: payload,
      })
      .then((res) => {
        return res.data;
      });
  },
};
