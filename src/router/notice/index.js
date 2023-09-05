import NoticeListPage from '@/views/notice/NoticeListPage.vue'
import NoticeRegisterPage from '@/views/notice/NoticeRegisterPage.vue'
import NoticeReadPage from '@/views/notice/NoticeReadPage.vue'
import NoticeModifyPage from '@/views/notice/NoticeModifyPage.vue'
const noticeRouter = [
    {
      path: '/notice/list-page',
      name: 'NoticeListPage',
      component: NoticeListPage
    },
    {
      path: '/notice/register-page',
      name: 'NoticeRegisterPage',
      component: NoticeRegisterPage
    },
    {
      path: '/notice/read-page/:noticeId',
      name: 'NoticeReadPage',
      components: { default: NoticeReadPage },
      props: { default: true },
    },
    {
      path: '/notice/modify-page/:noticeId',
      name: 'NoticeModifyPage',
      components: { default: NoticeModifyPage },
      props: { default: true },
    },
]
export default noticeRouter