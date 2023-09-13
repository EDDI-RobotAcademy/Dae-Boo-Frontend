import BoardListPage from '@/views/board/BoardListPage.vue'
import BoardRegisterPage from '@/views/board/BoardRegisterPage.vue'
import BoardReadPage from '@/views/board/BoardReadPage.vue'
import BoardModifyPage from '@/views/board/BoardModifyPage.vue'
const boardRouter = [
    {
      path: '/board/list-page',
      name: 'BoardListPage',
      component: BoardListPage
    },
    {
      path: '/board/register-page',
      name: 'BoardRegisterPage',
      component: BoardRegisterPage
    },
    {
      path: '/board/read-page/:boardId',
      name: 'BoardReadPage',
      components: { default: BoardReadPage },
      props: { default: true },
    },
    {
      path: '/board/modify-page/:boardId',
      name: 'BoardModifyPage',
      components: { default: BoardModifyPage },
      props: { default: true },
    },
]
export default boardRouter