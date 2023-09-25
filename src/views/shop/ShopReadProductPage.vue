<template>
    <div style="background-color:white">
        <ShopReadProductForm :product="product"/>
        <button class="productModifyBtn" v-if="memberInfo && memberInfo.role === 'MANAGER'">
            <router-link :to="{ name: 'ShopModifyProductPage', params: { productId: productId } }" style="text-decoration: none; color:black">
                상품 수정
            </router-link>
        </button>
        <button class="productDeletebtn" v-if="memberInfo && memberInfo.role === 'MANAGER'" @click="onDelete">상품 삭제</button>
    </div>
</template>

<script>
import '@/assets/css/shop/shopReadProduct.css'

import ShopReadProductForm from '@/components/shop/ShopReadProductForm.vue'
import { mapActions, mapState } from "vuex";

const ShopModule = 'ShopModule'
const LogInModule = 'LogInModule'

export default {
    name: "ShopReadProductPage",
    props: {
        productId: {
            type: String,
            required: true
        }
    },
    components: {
        ShopReadProductForm
    },
    computed: {
        ...mapState(ShopModule, ["product"]),
        ...mapState(LogInModule, ['memberInfo'])
    },
    methods: {
        ...mapActions(ShopModule, ["requestProductToSpring", "requestDeleteProductToSpring"]),
        async onDelete() {
            await this.requestDeleteProductToSpring(this.productId);
            await this.$router.push({
                name: "ShopMainPage"
            });
        }
    },
    created() {
        this.requestProductToSpring(this.productId);
    }
}
</script>

<style></style>