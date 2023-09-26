<template lang="">
    <div>
        <v-table class="purchaseList" >
      <tr>
        <th align="center" width="8%"></th>
        <th align="center" width="8%">구매자</th>
        <th align="center" width="16%">가격</th>
        <th align="center" width="16%">수량</th>
        <th align="center" width="17%">총액</th>
        <th align="center" width="17%">주소</th> 
        <th align="center" width="17%">상태</th> 
      </tr>
      <tr>
        <td colspan="7">
          <hr style="margin: 10px 0;"> 
        </td>
      </tr>
      <tr v-for="item in items" :key="item">
        <td><img :src="dynamicLink(item.productId.image)" alt="상품사진" style="width:70px; height:105px"></td>
       <td align="center"><span v-html="item.userId.nickname"></span></td>
        <td align="center"><span v-html="item.productId.productPrice"></span></td>
        <td align="center" ><span v-html="item.purchaseAmount"></span></td>
        <td align="center"><span v-html="item.productId.productPrice*item.purchaseAmount"></span></td>
        <td align="center"><span v-html="item.userAccount"></span></td>
        <td align="center"><span v-html="item.status"></span></td>
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
import { mapActions, mapState } from 'vuex';
const LINK = process.env.VUE_APP_S3_LINK;
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      pageSize: 8,
    }
  },
  methods: {
    ...mapActions(ManagementModule, ['requestPurchaseListToSpring']),
    dynamicLink(extraPath) {
            return `${LINK}/${extraPath}`;
        },
  },
  computed: {
    ...mapState(ManagementModule, ['purchaseList'])
  },
  mounted() {
    this.requestPurchaseListToSpring()
      .then(() => {
        this.items = this.purchaseList
        console.log(this.purchaseList)
      })
  },

}
</script>
<style lang="css">
.purchaseList{
  height:880px;
}
</style>