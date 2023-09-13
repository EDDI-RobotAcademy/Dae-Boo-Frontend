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
        </div>
    </div>
</template>
<script>
import '@/assets/css/myPage/myPage.css'
import myPageInfo from '@/components/myPage/MyPageInfo.vue'
import myPageBoard from '@/components/myPage/MyPageBoard.vue'
import MyPageCard from '@/components/myPage/MyPageCard.vue'
import MyPageQA from '@/components/myPage/MyPageQA.vue'

import { mapActions, mapState } from "vuex";
const MyPageModule = 'MyPageModule'
const LogInModule = 'LogInModule'

export default {
    data() {
        return {
            pageNumber: 1,
            userId: ''
        }
    },
    components: {
        myPageInfo,
        myPageBoard,
        MyPageCard,
        MyPageQA
    },
    async mounted() {
        await this.getMyBoardToSpring(this.userId)
    },
    created() {
        this.userId = this.$store.state[LogInModule].userId;
        this.getMyInfoToSpring(this.userId)
    },
    computed: {
        ...mapState(MyPageModule, ['myBoards', 'myInfo']),
        ...mapState(LogInModule, ['userId'])
    },
    methods: {
        ...mapActions(MyPageModule, ['getMyBoardToSpring', 'getMyInfoToSpring']),
    },
}
</script>
<style></style>