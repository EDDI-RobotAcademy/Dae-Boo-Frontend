<template>
    <div class="myPageContainer">
        <div>
            <div id="box1">
                <div class="line box3" @click="pageNumber = 1">
                    <p class="myPageNavi">내 정보 관리</p>
                    <button class="edgeButton mdi mdi-chevron-right"></button>
                </div>
                <div class="line box3" @click="pageNumber = 2">
                    <p class="myPageNavi">게시글 관리</p>
                    <button class="edgeButton mdi mdi-chevron-right"></button>
                </div>
                <div class="line box3" @click="pageNumber = 3">
                    <p class="myPageNavi">내가 찜한 카드</p>
                    <button class="edgeButton mdi mdi-chevron-right"></button>
                </div>
                <div class="line box3" style="padding-bottom: 15px;" @click="pageNumber = 4">
                    <p class="myPageNavi">1:1 문의</p>
                    <button class="edgeButton mdi mdi-chevron-right"></button>
                </div>
            </div>
        </div>
        <div id="box2">
            <div v-if="pageNumber === 1">
                <myPageInfo :myInfo="myInfo" />
            </div>
            <div v-if="pageNumber === 2">
                <myPageBoard :myBoards="myBoards" />
            </div>
            <div v-if="pageNumber === 3">
                <MyPageCard />
            </div>
            <div v-if="pageNumber === 4">
                <MyPageQA />
            </div>
            <div v-if="pageNumber === 5">
                <MyPageInfoModifyForm :myInfo="myInfo" @submit="onSubmit" />
            </div>
        </div>
    </div>
</template>
<script>
import '@/assets/css/myPage/myPage.css'
import myPageInfo from '@/components/myPage/MyPageInfo.vue'
import MyPageInfoModifyForm from '@/components/myPage/MyPageInfoModifyForm.vue'
import myPageBoard from '@/components/myPage/MyPageBoard.vue'
import MyPageCard from '@/components/myPage/MyPageCard.vue'
import MyPageQA from '@/components/myPage/MyPageQA.vue'

import { mapActions, mapState } from "vuex";
const MyPageModule = 'MyPageModule'
const LogInModule = 'LogInModule'

export default {
    data() {
        return {
            pageNumber: 5,
            userId: ''
        }
    },
    components: {
        myPageInfo,
        MyPageInfoModifyForm,
        myPageBoard,
        MyPageCard,
        MyPageQA
    },
    mounted() {
        this.getMyBoardToSpring(this.userId)
    },
    created() {
        this.userId = this.$store.state[MyPageModule].myInfo.userId;
    },
    computed: {
        ...mapState(MyPageModule, ['myBoards', 'myInfo']),
        ...mapState(LogInModule, ['memberInfo'])
    },
    methods: {
        ...mapActions(MyPageModule, ['getMyBoardToSpring', 'requestMyInfoModifyToSpring']),
        // async onSubmit(payload) {
        //     const { nickname, mobile, email, interest1, interest2 } = payload
        //     const userId = this.userId
        //     await this.requestMyInfoModifyToSpring({ nickname, mobile, email, interest1, interest2, userId })
        //     await this.$router.push({ path: `/myPage` });
        // }
        async onSubmit(payload) {
            const { nickname, mobile, email, interest1, interest2 } = payload
            const userId = this.userId
            await this.requestMyInfoModifyToSpring({ nickname, mobile, email, interest1, interest2, userId })
            await this.$router.push({ path: `/myPage` });
        }
    },
}
</script>
<style></style>