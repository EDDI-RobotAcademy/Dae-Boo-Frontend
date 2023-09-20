<template>
    <div style="background-color:white">
        <ShopReadProductForm :product="product"/>
        <router-link :to="{ name: 'ShopModifyProductPage', params: { productId: productId } }">
            상품 수정
            <!-- v-if="isManager()" : 관리자 인지 아닌지 확인하던 것 -->
        </router-link>
    </div>
</template>

<script>
import ShopReadProductForm from '@/components/shop/ShopReadProductForm.vue'
import { mapActions, mapState } from "vuex";
const ShopModule = 'ShopModule'

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
    },
    methods: {
        ...mapActions(ShopModule, ["requestProductToSpring"]),
    },
    created() {
        this.requestProductToSpring(this.productId);
    }
}
</script>

<style></style>