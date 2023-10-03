import { AGE_CARD_LIST, KEYWORD_CARD_LIST, CARD_LIST, CARD_INFO } from "./mutation-types";

export default {
  [CARD_LIST](state, receivedData) {
    state.cards = receivedData;
  },
  [CARD_INFO](state, receivedData) {
    state.card = receivedData;
  },
  [AGE_CARD_LIST](state, receivedData) {
    state.agecards = receivedData;
  },
  [KEYWORD_CARD_LIST](state, receivedData) {
    state.keywordcards = receivedData;
  },

};
