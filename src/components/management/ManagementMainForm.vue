<template>
    <div class="outer-container">
        <div class="main-container">

            <div class="managerInfomationTopBar">
                <div class="testInfo"></div> <!-- 꼭 있어야 함 -->
                <div class="managerInfo">
                    <div class="managerInfoBox1">
                        <div class="managerImg"></div>
                        <div class="managerHi">{{ memberInfo ?'관리자 '+ memberInfo.nickname + ' 님 환영합니다.' : '로그인이 필요합니다.' }}</div>
                    </div>
                    <div class="managerInfoLine"></div>
                    <div class="mamagerInfoBox2">
                        <div>회원 수</div>
                        <div>{{ this.memberNum }} 명</div>
                    </div>
                    <div class="managerInfoLine"></div>
                    <div class="mamagerInfoBox3">
                        <div>미 응답 문의</div>
                        <div>{{ this.noResponseNum }} 개</div>
                    </div>
                    <div class="managerInfoLine"></div>
                    <div class="mamagerInfoBox4">
                        <div>총 판매량</div>
                        <div>{{ this.totalSalesNum }} 개</div>
                    </div>
                    <div class="managerInfoLine"></div>
                    <div class="mamagerInfoBox5">
                        <div>환불 신청</div>
                        <div>{{ this.applyRefundNum }} 개</div>
                    </div>
                </div>
            </div>

            <div class="categoryAndView">
                <div class="side-bar">
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
const MyPageModule = 'MyPageModule';
const LogInModule = 'LogInModule';
const ManagementModule = 'ManagementModule';

export default {
    data() {
        return {
            isAccountClick: false,
            isBoardClick: false,
            isCardClick: false,
            isOneByOneClick: false,
            isPurchaseClick:false,
            isPaymentCancelClick:false,
            memberNum: 0,
            noResponseNum: 0,
            totalSalesNum: 0,
            applyRefundNum: 0,
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
        this.memberNum = this.requestMemberNumberToSpring(); // 회원 수 가져오기
        this.noResponseNum =  this.requestNoResponseNumberToSpring(); // 미응답 수 가져오기
        this.totalSalesNum =  this.requestTotalSalesToSPring(); // 총 판매량 가져오기
        this.applyRefundNum =  this.requestApplyRefundToSpring(); // 환불 신청 개수 가져오기
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
        ...mapActions(ManagementModule, [
            'requestMemberNumberToSpring',
            'requestNoResponseNumberToSpring',
            'requestTotalSalesToSPring',
            'requestApplyRefundToSpring'
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