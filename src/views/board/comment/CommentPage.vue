<template>
    <v-container>
        <comment-component @submit="onSubmit" />
    </v-container>
</template>

<script>
import CommentComponent from '@/components/board/comment/CommentComponent.vue';
import { mapActions } from 'vuex';
const CommentModule = 'CommentModule'
export default {
    components: {
        CommentComponent,
    },
    methods: {
        ...mapActions(CommentModule, ['requestCreateCommentToSpring']),
        onSubmit(payload) {
            console.log(payload)
            console.log(payload.userId)
            console.log(payload.boardId)
            this.comment = this.requestCreateCommentToSpring(payload)
            window.location.reload();
        },        
    },
}
</script>

<style lang="scss" scoped></style>