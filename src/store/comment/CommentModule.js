import state from '@/store/comment/states'
import actions from '@/store/comment/actions'
import mutations from '@/store/comment/mutations'

const CommentModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default CommentModule