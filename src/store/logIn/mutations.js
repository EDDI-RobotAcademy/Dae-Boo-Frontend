import {
    REQUEST_USERID_TO_SPRING
} from '../logIn/mutation-types'

export default {
    [REQUEST_USERID_TO_SPRING] (state, receivedData) {
        state.userId = receivedData
    }
}