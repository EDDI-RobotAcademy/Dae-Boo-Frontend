<template>
    <div style="background-color: white;">
        <ShopModifyProductForm v-if="product" :product="product" @submit="onSubmit"/>
    </div>
</template>

<script>
import ShopModifyProductForm from '@/components/shop/ShopModifyProductForm.vue'
import { mapActions, mapState } from 'vuex';

const ShopModule = 'ShopModule'

export default {
    name: "ShopModifyProductPage",
    components: {
        ShopModifyProductForm
    },
    props: {
        productId: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(ShopModule, ['product'])
    },
    methods: {
        ...mapActions(ShopModule, ['requestProductToSpring', 'requestProductModifyToSpring']),
        async onSubmit(payload) {
            const { productName, price, description, image } = payload;
            const productId = this.productId;

            await this.requestProductModifyToSpring({
                productName, price, description, productId, image
            });

            await this.$router.push({
                name: "ShopReadProductPage",
                params: { productId: this.productId },
            })
        }
    },
    created() {
        this.requestProductToSpring(this.productId);
    }
}
</script>

<style></style>