<template>
    <div class="answerTextBox">
        <form @submit.prevent="onSubmit">
          <div class="answerBox">
            <div v-for="(comment, index) in comments" :key="index" class="comment">
              {{ comment.text }}
            </div>
            <textarea v-model="answer" cols="130" rows="5" class="answerInput" placeholder="답변을 입력해주세요." />
            <v-btn @click="onSubmit" style="margin: 5px;">완료</v-btn>
          </div>
      </form>
    </div>
</template>

<script>
import '@/assets/css/management/managementQuestionAnswer.css'

export default {
    data() {
        return{
            answer: '',
            commentText: '',
            comments: [],
        }
    },
    methods: {
    async onSubmit() {
        alert("데이터 이동 합니다: "+ this.answer);
        this.$emit("answer-submitted", this.answer);
    },
  }
}
</script>

<style lang="scss" scoped></style>