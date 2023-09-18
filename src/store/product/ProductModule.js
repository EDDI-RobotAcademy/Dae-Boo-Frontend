import mutations from "@/store/product/mutations"
import actions from "@/store/product/actions"
import state from "@/store/product/state"

const ProductModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default ProductModule