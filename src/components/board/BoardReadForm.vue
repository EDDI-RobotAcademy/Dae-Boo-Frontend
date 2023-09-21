<template>
    <v-container class="board-read-container">
      <div class="board-read-mr">
        <v-row align="center">
          <v-col cols="2">
            <td><h2 class="board-read-title">[{{ board.category }}]</h2></td>
          </v-col>
          <v-col cols="10">
            <td><h2 class="board-read-title"> 제목 :  {{ board.boardName }}</h2></td>
          </v-col>
          <v-col cols="1">
            <td class="board-read-text">no. {{ board.boardId }}</td>
          </v-col>
          <v-col cols="8">
            <td class="board-read-text">작성자 : {{ board.userId.nickname }}</td>
          </v-col>
          <v-col cols="3">
            <td class="board-read-text">등록일자 : {{ board.boardRegisterDate }}</td>
          </v-col>
          <v-col cols="12">
            <span class="line"/>
          </v-col>
          <v-col cols="12">
            <div id="viewer" style="min-height: 300px;"></div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </template>
  
  <script>
  import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
  import "@/assets/css/editor-custom-style.css";
  import "@toast-ui/editor/dist/toastui-editor.css";
  import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
  import '@/assets/css/board/boardRead.css'
  export default {
    name: "BoardReadForm",
    props: {
      board: {
        type: Object,
        required: true,
      },
      // memberinfo: {
      //   type: Object,
      //   required: true,
      // }
    },
    watch: {
    board(newValue) {
      if(this.viewer) {
        this.viewer.setMarkdown(newValue.content)
      }
    }
  },
    data() {
      return {
        viewer: null,
      };
    },
    mounted() {
        this.$nextTick(() => {
    this.viewer = new Viewer({
      el: document.querySelector("#viewer"),
      height: "500px",
      initialValue: this.board.content,
      theme: "dark",
    });
  });
}
  };
  </script>
  
  <style lang="css" scoped>

  </style>
  