<template>
  <v-col cols="2">
    <router-link to="/board/list-page" style="text-decoration-line: none">
      <h1 class="board-head" align="center">게시판</h1>
    </router-link>
  </v-col>
  <v-container class="board-read-style">
    <board-read-form v-if="board" :board="board" />
    <div>
      <v-row align="center" justify="center">
        <v-col cols="2" align="center" justify="center">
              <button class="board-button" to="/board/list-page">이전으로</button>
            </v-col>
            <v-col cols="8"><span/></v-col>
            <v-col cols="2" align="center" justify="center">
          <button
            class="board-button"
            @click="boardModifyRouter(board.boardId)"
          >
            수정하기
          </button>
        </v-col>
      </v-row>
    </div>
    <div>
      <comment-list-page />
      <comment-page />
    </div>
  </v-container>
  <v-container class="board-read-style2">
    <board-list-page />
  </v-container>
</template>

<script>
import BoardReadForm from "@/components/board/BoardReadForm.vue";
import BoardListPage from "@/views/board/BoardListPage.vue";
import CommentPage from "@/views/board/comment/CommentPage.vue";
import CommentListPage from "@/views/board/comment/CommentListPage.vue";
import { mapActions, mapState } from "vuex";
const BoardModule = "BoardModule";
export default {
  components: {
    BoardReadForm,
    BoardListPage,
    CommentPage,
    CommentListPage,
  },
  props: {
    boardId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(BoardModule, ["board"]),
  },

  methods: {
    ...mapActions(BoardModule, ["BoardReadToSpring"]),
    boardModifyRouter(boardId) {
      this.$router.push({ path: `/board/modify-page/${boardId}` });
    },
  },
  created() {
    this.BoardReadToSpring(this.boardId);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.boardId !== from.params.boardId) {
      this.$nextTick(() => {
        this.BoardReadToSpring(to.params.boardId);
      });
    }
    next();
  },
};
</script>

<style lang="css">
.board-read-style {
  background-color: #222;
  color: #fff;
}
.board-read-style2 {
  margin-top: 2rem;
  padding-top: 0;
  background-color: #222;
  color: #fff;
}
</style>