import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_MY_PURCHASE_LIST_TO_SPRING,
   
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
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };

        const { productName, price, description, image } = payload;
        return axiosInst.post("/product", {
            productName, price, description, image, config
        }).then((res) => {
            alert("게시물 등록 성공");
            return res.data.productId;
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
    },
    // 액세서리 가게 - 상품 삭제
    requestDeleteProductToSpring(_, productId) {
        return axiosInst.delete(`/product/delete/${productId}`)
        .then((res) => {
            alert("삭제 성공");
            return res.data;
        })
        .catch(() => {
            alert("문제 발생!");
        });
    },
    async requestPurchaseRegisterToSpring(context, payload) {
        try {
            const response = await axiosInst.post("/purchase/register", payload, {
                headers: {
                    'Content-Type': 'application/json' // JSON 데이터를 전송하도록 설정
                }
            });
            
            // 응답 데이터가 객체 형식으로 제공되므로 객체로 반환합니다.
            return response.data;
        } catch (error) {
            // 에러 발생 시 에러 핸들링
            console.error(error);
            throw error; // 에러를 다시 던져서 호출한 곳에서 처리할 수 있도록 합니다.
        }
    },
    async requestMyPurchaseListToSpring({ commit }, userId) {
        return axiosInst.get(`/purchase/${userId}`)
        .then((res) => {
            commit(REQUEST_MY_PURCHASE_LIST_TO_SPRING, res.data);
            return res.data;
        })
        .catch(() => {
            console.error;
        });
    },
    
    
    
}
