<template>
  <v-col cols="2">
    <router-link to="/board/list-page" style="text-decoration-line: none">
      <h1 class="board-head" align="center">게시판</h1>
    </router-link>
  </v-col>
  <v-container class="board-read-style">
    <board-read-form v-if="board" :board="board"/>
    <div>
      <v-row align="center" justify="center">
        <v-col cols="2" align="center" justify="center">
          <button class="board-button" @click="boardListRouter">이전으로</button>
        </v-col>
        <v-col cols="8"><span /></v-col>
        <v-col cols="2" align="center" justify="center">
          <button class="board-button" @click="boardModifyRouter(board.boardId)">
            수정하기
          </button>
        </v-col>
      </v-row>
    </div>
    <div>
      <comment-list-page :comments="comments" :boardId="boardId" />
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
const LogInModule = "LogInModule";
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
    comments: {
      type: Array,
    },
  },
  computed: {
    ...mapState(BoardModule, ["board"]),
    ...mapState(LogInModule, ["memberInfo"]),
    hasPermission() {
      // 현재 로그인한 사용자의 userId와 게시물의 userId를 비교하여 권한 확인
      return (
        this.memberInfo &&
        this.board &&
        this.board.userId &&
        this.memberInfo.userId === this.board.userId.userId);
    },
  },

  methods: {
    ...mapActions(BoardModule, ["BoardReadToSpring"]),
    boardModifyRouter(boardId) {
      if (!this.hasPermission) {
        if (!this.permissionDenied) {
          // 권한이 없는 경우 한 번만 경고 메시지 표시
          alert("권한이 없는 게시물입니다.");
          this.permissionDenied = true;
        }
        return;
      }
      this.$router.push({ path: `/board/modify-page/${boardId}` });
    },
    boardListRouter() {
      this.$router.push({ path: "/board/list-page" })
    }
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
  background-color: #fff;
  color: #222;
}

.board-read-style2 {
  margin-top: 2rem;
  padding-top: 0;
  background-color: #fff;
  color: #222;
}
</style>