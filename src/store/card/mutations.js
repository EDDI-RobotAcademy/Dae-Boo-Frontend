import { CARD_LIST, CARD_INFO } from "./mutation-types";

export default {
  [CARD_LIST](state, receivedData) {
    state.cards = receivedData;
  },
  [CARD_INFO](state, receivedData) {
    state.card = receivedData;
  },
};
