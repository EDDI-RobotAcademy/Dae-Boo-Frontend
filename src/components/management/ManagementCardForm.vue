<template>
    <div>
      <v-table class="cardList" style="width:1200px; height: 700px;">
        <tr>
          <th  align="center" width="8%">ID</th>
          <th align="center" width="20%">Name</th>
          <th align="center" width="25%">Fee</th>
          <th align="center" width="25%">Conditions</th>
          <th align="center" width="22%">Benefit</th>
        </tr>
        <tr>
            <td colspan="5">
              <hr style="margin: 10px 0;"> <!-- 가로 선 밑에 10px 여백 추가 -->
            </td>
          </tr>
        <tr v-for="item in paginatedItems" :key="item.id">
          <td><span v-html="item.id"></span></td>
          <td><span v-html="item.name"></span></td>
          <td><span v-html="item.fee"></span></td>
          <td><span v-html="item.results"></span></td>
          <td><span v-html="item.benefit"></span></td>
        </tr>
      </v-table>
  
      <!-- 페이지네이션 컨트롤 -->
      <div style="text-align: center;">
        <v-btn @click="prevPage">이전 페이지</v-btn>
        <v-btn @click="nextPage">다음 페이지</v-btn>
        <span>    {{ '       '+currentPage }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  const ManagementModule = 'ManagementModule';
  
  export default {
    data() {
      return {
        items: [],
        currentPage: 1,
        pageSize: 15 // 페이지당 표시할 항목 수
      };
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
    }
  };
  </script>
  <style>
  
  </style>