import mutations from "@/store/question/mutations"
import actions from "@/store/question/actions"
import state from "@/store/question/state"

const QuestionModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default QuestionModule