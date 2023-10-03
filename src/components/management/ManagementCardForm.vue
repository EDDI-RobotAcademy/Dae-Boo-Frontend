<template>
  <div v-show="cardList">
    <v-table class="cardList" style="height: 700px;">
      <tr>
        <th align="center" width="8%">ID</th>
        <th align="center" width="15%">Name</th>
        <th align="center" width="10%">Company</th>
        <th align="center" width="22%">Fee</th>
        <th align="center" width="23%">Conditions</th>
        <th align="center" width="22%">Benefit</th>
      </tr>
      <tr>
        <td colspan="6">
          <hr style="margin: 10px 0;"> <!-- 가로 선 밑에 10px 여백 추가 -->
        </td>
      </tr>
      <tr v-for="item in paginatedItems" :key="item.id" @click="goRead(item.cardId)">
        <td><span align="center" v-html="item.cardId"></span></td>
        <td><span align="center" v-html="item.name"></span></td>
        <td><span align="center" v-html="item.company"></span></td>
        <td><span align="center" v-html="item.fee"></span></td>
        <td><span align="center" v-html="item.cardCondition"></span></td>
        <td><span align="center" v-html="item.benefit"></span></td>
      </tr>
    </v-table>
    <v-btn @click="register">카드 등록</v-btn>
    <!-- 페이지네이션 컨트롤 -->
    <div style="display: flex; justify-content: center; align-items: center;">

      <v-btn @click="prevPage">이전 페이지</v-btn>
      <span style="padding: 10px"> {{ ' ' + currentPage }}</span>
      <v-btn @click="nextPage">다음 페이지</v-btn>
    </div>

  </div>
  <management-card-info v-show="cardInfo" :cardId="cardId" @cancel="cancelForm" />
  <management-card-register-form class="registerForm" v-show="cardRegister" @cancel="cancelRegistration" />
</template>
  
<script>
import ManagementCardRegisterForm from './ManagementCardRegisterForm.vue'
import ManagementCardInfo from './ManagementCardInfo.vue';
import { mapActions, mapState } from 'vuex';
const ManagementModule = 'ManagementModule';
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      pageSize: 13, // 페이지당 표시할 항목 수
      cardRegister: false,
      cardList: true,
      cardInfo: false
    };
  },
  components: {
    ManagementCardRegisterForm,
    ManagementCardInfo
  },
  computed: {
    ...mapState(ManagementModule, ['cards']),
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.items.slice(startIndex, endIndex);
    }
  },
  methods: {
    ...mapActions(ManagementModule, ['requestCardListToSpring', 'getCardInfoToSpring']),
    cancelRegistration() {
      this.cardRegister = !this.cardRegister;
      this.cardList = true
      this.cardInfo = false
    },
    register() {
      this.cardRegister = true
      this.cardInfo = false;
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
    goRead(id) {
      this.cardList = false;
      this.cardInfo = true;
      this.getCardInfoToSpring(id)

    },
    async cancelForm() {
      this.cardList = !this.cardList
      this.cardInfo = false;
      await this.requestCardListToSpring()
    }
  },
  mounted() {
    this.requestCardListToSpring()
      .then(() => {
        this.items = this.cards;
      });
  },

};
</script>
<style>
.centered-div {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.registerForm{
  padding-top: 200px;
}
</style>