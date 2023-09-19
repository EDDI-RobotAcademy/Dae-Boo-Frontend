<template>
  <div>
    <question-read-form v-if="question" :question="question" :myInfo="myInfo"/>
  </div>
</template>

<script>
import QuestionReadForm from "@/components/help/QuestionReadForm.vue";
import { mapActions, mapState } from "vuex";
const QuestionModule = "QuestionModule";
const MyPageModule = "MyPageModule";
export default {
  components: {
    QuestionReadForm,
  },
  props: {
    questionId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(QuestionModule, ["question"]),
    ...mapState(MyPageModule, ["myInfo"]),
  },
  mounted() {
    this.requestQuestionToSpring(this.questionId);
  },
  methods: {
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