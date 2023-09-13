<template>
  <v-container class="question-mr">
    <h2 class="question-title">1:1문의 내역</h2>
    <v-table>
      <thead>
        <tr align="center" justify="center" class="question-mr">
          <td width="15%" align="center" class="question-line">No.</td>
          <td width="40%" align="center" class="question-line">제목</td>
          <td width="25%" align="center" class="question-line">작성일</td>
        </tr>
      </thead>
      <tbody>
        <tr
          class="question-mr"
          v-if="
            !questions || (Array.isArray(questions) && questions.length === 0)
          "
        >
          <th colspan="3" style="text-align: center">
            현재 등록하신 문의 내용이 없습니다!
          </th>
        </tr>
        <tr
          v-else
          v-for="question in paginatedquestions"
          :key="question.questionId"
          @click="questionReadRink(question.questionId)"
          class="question-mr question-tr"
        >
          <td align="center">{{ question.questionId }}</td>
          <td align="left">
            [{{ question.isAnswerComplete ? "완료" : "대기" }}]
            {{ question.title }}
          </td>
          <td align="center">{{ question.createdAt }}</td>
        </tr>
      </tbody>
      <tr>
        <th colspan="3">
          <v-pagination
            v-model="page"
            :length="Math.ceil(questions.length / itemsPerPage)"
            class="question-nation"
          />
        </th>
      </tr>
    </v-table>
    <v-btn
      class="question-btn"
      append-icon="mdi-chevron-double-right"
      variant="text"
      @click="goQuestionPage"
    >
      1:1문의하기
    </v-btn>
  </v-container>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
import '@/assets/css/myPage/myPageQA.css'
const QuestionModule = "QuestionModule";

export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    paginatedquestions() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.questions.slice(startIndex, endIndex);
    },
    ...mapState(QuestionModule, ["questions"]),
  },
  mounted() {
    this.requestQuestionListToSpring(1);
  },
  methods: {
    ...mapActions(QuestionModule, ["requestQuestionListToSpring"]),
    goQuestionPage() {
      this.$router.push("/help/question");
    },
    questionReadRink(questionId) {
      this.$router.push({ path: `/help/question/${questionId}` });
      console.log(questionId);
    },
  },
};
</script>
  
  <style lang="css" scoped>
</style>