<template>
  <div v-show="cardRegister">
    <v-table class="cardList" style="width:1200px; height: 700px;">
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
      <tr v-for="item in paginatedItems" :key="item.id">
        <td><span align="center" v-html="item.cardId"></span></td>
        <td><span align="center" v-html="item.name"></span></td>
        <td><span align="center" v-html="item.company"></span></td>
        <td><span align="center" v-html="item.fee"></span></td>
        <td><span align="center" v-html="item.cardCondition"></span></td>
        <td><span align="center" v-html="item.benefit"></span></td>
      </tr>
    </v-table>

    <!-- 페이지네이션 컨트롤 -->
    <div style="text-align: center;">
      <v-btn @click="register">카드 등록</v-btn>
      <v-btn @click="prevPage">이전 페이지</v-btn>
      <v-btn @click="nextPage">다음 페이지</v-btn>
      <span> {{ ' ' + currentPage }}</span>
    </div>
  </div>
  <management-card-register-form v-show="!cardRegister" @cancel="cancelRegistration" />
</template>
  
<script>
import ManagementCardRegisterForm from './ManagementCardRegisterForm.vue'
import { mapActions, mapState } from 'vuex';
const ManagementModule = 'ManagementModule';
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      pageSize: 15, // 페이지당 표시할 항목 수
      cardRegister: true,
    };
  },
  components: {
    ManagementCardRegisterForm
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
    ...mapActions(ManagementModule, ['requestCardListToSpring']),
    cancelRegistration() {
      this.cardRegister = !this.cardRegister;
    },
    register() {
      this.cardRegister = false
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
</style>