<template>
  <h1 class="notice-head">공지사항</h1>
  <div>
    <notice-list-form :notices="notices"/>
  </div>
  <div class="notice-register-link">
    <router-link class="create-register" to="/notice/register-page" style="color: black;">생성하기</router-link>
  </div>
</template>

<script>
import NoticeListForm from "@/components/notice/NoticeListForm.vue"
import '@/assets/css/notice/noticeList.css'
import { mapActions, mapState } from 'vuex'
const NoticeModule = 'NoticeModule'
export default {
  components: {
     NoticeListForm 
     },
  computed: {
    ...mapState(NoticeModule, ['notices'])
  },
  mounted() {
    this.requestNoticeListToSpring()
  },
  methods: {
    ...mapActions(NoticeModule, ['requestNoticeListToSpring'])
  }
}
</script>

<style lang="css" scoped>
</style>