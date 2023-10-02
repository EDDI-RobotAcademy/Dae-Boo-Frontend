<template>
  <v-container class="notice-read-container">
    <div class="notice-read-mr">
      <v-row align="center" justify="left">
        <v-col cols="12">
          <td><h2 class="notice-read-text"> 제목 : [공지] {{ notice.title }}</h2></td>
        </v-col>
        <v-col cols="1">
          <td class="notice-read-text">no. {{ notice.noticeId }}</td>
        </v-col>
        <v-col cols="8">
          <td class="notice-read-text">작성자 : {{ notice.writer }}</td>
        </v-col>
        <v-col cols="3">
          <td class="notice-read-text">등록일자 : {{ notice.createDate }}</td>
        </v-col>
        <v-col cols="12">
          <span class="line2"/>
        </v-col>
        <v-col cols="12">
          <div id="viewer"  style="min-height: 300px; border: 1px solid #adadad;"></div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import "@/assets/css/editor-custom-style.css";
import "@/assets/css/notice/noticeRead.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
export default {
  name: "NoticeReadForm",
  props: {
    notice: {
      type: Object,
      required: true,
    },
  },
  watch: {
    notice(newValue) {
      if(this.viewer) {
        this.viewer.setMarkdown(newValue.content)
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
      initialValue: this.notice.content
    });
  },
};
</script>

<style lang="css" scoped>

</style>
