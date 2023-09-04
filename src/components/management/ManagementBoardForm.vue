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
        <tr v-if="!boards || (Array.isArray(boards) && boards.length === 0)">
          <td colspan="4">현재 등록된 게시물이 없습니다!</td>
        </tr>
        <tr v-else v-for="board in boards" :key="board.boardId">
          <td align="center">
            <input type="checkbox" v-model="selectedItems" :value="board.boardId" />
          </td>
          <td align="center">
            {{ board.boardId }}
          </td>
          <td align="center">
            {{ board.boardName }}
          </td>
          <td align="center" style="padding: 10px 0;">
            {{ board.userId.nickname }}
          </td>
          <td align="center" style="padding: 10px 0;">
            {{ board.boardRegisterDate }}
          </td>
        </tr>
      </v-table>

      <div class="managementBoardBtn">
        <div class="btn-container">
        <!-- "전체 선택" 버튼에 클릭 이벤트 추가 -->
        <!-- <div style="width:130px"></div> -->
        <v-btn :color="selectAllButtonColor" @click="toggleSelectAll">{{ selectAllButtonText }}</v-btn>
      </div>

      <div class="btn-container">
        <v-btn color="red" @click="deleteSelectedItems">삭제</v-btn>
      </div>

      <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="검색어를 입력하세요" />
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapActions } from 'vuex';
const BoardModule = 'BoardModule';

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
  },
  watch: {
    selectedItems(newSelectedItems) {
      // selectedItems 배열이 변경될 때 실행되는 코드
      console.log("선택된 게시물 ID:", newSelectedItems);
    },
  },
  methods: {
    ...mapActions(BoardModule, ['requestManagementBoardDeleteToSpring']),
    // "전체 선택" 버튼 클릭 시 호출될 메서드
    toggleSelectAll() {
      // this.selectAll 변수를 토글합니다.
      this.selectAll = !this.selectAll;
      if (this.selectAll) {
        // "전체 선택" 버튼이 눌린 경우, 모든 게시물의 boardId를 selectedItems 배열에 추가하여 선택 상태로 만듭니다.
        this.selectedItems = this.boards.map((board) => board.boardId);
      } else {
        // "전체 해제" 버튼이 눌린 경우, selectedItems 배열을 비워 모든 선택을 해제합니다.
        this.selectedItems = [];
      }
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
  
<style>
.managementBoardBtn {
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
  </style>
  