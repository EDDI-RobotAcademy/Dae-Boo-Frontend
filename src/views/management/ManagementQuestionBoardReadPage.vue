<template>
    <div>
        <h2 style="color: white">1:1 문의 게시판</h2>
        <ManagementQuestionBoardReadForm :questBoard="questBoard"/>
    </div>
</template>

<script>
import ManagementQuestionBoardReadForm from '@/components/management/subManagementForm/ManagementQuestionBoardReadForm.vue'
import { mapActions, mapState } from "vuex";
const QuestionBoardModule = 'QuestionBoardModule';

export default {
    components: {
        ManagementQuestionBoardReadForm
    },
    props: {
        questionId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(QuestionBoardModule, ['questBoard'])
    },
    methods: {
        ...mapActions(QuestionBoardModule, ['requestManagementQuestionBoardReadToSpring']),
    },
    created() {
        this.requestManagementQuestionBoardReadToSpring(this.questionId);
    },
}
</script>

<style lang="scss" scoped></style>