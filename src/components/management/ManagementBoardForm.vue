<template>
  <div>
    <v-table style="margin: auto">
    <tr>
      <th align="center" width="10%">check</th>
      <th align="center" width="10%">게시물 번호</th>
      <th align="center" width="40%">제목</th>
      <th align="center" width="20%">아이디</th>
      <th align="center" width="20%">작성일</th>
    </tr>
    <tr>
      <td colspan="5">
        <hr style="margin: 10px auto;"> <!-- 가로 선 밑에 10px 여백 추가 -->
      </td>
    </tr>
    <tr v-if="!filteredBoards || (Array.isArray(filteredBoards) && filteredBoards.length === 0)">
      <td colspan="4">검색 결과가 없습니다.</td>
    </tr>
    <tr v-else v-for="board in filteredBoards" :key="board.boardId">
      <td align="center">
        <input type="checkbox" v-model="selectedItems" :value="board.boardId" />
      </td>
      <td align="center">
        {{ board.boardId }}
      </td>
      <td align="center">
        <router-link
          :to="{
            name: 'ManagementBoardReadPage',
            params: { boardId: board.boardId.toString() },
          }">
          {{ board.boardName }}
        </router-link>
      </td>
      <td align="center" style="padding: 10px 0;">
        {{ board.userId.nickname }}
      </td>
      <td align="center" style="padding: 10px 0;">
        {{ board.boardRegisterDate }}
      </td>
    </tr>
  </v-table>
  <v-btn color="orange" @click="testToken()">테스트</v-btn>

    <div class="managementBoardBtn">
      <div class="btn-container">
      <!-- "전체 선택" 버튼에 클릭 이벤트 추가 -->
      <v-btn :color="selectAllButtonColor" @click="toggleSelectAll">{{ selectAllButtonText }}</v-btn>
    </div>

    <div class="btn-container">
      <v-btn color="red" @click="deleteSelectedItems">삭제</v-btn>
    </div>

    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="제목을 입력하세요" />
      <v-btn @click="search" class="mdi mdi-magnify" variant="text"></v-btn>
    </div>
  </div>
</div>
</template>

<script>
import '@/assets/css/management/managementBoard.css'
import { mapActions } from 'vuex';
const BoardModule = 'BoardModule';
const LogInModule = 'LogInModule'

export default {
props: {
  boards: {
    type: Array,
    required: true,
  },
},
data() {
  return {
    selectedItems: [],
    searchQuery: "",
  };
},
computed: {
  // "전체 선택" 버튼의 텍스트와 색상을 계산하는 계산된 속성
  selectAllButtonText() {
    return this.selectAll ? "전체 해제" : "전체 선택";
  },
  selectAllButtonColor() {
    return this.selectAll ? "green" : "black";
  },
  filteredBoards() {
    if(!this.boards || this.boards.length === 0) {
      return [];
    }
    // 검색어를 소문자로 변환
    const query = this.searchQuery.toLowerCase();
    // 검색어와 일치하는 게시물만 필터링
    return this.boards.filter((board) => {
      return board.boardName.toLowerCase().includes(query);
    });
  },
},
watch: {
  selectedItems(newSelectedItems) {
    console.log("선택된 게시물 ID:", newSelectedItems);
  },
},
methods: {
  ...mapActions(BoardModule, ['requestManagementBoardDeleteToSpring']),

  // 09.12 : token을 가지고 userInfo를 가져올 시도
  ...mapActions(LogInModule, ['requestUserInfoToSpring']),
  async testToken() {
      await this.requestUserInfoToSpring();
  },

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      // "전체 선택" 버튼이 눌린 경우, 모든 게시물의 boardId를 selectedItems 배열에 추가하여 선택 상태로 만듭니다.
      this.selectedItems = this.boards.map((board) => board.boardId);
    } else {
      // "전체 해제" 버튼이 눌린 경우, selectedItems 배열을 비워 모든 선택을 해제합니다.
      this.selectedItems = [];
    }
  },
  search() {
    console.log("검색어:", this.searchQuery);
    console.log("검색 결과:", this.filteredBoards);
  },
  deleteSelectedItems() {
    if (this.selectedItems.length === 0) {
      alert("삭제할 게시물을 선택하세요.");
      return;
    }
    const boardId = this.selectedItems[0];
    console.log("삭제하려고 선택한 : ", boardId)

    let boardIds = this.selectedItems.toString()
    this.requestManagementBoardDeleteToSpring(boardIds);
  } 
},
};
</script>

<style lang="scss" scoped></style>