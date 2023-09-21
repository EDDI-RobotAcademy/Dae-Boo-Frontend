<template>
  <v-container class="board-read-style">   
   <div class="board-mr">
    <v-btn variant="plain" :ripple="false" class="category-st" @click="filterByCategory('전체')">전체</v-btn>
    <v-btn variant="plain" :ripple="false" class="category-st" @click="filterByCategory('DAILY')">DAILY</v-btn>
    <v-btn variant="plain" :ripple="false" class="category-st" @click="filterByCategory('REVIEW')">REVIEW</v-btn>
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
         <tr class="row-mr" v-if="!filteredBoards || (Array.isArray(filteredBoards) && filteredBoards.length === 0)">
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
           <td align="center"> <p style="font-size: small;">[{{ board.category }}]{{ board.boardName }}</p> </td>
           <td align="center">{{ board.userId.nickname }}</td>
           <td align="center">{{ board.boardRegisterDate }}</td>
         </tr>
       </tbody>
       <tr>
         <th colspan="4">
           <v-pagination
             v-model="page"
             :length="Math.ceil(filteredBoards.length / itemsPerPage)"
             class="page-nation"
           />
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
       type: Array,
       userId: {
         nickname: String
       }
     },
     
   },
   data() {
     return {
       page: 1,
       itemsPerPage: 10,
       selectedCategory: '전체', 
     }
   },
   computed: {
     filteredBoards() {
       if (this.selectedCategory === '전체') {
         return this.boards; 
       } else {
         return this.boards.filter(board => board.category === this.selectedCategory);
       }
     },
     paginatedBoards() {
       const startIndex = (this.page - 1) * this.itemsPerPage;
       const endIndex = startIndex + this.itemsPerPage;
       return this.filteredBoards.slice(startIndex, endIndex);
     },
   },
   methods: {
     boardReadRink(boardId) {
       this.$router.push({ path: `/board/read-page/${boardId}` })
     },
     filterByCategory(category) {
       this.selectedCategory = category;
       this.page = 1;
     },
   },
 };
 </script>
 
 <style lang="scss" scoped>
 </style>
 