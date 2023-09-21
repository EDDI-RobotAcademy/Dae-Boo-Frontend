<template>
    <div style="background-color: #ffffff;">
        <ShopRegisterProductForm @submit="onSubmit"/>
    </div>
</template>

<script>
import ShopRegisterProductForm from '@/components/shop/ShopRegisterProductForm.vue';
import { mapActions } from "vuex";

const ShopModule = 'ShopModule'

export default {
    name: 'ShopRegisterProductPage',
    components: {
        ShopRegisterProductForm
    },
    methods: {
        ...mapActions(ShopModule, ['requestRegisterProductToSpring']),
        async onSubmit(payload) {
            await this.requestRegisterProductToSpring(payload);
            
            await this.$router.push({
                name: "ShopMainPage",
            })

            // const product = await this.requestRegisterProductToSpring(payload);

            // await this.$router.push({
            //     name: "ShopReadProductPage",
            //     params: { productId: product.productId.toString()},
            // })
        }
    }
}
</script>

<style></style>