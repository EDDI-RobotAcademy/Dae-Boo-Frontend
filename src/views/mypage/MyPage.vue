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
                    <p class="myPageNavi">구매 내역</p>
                    <button class="edgeButton mdi mdi-chevron-right"></button>
                </div>
                <div class="line box3" style="padding-bottom: 15px;" @click="pageNumber = 5">
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
                <myPageBoard :myBoards="myBoards" :myComments="myComments" />
            </div>
            <div v-if="pageNumber === 3">
                <MyPageCard />
            </div>
            <div v-if="pageNumber === 4">
                <MyPagePurchase />
            </div>
            <div v-if="pageNumber === 5">
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
import MyPagePurchase from '@/components/myPage/MyPagePurchase.vue'
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
        MyPageQA,
        MyPagePurchase
    },
    mounted() {
        // 데이터를 가져오는 로직을 이동합니다.
        this.loadData();
    },
    created() {
        this.userId = this.$store.state[LogInModule].memberInfo.userId;
    },
    computed: {
        ...mapState(MyPageModule, ['myBoards', 'myComments', 'myInfo']),
        ...mapState(LogInModule, ['memberInfo'])
    },
    methods: {
        ...mapActions(MyPageModule, ['getMyBoardToSpring', 'getMyInfoToSpring', 'getMyCommentsToSprong']),
        loadData() {
            // this.userId가 설정된 이후에 데이터를 가져옵니다.
            if (this.userId) {
                this.getMyBoardToSpring(this.userId);
                this.getMyInfoToSpring(this.userId);
                this.getMyCommentsToSprong(this.userId);
            }
        }
    },
}
</script>
<style></style>