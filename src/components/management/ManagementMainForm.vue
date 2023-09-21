<template>
    <div class="outer-container">
        <div>
            <div class="topBar">
                <div class="managerInfo">
                    <div class="managerImg"></div>
                    <div class="managerHi">{{ myInfo ? myInfo.nickname + ' 님 환영합니다.' : '로그인이 필요합니다.' }}</div>
                </div>
                <div class="managerPageCategory">
                    <button @click="accountManagement">회원 관리</button>
                    <button @click="boardManagement">게시물 관리</button>
                    <button @click="cardManagement">카드 관리</button>
                    <button @click="oneByOneManagement">1:1 문의 관리</button>
                </div>
            </div>
            <div class="bottomBar">
                <div class="managementBox">
                    <management-account-form v-if="isAccountClick"/>
                    <management-board-form v-if="isBoardClick" :boards="boards"/>
                    <management-card-form v-if="isCardClick"/>
                    <management-one-by-one-form v-if="isOneByOneClick" :questBoards="questBoards"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/css/management/management.css'
import ManagementAccountForm from './ManagementAccountForm.vue';
import ManagementBoardForm from './ManagementBoardForm.vue';
import ManagementCardForm from './ManagementCardForm.vue';
import ManagementOneByOneForm from './ManagementOneByOneForm.vue';

import { mapActions, mapState } from "vuex";
const BoardModule = "BoardModule";
const QuestionBoardModule = "QuestionBoardModule";
// const LogInModule = 'LogInModule';
const MyPageModule = 'MyPageModule'

export default {
    data() {
        return {
            isAccountClick: false,
            isBoardClick: false,
            isCardClick: false,
            isOneByOneClick: false,
        };
    },
    components: {
        ManagementAccountForm,
        ManagementBoardForm,
        ManagementCardForm,
        ManagementOneByOneForm
    },
    computed: {
        ...mapState(BoardModule, ["boards"]),
        ...mapState(QuestionBoardModule, ["questBoards"]),
        ...mapState(MyPageModule, ['myInfo'])
    },
    // mounted() {
    //     this.requestManagementBoardToSpring();
    //     this.requestManagementQuestionBoardToSpring();
    // },
    methods: {
        ...mapActions(BoardModule,[
            "requestManagementBoardToSpring",
        ]),
        ...mapActions(QuestionBoardModule,[
            'requestManagementQuestionBoardToSpring'
        ]),
        accountManagement() {
            this.isAccountClick = true;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = false;
        },
        boardManagement() {
            this.requestManagementBoardToSpring();
            this.isAccountClick = false;
            this.isBoardClick = true;
            this.isCardClick = false;
            this.isOneByOneClick = false;
        },
        cardManagement() {
            this.isAccountClick = false;
            this.isBoardClick = false;
            this.isCardClick = true;
            this.isOneByOneClick = false;
        },
        oneByOneManagement() {
            this.requestManagementQuestionBoardToSpring();
            this.isAccountClick = false;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = true;
        }
    },
}

</script>

<style lang="scss" scoped></style>