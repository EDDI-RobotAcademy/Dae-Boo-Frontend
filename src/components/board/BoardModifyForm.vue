<template>
  <v-container class="board-modify-container">
    <form @submit.prevent="onSubmit">
      <div class="board-read-mr">
        <v-row align="center" justify="left">
          <v-col cols="12">
            <v-text-field label="제목" variant="outlined" class="board-register-body" v-model="boardName" />
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
            <span class="line2" />
          </v-col>
          <v-col cols="12">
            <div id="editor" class="editor"></div>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="10">
            <router-link :to="{
              name: 'BoardReadPage',
              params: { boardId: board.boardId },
            }" style="text-decoration: none; color: #222;">수정 취소</router-link>
          </v-col>
          <v-col cols="1">
            <button @click="onDelete" type="button" style="color: #222;">삭제</button>
          </v-col>
          <button @click="onSubmit" type="button" style="color: #222;">수정 완료</button>
          <v-col cols="1">
          </v-col>
        </v-row>
      </div>
    </form>
  </v-container>
</template>
  
<script>
import Editor from "@toast-ui/editor";
import "@/assets/css/editor-custom-style.css";
import "@/assets/css/board/boardModify.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { mapActions, mapState } from "vuex";
const BoardModule = 'BoardModule';

export default {
  data() {
    return {
      editor: null,
      nickname: "",
      boardName: "",
      content: "",
    };
  },
  computed: {
    ...mapState(BoardModule, ['board'])
  },
  mounted() {
    this.editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
      usageStatistics: false,
      initialValue: this.content
    });
  },
  methods: {
    onSubmit() {
      this.content = this.editor.getMarkdown();
      this.$emit("submit", {
        boardName: this.boardName,
        content: this.content,
        userId: this.userId
      });
    },
    ...mapActions(BoardModule, ['DeleteBoardToSpring']),
    async onDelete() {
      try {
        const boardId = this.board.boardId;
        console.log(boardId);
        await this.DeleteBoardToSpring(boardId);
        alert('삭제 성공!');
        await this.$router.push({ name: 'BoardListPage' });
      } 
      catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.boardName = this.board.boardName;
    this.content = this.board.content;
    this.nickname = this.board.userId.nickname;
  },
};
</script>
  
<style></style>
  