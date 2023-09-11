import state from '@/store/questionBoard/states'
import actions from '@/store/questionBoard/actions'
import mutations from '@/store/questionBoard/mutations'

const QuestionBoardModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default QuestionBoardModule