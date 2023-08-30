import { REQUEST_CARD_LIST_TO_SPRING } from "./mutation-types"

export default{
    [REQUEST_CARD_LIST_TO_SPRING](state,receiveData){
        state.cards = receiveData;
    }
}