import state from '@/store/logIn/states'
import actions from '@/store/logIn/actions'
import mutations from '@/store/logIn/mutations'

const LogInModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default LogInModule