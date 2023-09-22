<template>
    <v-container class="comment-list-page" fluid>
      <v-card class="comment-card">
        <v-card-title  style="margin-bottom: 2rem;">댓글 목록</v-card-title>
        <v-card-text >
              <tbody>
                <tr class="row-mr" v-if="!comments || (Array.isArray(comments) && comments.length === 0)">
                  <td colspan="3" align="center" style="text-align: center; margin: auto;">현재 작성된 댓글이 없습니다.</td>
                </tr>
                <tr v-for="(comment) in comments" :key="comment.commentId" style="margin:auto">
                  <td align="left" width="15%">
                    <div v-if="commentId !== comment.commentId">
                      작성자: {{ comment.writer }}  <v-icon>mdi-account</v-icon>                      
                    </div>                    
                  </td>
                  <td align="left" width="70%">
                    <p style="font-size: 20px;">
                      {{ comment.content }}
                    </p>
                  </td>
                  <td align="left" width="20%">
                    {{ comment.createDate }} <v-icon>mdi-clock-time-four-outline</v-icon>
                  </td>
                  <v-btn style="margin-top: 1rem;" @click="handleDeleteClick" color="error" text small >삭제</v-btn>
                </tr>
                <tr>
                  
                </tr>
              </tbody>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
import '@/assets/css/comment/comment.css'
import { mapActions } from 'vuex';
const CommentModule = 'CommentModule';
  export default {
    props: {
      comment: {
        type: Object,
        require: true
      },
      comments:{
        type: Array,
      }
    },
    data() {
      return {
        content:null
      }
    },
    methods: {
      ...mapActions(CommentModule , ['requestCommentDeleteToSpring']),
      async handleDeleteClick() {
        const commentId = this.commentId;
        console.log(commentId)
        await this.requestCommentDeleteToSpring(commentId);
      }
    },
    mounted() {
      this.content = this.comments.content
    }
  };
  </script>
  
  <style scoped>

  </style>
  