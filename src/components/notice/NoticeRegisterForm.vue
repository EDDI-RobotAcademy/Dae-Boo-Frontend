<template>
  <v-container class="notice-register-container">
    <form @submit.prevent="onSubmit">
      <v-card class="pd" rounded="30px">
        <div>
          <v-row justify="center" align="center" no-gutters>
            <v-col cols="2">
              <v-text-field
                disabled="true"
                label="작성자"
                variant="outlined"
                class="notice-register-body"
                v-model="writer"
              />
            </v-col>
            <v-col cols="1">
              <span />
            </v-col>
            <v-col cols="9">
              <v-text-field
                label="제목"
                variant="outlined"
                class="notice-register-body"
                v-model="title"
              />
            </v-col>
            <v-col cols="12">
              <div id="editor" class="editor"></div>
            </v-col>
          </v-row>
          <div>
            <button
              type="button"
              @click="onSubmit"
              class="submit-btn"
              style="color: #222"
            >
              작성완료
            </button>
          </div>
          <router-link to="/notice/list-page">
            <v-btn class="submit-btn" color="error">취소</v-btn>
          </router-link>
        </div>
      </v-card>
    </form>
  </v-container>
</template>

<script>
import Editor from "@toast-ui/editor";
import "@/assets/css/editor-custom-style.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@/assets/css/notice/noticeRegister.css";
export default {
  data() {
    return {
      editor: null,
      writer: "관리자",
      title: "",
      content: "",
    };
  },
  mounted() {
    this.editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
      usageStatistics: false,
      initialValue: this.content
    });
  },
  methods: {
    onSubmit() {
      this.content = this.editor.getMarkdown();
      this.$emit("submit", {
        title: this.title,
        writer: this.writer,
        content: this.content,
      });
    },
  },
};
</script>
<style>
</style>
