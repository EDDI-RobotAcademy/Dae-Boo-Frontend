import state from '@/store/management/states'
import actions from '@/store/management/actions'
import mutations from '@/store/management/mutations'

const ManagementModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default ManagementModule