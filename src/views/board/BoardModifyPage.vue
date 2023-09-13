<template>
  <div>
    <v-col cols="2">
    <router-link to="/board/list-page" style="text-decoration-line: none">
      <h1 class="board-head" align="center">게시판</h1>
    </router-link>
    </v-col>
    <board-modify-form v-if="board" :board="board" @submit="onSubmit" />
    <p v-else class="board-read-text">로딩중 .......</p>
  </div>
</template>

<script>
import BoardModifyForm from "@/components/board/BoardModifyForm.vue";
import '@/assets/css/board/boardModify.css'
import { mapState, mapActions } from "vuex";
const BoardModule = "BoardModule";
export default {
  components: {
    BoardModifyForm,
  },
  props: {
    boardId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(BoardModule, ["board"]),
  },
  methods: {
    ...mapActions(BoardModule, ["BoardToSpring", "BoardModifyToSpring"]),
    async onSubmit(payload) {
      const { boardName, content, writer } = payload;
      const boardId = this.boardId;

      await this.BoardModifyToSpring({ boardName, content, writer, boardId });

      await this.$router.push({
        name: "BoardReadPage",
        params: { boardId: this.boardId },
      });
    },
    created() {
      this.BoardToSpring(this.boardId);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>