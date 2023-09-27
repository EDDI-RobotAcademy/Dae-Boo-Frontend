<template>
    <div>
        <div class="product-info-container">
            <div style="display: flex; justify-content: center; align-items: center;">
                <img class="product-image" :src="dynamicLink(product.image)" v-if="product.image" />
            </div>

            <div class="product-table">
                <V-table>
                    <tr>
                        <td class="shopReadProductName">
                            <div class="shopReadProcutNewBox">NEW</div>
                            <input type="text" :value="product.name" readonly/>
                        </td>
                    </tr>
                    <tr>
                        <td class="shopReadProductPrice">
                            <input type="text" :value="product.price" readonly/>
                        </td>
                    </tr>
                    <td>
                        <hr style="width:345px; height: 1px; background-color: #ccc; border: none; margin: 5px 0;">
                    </td>
                    <br />
                    <tr>
                        <td>
                            <span class="shopReadProductBigText">구매혜택 </span>
                            <span class="shopReadProductSmallText">포인트 적립예정</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="shopReadProductBigText">배송 방법 </span>
                            <span class="shopReadProductSmallText">택배</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="shopReadProductBigText">배송비 </span>
                            <span class="shopReadProductSmallText">3,000원 | 도서 산간 배송비 추가</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="shopReadProductBigText">배송 안내 </span>
                            <span class="shopReadProductSmallText">기본배송(결제 후 5일 내 배송) / 무료배송(3개이상 구매 시)</span>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <p class="shopReadProductBigDetail">상품 설명</p>
                            <textarea class="shopReadProductDetail" cols="50" rows="3" :value="product.description" readonly/>
                        </td>
                    </tr>
                </V-table>
                <div>
                    <button class="backBtn">
                        <router-link :to="{path: '/shopMainpage'}" style="text-decoration: none; color:white">
                            돌아가기
                        </router-link>
                    </button>
                    <button class="BagBtn" color="orange">
                        장바구니
                    </button>
                </div>
                <div>
                    <button class="kakaoPayBtn" @click="kakakoPayBill(product.productId)">카카오페이 구매하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/css/shop/shopReadProduct.css'

import AOS from "aos";
const LINK = process.env.VUE_APP_S3_LINK;

export default {
    name: "ShopReadProductForm",
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            link: LINK,
        }
    },
    mounted() {
        AOS.init({
            duration: 1600,
        });
    },
    methods: {
        dynamicLink(extraPath) {
            return `${this.link}/${extraPath}`;
        },
        kakakoPayBill(productId) {
            this.$router.push({ path: `/payment/bill/${productId}` })
        }
    },
}
</script>

<style></style>