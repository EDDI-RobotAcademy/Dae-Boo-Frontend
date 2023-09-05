import {
    MANAGEMENT_BOARD,
    MANAGEMENT_BOARD_LIST
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
}
  