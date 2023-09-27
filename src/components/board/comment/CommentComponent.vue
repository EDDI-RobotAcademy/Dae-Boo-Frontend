<template>
  <v-container class="comment-page" fluid>
    <form @submit.prevent="onSubmit">
      <v-card class="comment-card">
        <v-card-text>
          <v-row>
            <v-col cols="1" align="left">댓글작성</v-col>
            <v-col cols="11">
              <span>닉네임: {{ myInfo?.nickname || (comment?.userId ? comment.userId.nickname : '없음') }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="content"
                label="댓글 내용"
                variant="outlined"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-right">
              <button type="button" @click="onSubmit">작성</button>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import "@/assets/css/comment/comment.css";
const BoardModule = "BoardModule";
const LogInModule = "LogInModule";
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    onSubmit() {
      if (!this.memberInfo || !this.memberInfo.userId) {
        alert("로그인 후에 이용 가능합니다.");
        return;
      }
      if (!this.content.trim()) {
        alert("댓글을 작성해주세요.");
        return;
      }
      this.$emit("submit", {
        boardName: this.boardName,
        writer: this.memberInfo?.nickname,
        content: this.content,
        category: this.category,
        userId: this.memberInfo?.userId,
        boardId: this.board.boardId,
      });
    },
  },
  computed: {
    ...mapState(LogInModule, ["memberInfo"]),
    ...mapState(BoardModule, ["board"]),
  },
};
</script>

<style scoped>
</style>
