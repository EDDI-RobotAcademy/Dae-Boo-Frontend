<template lang="">
 <div class="paymentFail">
        <h3>결제를 취소하였습니다.</h3>
        <h3 class="shopText" @click="goShop">쇼핑몰로 돌아가기</h3>
  
    </div>
</template>
<script>
export default {
    methods: {
        goShop(){
            this.$router.push({name:'ShopMainPage'})
        }
    },
}
</script>
<style lang="css">
.paymentFail{
    padding-top: 100px;
    text-align:center;
}
.shopText{
    text-decoration: underline;
}
</style>