<template>
    <v-container>
        <comment-list-component :comments="comments" :boardId="boardId"/>
    </v-container>
</template>

<script>
import CommentListComponent from '@/components/board/comment/CommentListComponent.vue';
import { mapActions, mapState } from 'vuex'
const CommentModule = 'CommentModule'
export default {
      props: {
    boardId: {
      type: String,
      required: true,
    },
  },
    components: {
        CommentListComponent
    },
    computed: {
        ...mapState(CommentModule, ['comments'])
    },
    mounted() {
      this.requestCommentToSpring(this.boardId)      
    },
    methods: {
        ...mapActions(CommentModule, ['requestCommentToSpring']),
    },
}
</script>

<style lang="scss" scoped>

</style>