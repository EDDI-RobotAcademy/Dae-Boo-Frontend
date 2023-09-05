import MyPage from '@/views/mypage/MyPage.vue'
import MyPageModify from '@/views/mypage/MyPageModify.vue'
import MyPageBoardReadPage from '@/views/mypage/MyPageBoardReadPage.vue'
const myPageRouter = [
    {
        path: '/myPage',
        name: 'MyPage',
        component: MyPage
    },
    {
        path: '/myPageModify',
        name: 'MyPageModify',
        component: MyPageModify
    },
    {
        path: '/myPageBoardReadPage/:boardId',
        name: 'MyPageBoardReadPage',
        components: {
            default: MyPageBoardReadPage
        },
        props: {
            default: true
        }
    }
]
export default myPageRouter