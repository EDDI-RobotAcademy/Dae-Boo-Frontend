<template>
    <div div style="background-color: #f5f5f5; display: flex; flex-direction: column; align-items: center; padding-top: 50px;">
        <h2>상품 등록하기</h2>
        <ShopRegisterProductForm @submit="onSubmit"/>
    </div>
</template>

<script>
import '@/assets/css/shop/shopRegisterProduct.css'
import ShopRegisterProductForm from '@/components/shop/ShopRegisterProductForm.vue';

export default {
    name: 'ShopRegisterProductPage',
    components: {
        ShopRegisterProductForm
    },
}
</script>

<style></style>