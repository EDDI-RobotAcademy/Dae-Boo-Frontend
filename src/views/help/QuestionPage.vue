<template>
  <v-container>
    <question-form :memberInfo="memberInfo" @submit="onSubmit" />
  </v-container>
</template>

<script>
import QuestionForm from "@/components/help/QuestionForm.vue";
import { mapActions, mapState } from "vuex";
const QuestionModule = "QuestionModule";
const LogInModule = "LogInModule";
export default {
  components: {
    QuestionForm,
  },
  computed: {
    ...mapState(LogInModule, ["memberInfo"])
  },
  methods: {
    ...mapActions(QuestionModule, ["requestCreateQuestionToSpring"]),
    async onSubmit(payload) {
      try {
        const question = await this.requestCreateQuestionToSpring({...payload, userId: this.memberInfo.userId});
        console.log("typeof(question): " + typeof question);
        console.log("questionId: " + JSON.stringify(question));
        this.$router.push({
          name: "QuestionReadPage",
          params: { questionId: question.questionId },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
