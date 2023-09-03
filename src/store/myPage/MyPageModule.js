import state from '@/store/myPage/states'
import actions from '@/store/myPage/actions'
import mutations from '@/store/myPage/mutations'

const MyPageModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default MyPageModule