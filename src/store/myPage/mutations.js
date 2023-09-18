import {
    REQUEST_MY_BOARD_LIST_TO_SPRING,
    REQUEST_MY_BOARD_TO_SPRING,
    REQUEST_MY_INFO_TO_SPRING
} from '../myPage/mutation-types'

export default {
    [REQUEST_MY_BOARD_LIST_TO_SPRING] (state, receivedData) {
        state.myBoards = receivedData
    },
    [REQUEST_MY_BOARD_TO_SPRING] (state, receivedData) {
        state.myBoard = receivedData
    },
    [REQUEST_MY_INFO_TO_SPRING] (state, receivedData) {
        state.myInfo = receivedData
    },
}