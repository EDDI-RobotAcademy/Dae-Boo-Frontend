<template>
  <div class="question-container">
    <question-read-form v-if="question" :question="question" :myInfo="myInfo"/>
    <QuestionCommentComponent :answer="answer"/>
  </div>
</template>

<script>
import QuestionReadForm from "@/components/help/QuestionReadForm.vue";
import QuestionCommentComponent from '@/components/help/QuestionCommentComponent.vue'
import { mapActions, mapState } from "vuex";
const QuestionBoardModule = 'QuestionBoardModule';
const QuestionModule = "QuestionModule";
const MyPageModule = "MyPageModule";
export default {
  components: {
    QuestionReadForm,
    QuestionCommentComponent
  },
  props: {
    questionId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(QuestionBoardModule, ['answer']),
    ...mapState(QuestionModule, ["question"]),
    ...mapState(MyPageModule, ["myInfo"]),
  },
  mounted() {
    this.requestQuestionToSpring(this.questionId);
  },
  methods: {
    ...mapActions(QuestionBoardModule, ['requestManagementDetailQuestionAnswerToSpring']),
    ...mapActions(QuestionModule, ["requestQuestionToSpring"]),    
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.questionId !== from.params.questionId) {
      this.$nextTick(() => {
        this.requestQuestionToSpring(to.params.questionId);
      });
    }
    next();
  },
};
</script>

<style lang="scss" scoped>
</style>