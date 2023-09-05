<template>
    <h1 class="notice-head">공지사항</h1>
    <div>
        <NoticeReadForm v-if="notice" :notice="notice"/>
        <div>
            <button class="notice-button" @click="noticeModifyRouter(notice.noticeId)">수정하기</button>
        </div>
    </div>
</template>

<script>
import NoticeReadForm from '@/components/notice/NoticeReadForm.vue';
import { mapActions, mapState } from 'vuex';
const NoticeModule = 'NoticeModule'
import "@/assets/css/notice/noticeRead.css";
import router from '@/router';
export default {
    components: {
        NoticeReadForm 
    },
    props: {
        noticeId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(NoticeModule, ['notice'])
    },
    methods: {
        ...mapActions(NoticeModule, ['requestNoticeToSpring']),
        noticeModifyRouter(noticeId) {
            this.$router.push({path: `/notice/modify-page/${noticeId}`})
        },
        page(){
            router.go(0)
        }
    },
    created() {
        this.requestNoticeToSpring(this.noticeId)
    },
//     watch: {
//     "$route.params.noticeId": {
//       immediate: true, // 초기에도 호출
//       handler(newId) {
//         // noticeId가 변경될 때마다 호출됨
//         this.requestNoticeToSpring(newId); // 예시로 requestNoticeToSpring을 호출
//       },
//     },
//   },
}
</script>

<style lang="css">
</style>