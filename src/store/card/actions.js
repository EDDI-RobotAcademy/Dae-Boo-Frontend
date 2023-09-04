import { CARD_LIST } from "./mutation-types";
import axiosInst from "@/utility/axiosInst";

export default {
  requestCardList({ commit }) {
    return axiosInst
      .get("/card/list")
      .then((res) => {
        commit(CARD_LIST, res.data);
        return res;
      })
      .catch((error) => {
        console(error);
      });
  },
};
