<template>
    <div class="outer-container">
        <div>
            <div class="topBar">
                <div class="managerInfo">
                    <div class="managerImg"></div>
                    <div class="managerHi">{{ memberInfo ? memberInfo.nickname + ' 님 환영합니다.' : '로그인이 필요합니다.' }}</div>
                </div>
                <div class="managerPageCategory">
                    <button @click="accountManagement">회원 관리</button>
                    <button @click="boardManagement">게시물 관리</button>
                    <button @click="cardManagement">카드 관리</button>
                    <button @click="oneByOneManagement">1:1 문의 관리</button>
                    <button @click="purchaseManage">판매 내역 관리</button>
                    <button @click="paymentCancelManage">환불 관리</button>
                </div>
            </div>
            <div class="bottomBar">
                <div class="managementBox">
                    <management-account-form v-if="isAccountClick"/>
                    <management-board-form v-if="isBoardClick" :boards="boards"/>
                    <management-card-form v-if="isCardClick"/>
                    <management-one-by-one-form v-if="isOneByOneClick" :questBoards="questBoards"/>
                    <management-payment-cancel-form v-if="isPaymentCancelClick"/>
                    <management-purchase-list-form v-if="isPurchaseClick"/>
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
import ManagementPaymentCancelForm from './ManagementPaymentCancelForm.vue';
import ManagementPurchaseListForm from './ManagementPurchaseListForm.vue';
import { mapActions, mapState } from "vuex";
const BoardModule = "BoardModule";
const QuestionBoardModule = "QuestionBoardModule";
const MyPageModule = 'MyPageModule'
const LogInModule = 'LogInModule'

export default {
    data() {
        return {
            isAccountClick: false,
            isBoardClick: false,
            isCardClick: false,
            isOneByOneClick: false,
            isPurchaseClick:false,
            isPaymentCancelClick:false,
        };
    },
    components: {
        ManagementAccountForm,
        ManagementBoardForm,
        ManagementCardForm,
        ManagementOneByOneForm,
        ManagementPaymentCancelForm,
        ManagementPurchaseListForm
    },
    computed: {
        ...mapState(BoardModule, ["boards"]),
        ...mapState(QuestionBoardModule, ["questBoards"]),
        ...mapState(MyPageModule, ['myInfo']),
        ...mapState(LogInModule, ['memberInfo'])
    },
    created() {
        this.getUserIngoToSpring();
    },
    methods: {
        ...mapActions(BoardModule,[
            "requestManagementBoardToSpring",
        ]),
        ...mapActions(QuestionBoardModule,[
            'requestManagementQuestionBoardToSpring'
        ]),
        ...mapActions(LogInModule, [
            'getUserIngoToSpring'
        ]),
        accountManagement() {
            this.isAccountClick = true;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = false;
            this.isPurchaseClick = false;
            this.isPaymentCancelClick =false;
        },
        boardManagement() {
            this.requestManagementBoardToSpring();
            this.isAccountClick = false;
            this.isBoardClick = true;
            this.isCardClick = false;
            this.isOneByOneClick = false;
            this.isPurchaseClick = false;
            this.isPaymentCancelClick =false;
        },
        cardManagement() {
            this.isAccountClick = false;
            this.isBoardClick = false;
            this.isCardClick = true;
            this.isOneByOneClick = false;
            this.isPurchaseClick = false;
            this.isPaymentCancelClick =false;
        },
        oneByOneManagement() {
            this.requestManagementQuestionBoardToSpring();
            this.isAccountClick = false;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = true;
            this.isPurchaseClick = false;
            this.isPaymentCancelClick =false;
        },
        paymentCancelManage(){
            this.isAccountClick = false;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = false;
            this.isPurchaseClick = false;
            this.isPaymentCancelClick =true;
        },
        purchaseManage(){
            this.isAccountClick = false;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = false;
            this.isPurchaseClick = true;
            this.isPaymentCancelClick =false;
        }
    },
}

</script>

<style lang="scss" scoped></style>