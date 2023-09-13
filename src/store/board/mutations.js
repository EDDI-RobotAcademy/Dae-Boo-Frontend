import {
    MANAGEMENT_BOARD,
    MANAGEMENT_BOARD_LIST,
    MYPAGE_BOARD,
    BOARD_LIST_TO_SPRING,
    BOARD_TO_SPRING
} from './mutation-types'
  
export default {
    [MANAGEMENT_BOARD_LIST] (state, receivedData) {
      state.boards = receivedData
      console.log("state.boards: ", state.boards)
    },
    [MANAGEMENT_BOARD] (state, receivedData) {
      state.board = receivedData
      console.log("state.board: ", state.board)
    },
    [MYPAGE_BOARD] (state, receivedData) {
      state.thisBoard = receivedData
      console.log("state.thisBoard: ", state.thisBoard)
    },
    [BOARD_LIST_TO_SPRING] (state, receivedData) {
      state.boards = receivedData
      console.log("state.boards: ", state.boards)
    },
    [BOARD_TO_SPRING] (state, receivedData) {
      state.board = receivedData
      console.log("state.board: ", state.board)
    },

}
  