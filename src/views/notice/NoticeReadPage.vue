<template>
    <div>
        <h1 class="notice-head">공지사항</h1>
        <div style="border: solid 1px #444; margin-bottom: 2rem;">
            <NoticeReadForm v-if="notice" :notice="notice" />
            <div>
                <button v-if="memberInfo && memberInfo.role === 'MANAGER'" class="notice-button"
                    @click="noticeModifyRouter(notice.noticeId)" style="margin-bottom: 1rem;">수정하기</button>
            </div>
        </div>
    </div>
</template>

<script>
import NoticeReadForm from '@/components/notice/NoticeReadForm.vue';
import { mapActions, mapState } from 'vuex';
const NoticeModule = 'NoticeModule'
const LogInModule = 'LogInModule'
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
        ...mapState(NoticeModule, ['notice']),
        ...mapState(LogInModule, ['memberInfo']),
    },
    mounted() {
        this.requestNoticeToSpring(this.noticeId);
    },
    methods: {
        ...mapActions(NoticeModule, ['requestNoticeToSpring']),
        noticeModifyRouter(noticeId) {
            this.$router.push({ path: `/notice/modify-page/${noticeId}` })
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

<style lang="css"></style>
