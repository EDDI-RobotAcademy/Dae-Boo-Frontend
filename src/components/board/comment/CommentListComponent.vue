<template>
    <v-container class="comment-list-page" fluid>
      <v-card class="comment-card">
        <v-card-title  style="margin-bottom: 2rem;">댓글 목록</v-card-title>
        <v-card-text>
              <tbody>
                <tr class="row-mr" v-if="!comments || (Array.isArray(comments) && comments.length === 0)">
                  <td colspan="3" align="center" style="text-align: center; margin: auto;">현재 작성된 댓글이 없습니다.</td>
                </tr>
                <tr v-for="(comment) in comments" :key="comment.commentId">
                  <td align="left">
                    <div v-if="commentId !== comment.commentId">
                      작성자: {{ comment.writer }}  <v-icon>mdi-account</v-icon>{{ comment.createDate }}
                      {{ comment.content }}
                    </div>                    
                  </td>
                  <td></td>
                  <td align="right">
                    {{ comment.createDate }} <v-icon>mdi-clock-time-four-outline</v-icon>
                    <div v-if="comment.writer === user.nickName">
                      <v-btn @click="handleEditClick(comment)" text small>수정</v-btn>
                      <v-btn @click="handleDeleteClick(comment)" color="error" text small>삭제</v-btn>
                    </div>
                  </td>
                </tr>
              </tbody>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
import '@/assets/css/comment/comment.css'
  export default {
    props: {
      comments:{
        type: Array,
      }
    },
  };
  </script>
  
  <style scoped>

  </style>
  