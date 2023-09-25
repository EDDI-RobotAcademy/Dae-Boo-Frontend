<template>
    <div style="background-color: white">
        <br/>
        <p class="shopMainPageTopText">BEST/ALL</p>
        <ShopMainForm :products="products"/>
        <v-btn color="primary" v-if="memberInfo && memberInfo.role === 'MANAGER'" @click="prouctRegisterBtn">상품 등록</v-btn>
    </div>
</template>

<script>
import '@/assets/css/shop/shopMain.css'

import ShopMainForm from '@/components/shop/ShopMainForm.vue'
import { mapActions, mapState } from "vuex";

const ShopModule = 'ShopModule'
const LogInModule = 'LogInModule'

export default {
    components: {
        ShopMainForm
    },
    name: "ShopMainPage",
    computed: {
        ...mapState(ShopModule, ["products"]),
        ...mapState(LogInModule, ['memberInfo'])
    },
    mounted() {
        this.requestProductListToSpring();
    },
    methods: {
        ...mapActions(ShopModule, ["requestProductListToSpring"]),
        prouctRegisterBtn() {
            this.$router.push({ path: 'shopRegisterProductPage' });
        }
    },
}
</script>

<style lang="scss" scoped></style>