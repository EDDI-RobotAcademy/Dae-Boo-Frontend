import ManagementPage from '@/views/management/ManagementPage.vue'
import ManagementBoardReadPage from '@/views/management/ManagementBoardReadPage.vue'
import ManagementAccountInfoForm from '@/components/management/ManagementAccountInfoForm.vue'
import ManagementQuestionBoardReadPage from '@/views/management/ManagementQuestionBoardReadPage.vue'

const ManagementRouter = [
    {
      path: '/manageMentPage',
      name: 'ManagementPage',
      component: ManagementPage
    },
    {
      path: '/ManagementBoardReadPage/:boardId',
      name: 'ManagementBoardReadPage',
      components: {
        default: ManagementBoardReadPage
      },
      props: {
        default: true
      },
    },
    { 
      path: '/ManagementAccountInfoForm/:id',
      name: 'ManagementAccountInfoForm',
      components: {
        default: ManagementAccountInfoForm
      },
      props:{
        default:true
      }
    },
    {
      path: '/ManagementQuestionBoardReadPage/:questionId',
      name: 'ManagementQuestionBoardReadPage',
      components: {
        default: ManagementQuestionBoardReadPage
      },
      props: {
        default: true
      },
    },
]
export default ManagementRouter