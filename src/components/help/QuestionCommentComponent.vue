<template>
    <v-container style="margin-top: 3rem;" fluid>
      <v-card>
        <v-card-title  style="margin-bottom: 2rem;"></v-card-title>
        <v-card-text>
              <tbody>
                <tr class="row-mr" v-if="!comments || (Array.isArray(comments) && comments.length === 0)">
                  <h4 style="color: #222; background-color: #fff; margin: auto;">잠시만 기다려주세요~!</h4>
                </tr>
                <tr v-for="(comment) in comments" :key="comment.commentId">
                  <td align="left">
                    <div v-if="commentId !== comment.commentId">
                        <v-row>
                        <v-col cols="10">
                            작성자: {{ comment.writer }}
                        </v-col>
                        <v-col cols="2">
                            {{ comment.answerAt }}
                        </v-col>
                        <v-col cols="12">
                            {{ comment.content }}
                        </v-col>
                    </v-row>
                    </div>                    
                  </td>
                  <td></td>
                  <td align="right">
                    {{ comment.createDate }} <v-icon>mdi-clock-time-four-outline</v-icon>
                    <div>
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
  