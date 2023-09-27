<template lang="">
    <v-container>
        <v-table class="purchaseList" >
      <tr>
        <th align="center" width="10%"></th>
        <th align="center" width="10%">상품명</th>
        <th align="center" width="12%">수량</th>
        <th align="center" width="13%">가격</th>
        <th align="center" width="32%">주소</th> 
        <th align="center" width="13%">상태</th> 
        <th align="center" width="10%"></th> 
      </tr>
      <tr>
        <td colspan="7">
          <hr style="margin: 10px 0;"> 
        </td>
      </tr>
      <tr v-for="item in paginatedItems" :key="item.purchaseId">
        <td><img :src="dynamicLink(item.productId.image)" alt="상품사진" style="width:70px; height:105px"></td>
       <td align="center"><span v-html="item.productId.productName"></span></td>
        <td align="center"><span v-html="item.purchaseAmount"></span></td>
        <td align="center" ><span v-html="item.productId.productPrice"></span></td>
        <td align="center"><span v-html="item.userAccount"></span></td>
        <td align="center"><span v-html="item.status"></span></td>
        <td align="center"><v-btn @click="requestPaymentCancel(item.purchaseId)"> 환불 </v-btn></td>
      </tr>
    </v-table>
    <div style="text-align: center;">
            <v-btn @click="prevPage">이전 페이지</v-btn>
            <v-btn @click="nextPage">다음 페이지</v-btn>
            <span> {{ ' ' + currentPage }}</span>
        </div>
    </v-container>
</template>
<script>
const ShopModule = 'ShopModule'
const LogInModule = 'LogInModule'
const PaymentModule = 'PaymentModule'
const LINK = process.env.VUE_APP_S3_LINK;
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    ...mapActions(ShopModule, ['requestMyPurchaseListToSpring']),
    ...mapActions(PaymentModule, ['requestPaymentCancelToSpring']),
    requestPaymentCancel(purchaseId) {
      this.requestPaymentCancelToSpring(purchaseId)
    },
    dynamicLink(extraPath) {
      return `${LINK}/${extraPath}`;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      const maxPage = Math.ceil(this.items.length / this.pageSize);
      if (this.currentPage < maxPage) {
        this.currentPage++;
      }
    },
   
  },
  mounted() {
    this.requestMyPurchaseListToSpring(this.memberInfo.userId)
      .then(() => {
        this.items = this.myPurchaseList
      })

  },
  computed: {
    ...mapState(LogInModule, ['memberInfo']),
    ...mapState(ShopModule, ['myPurchaseList']),
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.items.slice(startIndex, endIndex);
    }
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      pageSize: 4,
    }
  },
}
</script>
<style lang="css">
.purchaseList {
  height: 500px
}
</style>