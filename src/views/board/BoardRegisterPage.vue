<template>
  <div>
    <v-col cols="2">
    <router-link to="/board/list-page" style="text-decoration-line: none">
      <h1 class="board-head" align="center">게시판</h1>
    </router-link>
  </v-col>
    <board-register-form @submit="onSubmit"/>
  </div>
</template>

<script>
import BoardRegisterForm from "@/components/board/BoardRegisterForm.vue";
import { mapActions } from "vuex";
const BoardModule = "BoardModule";
export default {
  components: {
    BoardRegisterForm,
  },
  methods: {
    ...mapActions(BoardModule, ["CreateBoardToSpring"]),
    async onSubmit(payload) {
      try {
        const board = await this.CreateBoardToSpring(payload);
        console.log(payload.category);
        console.log(board)
        console.log("typeof(board): " + typeof board);
        console.log("boardId: " + JSON.stringify(board));
        this.$router.push({
          name: "BoardReadPage",
          params: { boardId: board.boardId },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>