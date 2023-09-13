<template>
  <v-container class="comment-page" fluid>
    <form @submit.prevent="onSubmit">
      <v-card class="comment-card">
        <v-card-text>
          <v-row>
            <v-col cols="1" align="left">댓글작성</v-col>
            <v-col cols="11">
              <span :nickname="userId.nickname">닉네임: {{ userId.nickname }}</span>
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
import '@/assets/css/comment/comment.css'
export default {
  data() {
    return {
      content: '',
      userId: 1
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        writer: this.userId.nickname,
        content: this.content,
      };
      this.$emit('submit', payload);
      this.content = '';
    },
  },
};
</script>

<style scoped>

</style>
