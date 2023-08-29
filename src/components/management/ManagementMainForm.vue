<template>
    <div class="outer-container">
        <div class="container">
            <div class="topBar">
                <div class="managerInfo">
                    <div class="managerImg"></div>
                    <div class="managerHi">관리자 님 환영합니다.</div>
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
                    <management-board-form v-if="isBoardClick"/>
                    <management-card-form v-if="isCardClick"/>
                    <management-one-by-one-form v-if="isOneByOneClick"/>
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
    methods: {
        accountManagement() {
            this.isAccountClick = true;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = false;
        },
        boardManagement() {
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
            this.isAccountClick = false;
            this.isBoardClick = false;
            this.isCardClick = false;
            this.isOneByOneClick = true;
        }
    },
}

</script>

<style lang="scss" scoped></style>