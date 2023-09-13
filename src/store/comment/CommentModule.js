import state from '@/store/board/states'
import actions from '@/store/board/actions'
import mutations from '@/store/board/mutations'

const CommentModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default CommentModule