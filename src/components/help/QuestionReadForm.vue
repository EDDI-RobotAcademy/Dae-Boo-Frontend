<template>
  <v-container class="question-container" >
    <div class="question-read-mr">
      <v-row align="center" justify="left">
        <v-col cols="12" class="text-center">
          <h2 class="question-read-text" style="margin: auto;">{{ question.title }}</h2>
        </v-col>
        <v-col cols="1">
          <td class="question-read-text">no. {{ question.questionId }}</td>
        </v-col>
        <v-col cols="7">
          <td class="question-read-text">작성자 : {{ question.writer }}</td>
        </v-col>
        <v-col cols="3">
          <td class="question-read-text">등록일자 : {{ question.createdAt }}</td>
        </v-col>
        <v-col cols="1">
          <td>[{{ question.isAnswerComplete ? '완료' : '대기'}}]</td>
        </v-col>
        <v-col cols="12">
          <div class="read-line"/>
        </v-col>
        <v-col cols="12">
          <div id="viewer" class="qa-viewer"></div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import "@/assets/css/editor-custom-style.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@/assets/css/help/questionRead.css";
export default {
  name: "QuestionReadForm",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  watch: {
    question(newValue) {
      if(this.viewer) {
        this.viewer.setMarkdown(newValue.contents)
      }
    }
  },
  data() {
    return {
      viewer: null,
    };
  },
  mounted() {
    this.viewer = new Viewer({
      el: document.querySelector("#viewer"),
      height: "500px",
      initialValue: this.question.contents,
    });
  },
};
</script>

<style>

</style>
