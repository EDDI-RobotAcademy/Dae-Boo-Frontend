<template>
    <div>
        <div>
            <!-- <v-img :src="getImageUrl(book.filePathList)" class="imageCss" style="width: 300px"/> -->
            <v-img src="@/assets/cardImg.jpg" style="max-width: 65%; height: auto;"/>
        </div>
        <form @submit.prevent="onSubmit">
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
                        <textarea cols="60" rows="20" v-model="description"/>
                    </td>
                </tr>
            </V-table>
        </form>
        <button type="button" @click="submitForm">수정 완료</button>
        <router-link
            :to="{
                name: 'ShopModifyProductPage',
                params: { productId: product.productId.toString() },
            }">
            수정 취소
        </router-link>
    </div>
</template>

<script>
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
            image: 'cardImg.jpg' // 임시로
        }
    },
    created() {
        this.price = this.product.price;
        this.productName = this.product.productName;
        this.description = this.product.description;
        this.image = this.product.image;
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
    }
}
</script>

<style></style>