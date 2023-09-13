<template>
    <v-container>
        <comment-list-component :comments="comments" />
    </v-container>
</template>

<script>
import CommentListComponent from '@/components/board/comment/CommentListComponent.vue';
import { mapActions, mapState } from 'vuex'
const CommentModule = 'CommentModule'
export default {
    components: {
        CommentListComponent
    },
    computed: {
        ...mapState(CommentModule, ['comments'])
    },
    mounted() {
      this.requestCommentToSpring()      
    },
    methods: {
        ...mapActions(CommentModule, ['requestCommentToSpring']),
    },
}
</script>

<style lang="scss" scoped>

</style>