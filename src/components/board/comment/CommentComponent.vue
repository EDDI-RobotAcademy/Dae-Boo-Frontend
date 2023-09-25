<template>
  <v-container class="comment-page" fluid>
    <form @submit.prevent="onSubmit">
      <v-card class="comment-card">
        <v-card-text>
          <v-row>
            <v-col cols="1" align="left">댓글작성</v-col>
            <v-col cols="11">
              <span>닉네임: {{ myInfo.nickname }}</span>
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
const MyPageModule = "MyPageModule";
export default {
  data() {
    return {
      content: "",
      writer: "",
      userId: "",
      boardId: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", {
        boardName: this.boardName,
        writer: this.myInfo.nickname,
        content: this.content,
        category: this.category,
        userId: this.myInfo.userId,
        boardId: this.board.boardId
      });
    },
    created() {
    this.userId = this.myInfo.userId;
    this.boardId = this.board.boardId
  },
  },
  computed: {
    ...mapState(MyPageModule, ["myInfo"]),
    ...mapState(BoardModule, ["board"])
  }
};
</script>

<style scoped>
</style>
