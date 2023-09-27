<template>
    <div style="background-color: white">
        <h2>1:1 문의 게시판</h2>
        <ManagementQuestionBoardReadForm :questBoard="questBoard"/>
        <ManagementQuestionBoardAnswerForm v-if="questBoard.answerComplete === false" @answer-submitted="onAnswerSubmitted" />
        <ManagementAnswerForm  v-else :answer="answer" />
    </div>
</template>

<script>
import ManagementQuestionBoardReadForm from '@/components/management/subManagementForm/ManagementQuestionBoardReadForm.vue'
import ManagementAnswerForm from "@/components/management/subManagementForm/ManagementAnswerForm.vue";
import ManagementQuestionBoardAnswerForm from "@/components/management/subManagementForm/ManagementQuestionBoardAnswerForm.vue"
import { mapActions, mapState } from "vuex";

const QuestionBoardModule = 'QuestionBoardModule';
const MyPageModule = 'MyPageModule';
const LogInModule = 'LogInModule'

export default {
    data() {
        return {
        }
    },
    components: {
        ManagementQuestionBoardAnswerForm,
        ManagementQuestionBoardReadForm,
        ManagementAnswerForm
    },
    props: {
        questionId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(QuestionBoardModule, ['questBoard', 'answer']),
        ...mapState(LogInModule, ['memberInfo']),
        ...mapState(MyPageModule, ['myInfo']),
    },
    methods: {
        ...mapActions(QuestionBoardModule, [
            'requestManagementQuestionBoardReadToSpring',
            'requestManagementDetailQuestionAnswerToSpring',
            'responseManagementQuestionAnswerSaveToSping'
        ]),
        async onAnswerSubmitted(answer) {
            console.log("managementQuestionBoardReadPage(부모): "+ answer)
            const { questionId } = this.questBoard;

            // 서버로 데이터를 전송
            try {
                const payload = {
                    answer,
                    questionId,
                    userId: this.memberInfo.userId
                };
                await this.responseManagementQuestionAnswerSaveToSping(payload);
            } catch (error) {
                console.error('댓글 생성 오류:', error);
            }
        },
    },
    async mounted() {
        await this.requestManagementQuestionBoardReadToSpring(this.questionId);
        await this.requestManagementDetailQuestionAnswerToSpring(this.questionId);
    },

}
</script>

<style lang="scss" scoped></style>