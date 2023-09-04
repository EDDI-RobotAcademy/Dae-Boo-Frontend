import state from "@/store/card/states";
import actions from "@/store/card/actions";
import mutations from "@/store/card/mutations";
import getters from "@/store/card/getters";

const CardModule = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
export default CardModule;
