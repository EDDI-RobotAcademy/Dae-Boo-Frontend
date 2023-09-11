<template>
    <div>
        <h1 class="notice-head">공지사항</h1>
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
    mounted() {
        this.requestNoticeToSpring(this.noticeId);
    },
    methods: {
        ...mapActions(NoticeModule, ['requestNoticeToSpring']),
        noticeModifyRouter(noticeId) {
            this.$router.push({path: `/notice/modify-page/${noticeId}`})
        },
    },
    beforeRouteUpdate(to, from, next) {
        if (to.params.noticeId !== from.params.noticeId) {
            this.$nextTick(() => {
                this.requestNoticeToSpring(to.params.noticeId);
            });
        }
        next();
    }

}
</script>

<style lang="css">
</style>