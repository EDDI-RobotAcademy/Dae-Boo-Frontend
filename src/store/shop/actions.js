import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING
  } from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    // 액세서리 가게 - 전체 상품 불러오기
    async requestProductListToSpring({ commit }) {
        return await axiosInst.get("/products")
        .then((res) => {
            commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
            return res.data;
        })
        .catch(() => {
            console.error;
        });
    },
    // 액세서리 가게 - 단일 상품 불러오기
    requestProductToSpring({ commit }, productId) {
        return axiosInst.get(`/product/${productId}`)
        .then((res) => {
            commit(REQUEST_PRODUCT_TO_SPRING, res.data);
            return res.data;
        })
    },
    // 액세서리 가게 - 상품 등록
    requestRegisterProductToSpring(_, payload) {
        const { productName, productPrice, description, image } = payload;
        return axiosInst.post("/product", {
            productName, productPrice, description, image
        }).then((res) => {
            alert("게시물 등록 성공");
            return res.data;
        }).catch(() => {
            alert("문제 발생!")
        })
    },
    // 액세서리 가게 - 상품 수정
    requestProductModifyToSpring(_, payload) {
        const { productName, price, description, productId, image } = payload;
        return axiosInst.put(`/product/${productId}`, {
            productName, price, description, image
        }).then((res) => {
            alert("게시물 수정 성공");
            return res.data;
        }).catch(() => {
            alert("문제 발생!")
        })
    }
}