import { REQUEST_CARD_LIST_TO_SPRING, REQUEST_ACCOUNT_LIST_TO_SPRING, REQUEST_USER_INFO_TO_SPRING, REQUEST_CARD_INFO_TO_SPRING, REQUEST_Purchase_LIST_TO_SPRING,REQUEST_REFUND_LIST_TO_SPRING} from "./mutation-types"

export default{
    [REQUEST_CARD_LIST_TO_SPRING](state,receiveData){
        state.cards = receiveData;
    },
    [REQUEST_ACCOUNT_LIST_TO_SPRING](state,receiveData){
        state.accounts = receiveData;
    },
    [REQUEST_USER_INFO_TO_SPRING](state, receiveData){
        state.account = receiveData;
    },
    [REQUEST_CARD_INFO_TO_SPRING](state, receiveData){
        state.card = receiveData;
    },
    [REQUEST_Purchase_LIST_TO_SPRING](state, receiveData){
        state.purchaseList= receiveData;
    },
    [REQUEST_REFUND_LIST_TO_SPRING](state, receiveData){
        state.refundList= receiveData;
    }

}