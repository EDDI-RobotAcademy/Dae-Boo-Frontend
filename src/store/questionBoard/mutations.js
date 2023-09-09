import {
    MANAGEMENT_QUESTION_BOARD_LIST,
    MANAGEMENT_QUESTION_BOARD
} from './mutation-types'
  
export default {
    [MANAGEMENT_QUESTION_BOARD_LIST] (state, receivedData) {
      state.questBoards = receivedData
      console.log("state.questBoards: ", state.questBoards)
    },
    [MANAGEMENT_QUESTION_BOARD] (state, receivedData) {
      state.questBoard = receivedData
      console.log("state.questBoard: ", state.questBoard)
    }
}
  