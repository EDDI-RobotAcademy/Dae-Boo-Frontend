import {
    MANAGEMENT_BOARD,
    MANAGEMENT_BOARD_LIST,
    MYPAGE_BOARD
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
    // state.board 같이 써도 되나??
    [MYPAGE_BOARD] (state, receivedData) {
      state.thisBoard = receivedData
      console.log("state.thisBoard:", state.thisBoard)
    }
}
  