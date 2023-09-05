import mutations from "@/store/notice/mutations"
import actions from "@/store/notice/actions"
import state from "@/store/notice/state"

const NoticeModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default NoticeModule