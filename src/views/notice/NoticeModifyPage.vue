<template>
    <div>
      <h1 class="notice-head">공지사항</h1>
      <notice-modify-form v-if="notice" :notice="notice" @submit="onSubmit"/>
      <p v-else class="notice-read-text">로딩중 .......</p>
    </div>
  </template>
  
  <script>
  import NoticeModifyForm from '@/components/notice/NoticeModifyForm.vue'
  import { mapActions, mapState } from 'vuex'
  const NoticeModule = "NoticeModule";
  export default {
    components: {
      NoticeModifyForm 
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
      ...mapActions(
        NoticeModule, ['requestNoticeToSpring', 'requestNoticeModifyToSpring']
      ),
      async onSubmit (payload) {
        const { title, content, writer } = payload;
        const noticeId = this.noticeId;
        
        // 하나의 액션으로 호출
        await this.requestNoticeModifyToSpring({ title, content, writer, noticeId });
        
        await this.$router.push({
          name: 'NoticeReadPage',
          params: { noticeId: this.noticeId }
        });
      },
      created () {
        this.requestNoticeToSpring(this.noticeId);
      }
    }
  }
  </script>
  
  <style lang="css" scoped>

  </style>
  