import {
    COMMENT_LIST,

} from './mutation-types'
  
export default {
    [COMMENT_LIST] (state, receivedData) {
      state.comments = receivedData
      console.log("state.comments: ", state.comments)
    },
}
  