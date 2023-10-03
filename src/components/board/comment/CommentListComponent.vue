<template>
  <v-container class="comment-list-page" fluid>
    <v-card class="comment-card">
      <v-card-title style="margin-bottom: 2rem;">댓글 목록</v-card-title>
      <v-card-text>
        <tbody>
          <tr class="row-mr" v-if="!comments || (Array.isArray(comments) && comments.length === 0)">
            <td colspan="3" align="center" style="text-align: center; margin: auto;">현재 작성된 댓글이 없습니다.</td>
          </tr>
          <tr v-for="(comment) in comments" :key="comment.commentId" style="margin:auto;">
            <td align="left" width="15%" style="border-top: solid 1px #444;">
              <div v-if="commentId !== comment.commentId">
                작성자: {{ comment.writer }} <v-icon>mdi-account</v-icon>
              </div>
            </td>
            <td align="left" width="70%"  style="border-top: solid 1px #444;">
              <p style="font-size: 20px;">
                {{ comment.content }}
              </p>
            </td>
            <td align="left" width="20%"  style="border-top: solid 1px #444;">
              {{ comment.createDate }} <v-icon>mdi-clock-time-four-outline</v-icon>
            </td>
            <td style=" border-top: solid 1px #222;">
              <v-btn style="margin: 1.3rem;" @click="handleDeleteClick(comment.commentId, comment.writer)" color="error" text small>삭제</v-btn>
            </td>
          </tr>
        </tbody>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import '@/assets/css/comment/comment.css'
import { mapActions, mapState } from 'vuex';
const CommentModule = 'CommentModule';
const LogInModule = 'LogInModule';
export default {
  props: {
    comment: {
      type: Object,
      require: true
    },
    comments: {
      type: Array,
    }
  },
  computed: {
    ...mapState(CommentModule, ["comments"]),
    ...mapState(LogInModule, ["memberInfo"]),
  },
  data() {
    return {
      content: null
    }
  },
  methods: {
    ...mapActions(CommentModule, ['requestCommentDeleteToSpring']),
    handleDeleteClick(commentId, writer) {
      if (!this.hasPermission(writer)) {
        if (!this.permissionDenied) {
          console.log(this.permissionDenied)
          alert("권한이 없는 게시물입니다.");
          this.permissionDenied = true;
        }
        return;
      }
      this.requestCommentDeleteToSpring(commentId);
    },
    hasPermission(commentWriter) {
      return this.memberInfo && this.memberInfo.nickname === commentWriter;
    },
  },
};
</script>

<style scoped></style>
