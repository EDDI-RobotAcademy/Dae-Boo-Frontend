<template>
  <v-container class="question-mt">
    <div>
      <form>
        <v-card>
          <div>
            <v-row justify="center" align="center" no-gutters>
              <v-col cols="12">
                <v-text-field
                  label="제목"
                  variant="outlined"
                  v-model="title"
                  class="question-title-mr"
                />
              </v-col>
              <v-col cols="12">
                <div id="editor" class="editor-mr"></div>
              </v-col>
            </v-row>
            <div>
              <button
                type="button"
                @click="onSubmit"
                color="primary"
                class="question-button-mr"
                style="color: #222;"
              >
                작성완료
              </button>
              <router-link to="/myPage">
                <v-btn color="error" class="question-cencel-mr">취소</v-btn>
              </router-link>
            </div>
          </div>
        </v-card>
      </form>
    </div>
  </v-container>
</template>

<script>
import Editor from "@toast-ui/editor";
import "@/assets/css/editor-custom-style.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@/assets/css/help/question.css";
import { mapState } from 'vuex';
const LogInModule = 'LogInModule'

export default {
  data() {
    return {
      editor: null,
      title: "",
    };
  },
  mounted() {
    this.editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical", 
      usageStatistics: false,
    });
  },
  computed: {
    ...mapState(LogInModule,['memberInfo'])
  },
  methods: {
    onSubmit() {
      const contents = this.editor.getMarkdown();
      this.$emit("submit", {
        title: this.title,
        contents: contents,
        userId: (this.memberInfo ? this.memberInfo.userId : null), 
      });
    },
  },
};
</script>

<style lang="css"></style>
