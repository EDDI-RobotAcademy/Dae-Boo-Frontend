<template>
    <div style="background-color:white">
        <ShopReadProductForm :product="product"/>
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