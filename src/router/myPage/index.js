import MyPage from '@/views/mypage/MyPage.vue'
import MyPageModify from '@/views/mypage/MyPageModify.vue'
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
    }
]
export default myPageRouter