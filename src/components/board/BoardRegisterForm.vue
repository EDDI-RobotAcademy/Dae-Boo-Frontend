<template>
  <v-container class="board-register-container">
    <form @submit.prevent="onSubmit">
      <v-card class="pd" rounded="30px">
        <div>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="2">
              <v-text-field
                disabled="true"
                label="작성자"
                value="tester"
                variant="outlined"
                class="board-register-body"
                v-model="writer"
              >
              </v-text-field>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="7">
              <v-text-field
                label="제목"
                variant="outlined"
                class="board-register-body"
                v-model="boardName"
              />
            </v-col>
            <v-col cols="2">
              <v-select
               class="board-register-body"
                label="Select"
                :items="[
                  '전체',
                  '일상',
                  '후기',
                ]"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <div id="editor" class="editor"></div>
            </v-col>
          </v-row>
          <div>
            <v-row>
            <v-col cols="11">
            <router-link to="/board/list-page">
              <v-btn class="submit-btn" color="error">취소</v-btn>
            </router-link>
          </v-col>
          <v-col cols="1">
            <button
              type="button"
              @click="onSubmit"
              class="submit-btn"
              style="color: white"
            >
              작성완료
            </button>
          </v-col>
        </v-row>
          </div>
        </div>
      </v-card>
    </form>
  </v-container>
</template>

<script>
import Editor from "@toast-ui/editor";
import "@/assets/css/editor-custom-style.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import '@/assets/css/board/boardRegister.css'

export default {
  data() {
    return {
      editor: null,
      boardName: "",
      content: "",
      writer:"test",
    };
  },
  mounted() {
    this.editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
      usageStatistics: false,
      initialValue: this.content,
      theme: "dark",
    });
  },
  methods: {
    onSubmit() {
      this.content = this.editor.getMarkdown();
      this.$emit("submit", {
        boardName: this.boardName,
        writer: this.writer,
        content: this.content,
      });
    },
  },
};
</script>

<style>

</style>
  