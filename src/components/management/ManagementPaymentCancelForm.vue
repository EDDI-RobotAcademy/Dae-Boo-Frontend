<template lang="">
    <div>
        <v-table class="refundList" >
      <tr>
        <th align="center" width="10%">주문 번호</th>
        <th align="center" width="10%">구매자</th>
        <th align="center" width="15%">상품 정보</th>
        <th align="center" width="15%">총액</th>
        <th align="center" width="20%">주소</th> 
        <th align="center" width="15%">상태</th> 
        <th align="center" width="15%">환불</th> 
      </tr>
      <tr>
        <td colspan="7">
          <hr style="margin: 10px 0;">
        </td>
      </tr>
      <tr class="dataRow" v-for="item in items" :key="item">
        <td align="center"><span v-html="item.purchaseId"></span></td>
       <td align="center"><span v-html="item.userId.nickname"></span></td>
        <td align="center"><span v-html="item.productId.productName"></span></td>
        <td align="center"><span v-html="item.productId.productPrice*item.purchaseAmount"></span></td>
        <td align="center"><span v-html="item.userAccount"></span></td>
        <td align="center"><span v-html="item.status"></span></td>
        <td align="center"><v-btn @click="paymentCancel(item.purchaseId)"> 환불 </v-btn></td>
      </tr>
    </v-table>
    <div style="text-align: center;">
            <v-btn @click="prevPage">이전 페이지</v-btn>
            <v-btn @click="nextPage">다음 페이지</v-btn>
            <span> {{ ' ' + currentPage }}</span>
        </div>
    </div>
</template>
<script>
const ManagementModule = 'ManagementModule'
const PaymentModule = 'PaymentModule'
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            items: [],
            currentPage: 1,
            pageSize: 8,
        }
    },
    methods: {
        ...mapActions(ManagementModule, ['requestRefundListToSpring']),
        ...mapActions(PaymentModule,['requestPaymentRefundToSpring']),
        paymentCancel(purchaseId){
            this.requestPaymentRefundToSpring(purchaseId)
        }

    },
    computed: {
        ...mapState(ManagementModule, ['refundList'])
    },
    mounted() {
        this.requestRefundListToSpring()
            .then(() => {
                this.items = this.refundList
                console.log(this.refundList)
            })
    },
}
</script>
<style lang="css">
.refundList {
    height: 880px;
}
.dataRow{
  height: 50px;
}
</style>
