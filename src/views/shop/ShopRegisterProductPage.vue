<template>
    <div style="background-color: #ffffff;">
        <ShopRegisterProductForm @submit="onSubmit"/>
    </div>
</template>

<script>
import ShopRegisterProductForm from '@/components/shop/ShopRegisterProductForm.vue';

export default {
    name: 'ShopRegisterProductPage',
    components: {
        ShopRegisterProductForm
    },
}
</script>

<style></style>