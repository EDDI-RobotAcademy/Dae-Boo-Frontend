<template>
    <div >
      <h1 style="color:white;">결제 승인</h1>
      <p style="color:white;">카카오 페이 결제 코드: {{ pg_token }}</p>
      <v-btn style="color:black;" @click="paymentCheckout()">결제 완료 하기</v-btn>
    
    </div>
  </template>
  
  <script>
const PaymentModule = 'PaymentModule'
import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        pg_token: ''
      };
    },
    mounted() {
      // URL에서 pg_token 파라미터 추출
      const urlParams = new URLSearchParams(window.location.search);
      this.pg_token = urlParams.get('pg_token');
      
      
      // 여기에서 pgToken을 사용하여 필요한 작업 수행
    },
    watch: {
      pg_token: function (newToken) {
        if (newToken) {
          this.paymentCheckout();
        }
      }
    },
    methods: {
        ...mapActions(PaymentModule,['requestPaymentSuccess']),

        async paymentCheckout(){
        
            let token = this.pg_token
            await this.requestPaymentSuccess(token)
        }
    }
  }
  </script>