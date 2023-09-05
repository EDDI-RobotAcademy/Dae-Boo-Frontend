<template>
  <div>
    <h1 class="notice-head">공지사항</h1>
    <notice-register-form @submit="onSubmit" />
  </div>
</template>
  
  <script>
import NoticeRegisterForm from "@/components/notice/NoticeRegisterForm.vue";
import { mapActions } from "vuex";
const NoticeModule = "NoticeModule";

export default {
  components: {
    NoticeRegisterForm,
  },
  methods: {
    ...mapActions(NoticeModule, ["requestCreateNoticeToSpring"]),

    async onSubmit(payload) {
        try {
            const notice = await this.requestCreateNoticeToSpring(payload);
            console.log('typeof(notice): ' + typeof(notice))
            console.log('noticeId: ' + JSON.stringify(notice))
            this.$router.push({
              name: "NoticeReadPage",
              params: { noticeId: notice.noticeId },
            });
        } catch (error) {
            console.error(error);
        }
    },
},

};
</script>
  
  <style lang="css" scoped>

</style>
  