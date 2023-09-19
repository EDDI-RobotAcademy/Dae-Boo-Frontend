<template>
    <div class="readBack">
        <v-table class="managerQuestionReadTable">
            <tr class="questionSideBar">
                <td class="titleColumn">
                    <span class="bigTitle">Q.</span>
                    <input type="text" :value="questBoard.title" readonly/>
                </td>
            </tr>
            <div class="includeQuestionTopBar">
                <tr class="questionTopBar">
                    <td class="questionColumn">문의 번호</td>
                    <td>
                        <input type="text" :value="questBoard.questionId" readonly/>
                    </td>
                </tr>
                <tr class="questionTopBar">
                    <td class="questionColumn">답변 상태</td>
                    <td>
                        <input type="text" :value="questBoard.answerComplete" readonly/>
                    </td>
                </tr>
                <tr class="questionTopBar">
                    <td class="questionColumn">작성일</td>
                    <td>
                        <input type="text" :value="questBoard.createdAt" readonly/>
                    </td>
                </tr>
                <tr class="questionTopBar">
                    <td class="questionColumn">작성자</td>
                    <td>
                        <input type="text" v-if="questBoard.user.nickname" :value="questBoard.user.nickname" readonly/>
                        <input type="text" v-else value="작성자 정보 없음" readonly/>
                    </td>
                </tr>
            </div>
            <tr class="questionSideBar">
                <td>
                    <textarea cols="140" rows="15" :value="questBoard.contents" readonly/>
                </td>
            </tr>
        </v-table>
        <ManagementQuestionBoardAnswerForm v-if="questBoard.answerComplete === false" @answer-submitted="onAnswerSubmitted" />
        <div v-else>
            <h2 class="managerAnswerTitle">A. 관리자 답변</h2>
            <div class="managerAnswerBox">
                <div class="answerText">
                    {{ answer.content }}
                </div>
            </div>
        </div>
        <!-- <ManagementAnswerForm v-if="questBoard.answerComplete === true" :questBoard="questBoard" /> -->
        <router-link class="returnBtn" :to="{ name: 'ManagementPage' }"> 돌아가기 </router-link>
    </div>
</template>

<script>
const QuestionBoardModule = 'QuestionBoardModule';
const MyPageModule = 'MyPageModule';
import { mapActions, mapState } from 'vuex';

import '@/assets/css/management/managementAnswerForm.css';
import '@/assets/css/management/managementQuestionReadBoard.css';

import ManagementQuestionBoardAnswerForm from "@/components/management/subManagementForm/ManagementQuestionBoardAnswerForm.vue"
// import ManagementAnswerForm from "@/components/management/subManagementForm/ManagementAnswerForm.vue";

export default {
    data() {
        return {
            comments: [], // 댓글 데이터를 저장하는 배열
        }
    },
    name: "ManagementQuestionBoardReadForm",
    props: {
        questBoard: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState(MyPageModule, ['myInfo']),
        ...mapState(QuestionBoardModule, ['answer', 'questBoard'])
    },
    components: {
        ManagementQuestionBoardAnswerForm,
        // ManagementAnswerForm
    },
    async mounted() { // 컴포넌트가 마운트된 후 실행됨
        if (this.questBoard.answerComplete === true) {
            const questionId = this.questBoard.questionId; // questBoard 객체의 id 속성을 추출
            await this.requestManagementDetailQuestionAnswerToSpring(questionId);
        }
    },
    methods: {
        ...mapActions(QuestionBoardModule, [
            'responseManagementQuestionAnswerSaveToSping',
            'requestManagementDetailQuestionAnswerToSpring'
        ]),
        async onAnswerSubmitted(answer) {
            this.comments.push({ text: answer }); // 댓글 배열에 넣었음
            alert("부모 컴포넌트로 이동했습니다: "+ answer)

            const { questionId } = this.questBoard;

            // 서버로 데이터를 전송
            try {
                const payload = {
                answer,
                questionId,
                userId: this.myInfo.userId
                };

                const response = await this.responseManagementQuestionAnswerSaveToSping(payload);

                if (response == false) {
                // 서버에서 응답을 받은 후 댓글을 배열에 추가
                this.comments.push({ text: answer });
                }
            } catch (error) {
                console.error('댓글 생성 오류:', error);
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>