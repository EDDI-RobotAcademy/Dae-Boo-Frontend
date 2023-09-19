import {
  SHOP_PRODUCT_LIST,
  SHOP_PRODUCT
} from './mutation-types'
  
export default {
    [SHOP_PRODUCT_LIST] (state, receivedData) {
      state.products = receivedData
    },
    [SHOP_PRODUCT] (state, receivedData) {
      state.product = receivedData
    },
}
  