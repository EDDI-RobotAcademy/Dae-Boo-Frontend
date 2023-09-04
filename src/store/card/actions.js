import { CARD_LIST } from "./mutation-types";
import axiosInst from "@/utility/axiosInst";

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
};
