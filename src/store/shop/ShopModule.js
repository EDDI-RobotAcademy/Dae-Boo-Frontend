import state from '@/store/shop/states'
import actions from '@/store/shop/actions'
import mutations from '@/store/shop/mutations'

const ShopModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default ShopModule