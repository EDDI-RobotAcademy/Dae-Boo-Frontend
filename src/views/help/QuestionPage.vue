<template>
  <v-container>
    <question-form @submit="onSubmit" />
  </v-container>
</template>

<script>
import QuestionForm from "@/components/help/QuestionForm.vue";
import { mapActions } from "vuex";
const QuestionModule = "QuestionModule";
export default {
  components: {
    QuestionForm,
  },
  methods: {
    ...mapActions(QuestionModule, ["requestCreateQuestionToSpring"]),

    async onSubmit(payload) {
      try {
        const question = await this.requestCreateQuestionToSpring(payload);
        console.log(question.data)
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