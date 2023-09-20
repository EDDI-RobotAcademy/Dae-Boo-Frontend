<template>
    <div style="background-color:white">
        <ShopReadProductForm :product="product"/>
        <router-link :to="{ name: 'ShopModifyProductPage', params: { productId: productId } }">
            상품 수정
            <!-- v-if="isManager()" : 관리자 인지 아닌지 확인하던 것 -->
        </router-link>
        <button @click="onDelete">상품 삭제</button>
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