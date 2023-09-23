<template>
    <div style="background-color: white">
        <v-btn color="primary" @click="prouctRegisterBtn">상품 등록</v-btn>
        <p class="shopMainPageTopText">BEST/ALL</p>
        <ShopMainForm :products="products"/>
    </div>
</template>

<script>
import '@/assets/css/shop/shopMain.css'

import ShopMainForm from '@/components/shop/ShopMainForm.vue'
import { mapActions, mapState } from "vuex";

const ShopModule = 'ShopModule'

export default {
    components: {
        ShopMainForm
    },
    name: "ShopMainPage",
    computed: {
        ...mapState(ShopModule, ["products"]),
    },
    mounted() {
        this.requestProductListToSpring();
    },
    methods: {
        ...mapActions(ShopModule, ["requestProductListToSpring"]),
        prouctRegisterBtn() {
            this.$router.push({ path: 'shopRegisterProductPage' });
        }
    }
}
</script>

<style lang="scss" scoped></style>