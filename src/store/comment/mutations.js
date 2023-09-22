import {
    COMMENT,
    COMMENT_LIST,
    QUESTION_COMMENT_LIST

} from './mutation-types'
  
export default {
  [COMMENT] (state, receivedData) {
    state.comment = receivedData
    console.log("state.comments: ", state.comments)
  },
    [COMMENT_LIST] (state, receivedData) {
      state.comments = receivedData
      console.log("state.comments: ", state.comments)
    },
    [QUESTION_COMMENT_LIST] (state,receivedData) {
      state.questionComment = receivedData
    }
}
  