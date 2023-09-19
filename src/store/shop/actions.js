import {
    SHOP_PRODUCT_LIST,
    SHOP_PRODUCT
  } from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    // 액세서리 가게 - 전체 상품 불러오기
    requestProductListToSpring({ commit }) {
        return axiosInst.get("/products")
        .then((res) => {
            commit(SHOP_PRODUCT_LIST, res.data);
            return res.data;
        })
    },
    requestProductToSpring({ commit }, productId) {
        return axiosInst.get(`/product/${productId}`)
        .then((res) => {
            commit(SHOP_PRODUCT, res.data);
            return res.data;
        })
    },
}