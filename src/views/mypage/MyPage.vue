<template>
    <div class="container">
        <div class="box" id="box1">
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
        <div class="box" id="box2">
            <div v-show="pageNumber === 1">
                <myPageInfo />
            </div>
            <div v-show="pageNumber === 2">
                <myPageBoard />
            </div>
            <div v-show="pageNumber === 3">
                <MyPageCard />
            </div>
            <div v-show="pageNumber === 4">
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
export default {
    data() {
        return {
            pageNumber: 1,
        }
    },
    components: {
        myPageInfo,
        myPageBoard,
        MyPageCard,
        MyPageQA
    }
}
</script>
<style></style>