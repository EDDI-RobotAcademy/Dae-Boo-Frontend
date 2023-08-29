<template>
    <div>
      <table style="margin: 10px">
        <tr>
          <th align="center" width="8%">check</th>
          <th align="center" width="20%">게시물 번호</th>
          <th align="center" width="42%">제목</th>
          <th align="center" width="20%">아이디</th>
          <th align="center" width="30%">작성일</th>
        </tr>
        <tr>
          <td colspan="5">
            <hr style="margin: 10px 0;"> <!-- 가로 선 밑에 10px 여백 추가 -->
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
          <td align="center" style="padding: 10px 0;"> <!-- 위아래 padding 추가 -->
            {{ board.userId.nickname }}
          </td>
          <td align="center" style="padding: 10px 0;"> <!-- 위아래 padding 추가 -->
            {{ board.boardRegisterDate }}
          </td>
        </tr>
      </table>
  
      <!-- 삭제 버튼을 가운데로 정렬한 div -->
      <div style="text-align: center;">
        <v-btn color="red">삭제</v-btn>
      </div>
  
      <!-- 검색 창을 삭제 버튼 오른쪽에 위치 -->
      <div style="display: flex; align-items: center; justify-content: flex-end;">
        <input type="text" v-model="searchQuery" placeholder="검색어를 입력하세요" />
      </div>
    </div>
  </template>
  
  <script>
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
  };
  </script>
  
  <style lang="css">
  </style>
  