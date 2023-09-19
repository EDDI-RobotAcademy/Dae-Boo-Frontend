<template>
    <h2 class="managerAnswerTitle">A. 관리자 답변</h2>
    <div class="managerAnswerBox">
        <div class="answerText">
            {{ answer.content }}
        </div>
    </div>
</template>

<script>
const QuestionBoardModule = 'QuestionBoardModule';
import '@/assets/css/management/managementAnswerForm.css';
import { mapActions, mapState } from 'vuex';

export default {
    props: {
        questBoard: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState(QuestionBoardModule, ['answer', 'questBoard'])
    },
    methods: {
        ...mapActions(QuestionBoardModule, [
            'requestManagementDetailQuestionAnswerToSpring'
        ]),
    },
    async created() {
        // alert(" 게시글 번호: " + this.questBoard.questionId);
        const questionId = this.questBoard.questionId;
        await this.requestManagementDetailQuestionAnswerToSpring(questionId);
    },
}
</script>

<style></style>