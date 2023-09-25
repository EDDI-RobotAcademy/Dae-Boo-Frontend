<template>
    <div>
        <div class="product-info-container">
            <div style="display: flex; justify-content: center; align-items: center;">
                <img class="product-image" :src="dynamicLink(product.image)" v-if="product.image" />
            </div>
        
            <form @submit.prevent="onSubmit" class="product-table">
                <V-table>
                    <tr>
                        <td>상품 번호</td>
                        <td>
                            <input type="text" :value="product.productId" disabled/>
                        </td>
                    </tr>
                    <tr>
                        <td>상품 이름</td>
                        <td>
                            <input type="text" v-model="productName"/>
                        </td>
                    </tr>
                    <tr>
                        <td>가격</td>
                        <td>
                            <input type="number" v-model="price"/>
                        </td>
                    </tr>
                    <tr>
                        <td>상품 설명</td>
                        <td>
                            <textarea cols="35" rows="15" v-model="description"/>
                        </td>
                    </tr>
                </V-table>
            </form>
        </div>
        <div class="button-container">
            <button class="shopModifyProductFinish" style="color: white;" type="button" @click="submitForm">수정 완료</button>
            <button class="shopModifyProductCancle">
            <router-link
                :to="{
                    name: 'ShopReadProductPage',
                    params: { productId: product.productId.toString() },
                }"
                style="text-decoration: none; color:black">
                수정 취소
            </router-link>
            </button>
        </div>
    </div>
</template>

<script>
import '@/assets/css/shop/shopModifyProduct.css'
import '@/assets/css/shop/shopReadProduct.css'

import AOS from "aos";
const LINK = process.env.VUE_APP_S3_LINK;

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            price: '',
            productName: '',
            description: '',
            link: LINK,
        }
    },
    created() {
        this.price = this.product.price;
        this.productName = this.product.name;
        this.description = this.product.description;
        this.image = this.product.image;
    },
    mounted() {
        AOS.init({
            duration: 1600,
        });
    },
    methods: {
        onSubmit() {
            const { productName, price, description, image } = this;
            this.$emit("submit", {productName, price, description, image});
        },
        submitForm() {
            // 폼 제출 버튼 클릭 시 onSubmit 메서드 호출
            this.onSubmit();
        },
        dynamicLink(extraPath) {
            return `${this.link}/${extraPath}`;
        },
    }
}
</script>

<style></style>