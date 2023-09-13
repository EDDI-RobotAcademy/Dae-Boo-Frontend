<template>
 <v-container class="board-read-style">   
  <div class="board-mr">
   <v-btn variant="plain" :ripple="false" class="category-st">전체</v-btn>
   <v-btn variant="plain" :ripple="false" class="category-st">일상</v-btn>
   <v-btn variant="plain" :ripple="false" class="category-st">후기</v-btn>
   <v-table>
     <thead>
        <tr align="center" justify="center" class="row-mr">
          <td width="10%" align="center" class="bottom-line">No.</td>
          <td width="50%" align="center" class="bottom-line">제목</td>
          <td width="20%" align="center" class="bottom-line">작성자</td>
          <td width="20%" align="center" class="bottom-line">작성일</td>
        </tr>
      </thead>
      <tbody>
        <tr class="row-mr" v-if="!boards || (Array.isArray(boards) && boards.length === 0)">
          <th colspan="4" style="text-align: center;">현재 등록된 게시글이 없습니다!</th>
        </tr>
        <tr
          v-else
          v-for="(board) in paginatedBoards"
          :key="board.boardId"
          @click="boardReadRink(board.boardId)"
          class="row-mr cardTr"
        >
          <td align="center">{{ board.boardId }}</td>
          <td align="center">{{ board.category }} {{ board.boardName }}</td>
          <td align="center">{{ board.writer }}</td>
          <td align="center">{{ board.boardRegisterDate }}</td>
        </tr>
      </tbody>
      <tr>
        <th colspan="4">
      <v-pagination
        v-model="page" :length="Math.ceil(boards.length / itemsPerPage)" class="page-nation"/>
    </th>
    </tr>
    </v-table>
  </div>
  </v-container>
</template>

<script>
import '@/assets/css/board/boardList.css'
export default {
  props: {
    boards: {
      type: Array
    },
  },
  data() {
    return {
      page:1,
      itemsPerPage:10, 
    }
  },
  computed: {
    paginatedBoards() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.boards.slice(startIndex, endIndex);
    }
  },
  methods: {
    boardReadRink(boardId) {
      this.$router.push({path: `/board/read-page/${boardId}`})
    }
  },
};
</script>

<style lang="scss" scoped>
</style>