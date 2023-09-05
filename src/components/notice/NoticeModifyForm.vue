<template>
    <v-container class="notice-modify-container">
      <form @submit.prevent="onSubmit">
        <div class="notice-read-mr">
          <v-row align="center" justify="left">
            <v-col cols="12">
              <v-text-field
                label="제목"
                variant="outlined"
                class="notice-register-body"
                v-model="title"
              />
            </v-col>
            <v-col cols="1">
              <td class="notice-read-text">no. {{ notice.noticeId }}</td>
            </v-col>
            <v-col cols="8">
              <td class="notice-read-text">작성자 :  {{ notice.writer }}</td>
            </v-col>
            <v-col cols="3">
              <td class="notice-read-text">등록일자 : {{ notice.createDate }}</td>
            </v-col>
            <v-col cols="12">
              <span class="line" />
            </v-col>
            <v-col cols="12">
              <div id="editor" class="editor"></div>
            </v-col>
          </v-row>
        </div>
        <div>
          <router-link
            :to="{
              name: 'NoticeReadPage',
              params: { noticeId: notice.noticeId },
            }"
            
          >수정 취소</router-link>
          <button @click="onDelete" type="button" class="notice-button" style="color: white;">삭제</button>
          <button @click="onSubmit" type="button" class="notice-button" style="color: white;">수정 완료</button>
        </div>
      </form>
    </v-container>
  </template>
  
  <script>
  import Editor from "@toast-ui/editor";
  import "@/assets/css/editor-custom-style.css";
  import "@/assets/css/notice/noticeModify.css";
  import "@toast-ui/editor/dist/toastui-editor.css";
  import { mapActions, mapState } from "vuex";
  const NoticeModule = 'NoticeModule';
  
  export default {
    props: {
      notice: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        editor: null,
        writer: "관리자",
        title: "",
        content: "",
      };
    },
    computed: {
      ...mapState(NoticeModule, ['notice'])
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
          title: this.title,
          writer: this.writer,
          content: this.content,
        });
      },
      ...mapActions(NoticeModule, ['requestDeleteNoticeToSpring']),
      async onDelete () {
        const noticeId = this.notice.noticeId;
        await this.requestDeleteNoticeToSpring(noticeId);
        await this.$router.push({ name: 'NoticeListPage' });
      }
    },
    created() {
      this.title = this.notice.title;
      this.content = this.notice.content;
      this.writer = this.notice.writer;
    },
  };
  </script>
  
  <style>
  
  </style>
  