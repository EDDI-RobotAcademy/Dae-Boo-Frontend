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
                        <input type="text" v-if="questBoard.user" :value="questBoard.user.nickname" readonly/>
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
        <button class="managementBoardReadBackBtn">
            <router-link class="returnBtn" :to="{ name: 'ManagementPage' }" style="text-decoration: none; color: white;"> 돌아가기 </router-link>
        </button>
    </div>
</template>

<script>
const QuestionBoardModule = 'QuestionBoardModule';
const MyPageModule = 'MyPageModule';
import { mapActions, mapState } from 'vuex';

import '@/assets/css/management/managementAnswerForm.css';
import '@/assets/css/management/managementQuestionReadBoard.css';


export default {
    name: "ManagementQuestionBoardReadForm",
    props: {
        questBoard: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState(MyPageModule, ['myInfo']),
        ...mapState(QuestionBoardModule, ['answer'])
    },
    methods: {
        ...mapActions(QuestionBoardModule, [
            'responseManagementQuestionAnswerSaveToSping',
        ]),
    },
}
</script>

<style lang="scss" scoped></style>