<template>
    <v-container>
        <comment-component @submit="onSubmit"/>
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
            this.comment = this.requestCreateCommentToSpring(payload)
        },
    },
}
</script>

<style lang="scss" scoped></style>