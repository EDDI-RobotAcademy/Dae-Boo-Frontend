import {
    REQUEST_USERID_TO_SPRING,
    REQUEST_USER_TOKEN_TO_SPRING,
    REQUEST_USER_INFO_TO_SPRING
} from '../logIn/mutation-types'

export default {
    [REQUEST_USERID_TO_SPRING] (state, receivedData) {
        state.userId = receivedData
    },
    [REQUEST_USER_TOKEN_TO_SPRING] (state, receivedData) {
        state.token = receivedData
    },
    [REQUEST_USER_INFO_TO_SPRING](state,receivedData) {
        state.memberInfo = receivedData;
    },
}