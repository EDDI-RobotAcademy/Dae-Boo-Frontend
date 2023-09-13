import FAQPage from '@/views/help/FAQPage.vue'
import CautionPage from '@/views/help/CautionPage.vue'
import DirectionsPage from '@/views/help/DirectionsPage'
import QuestionPage from '@/views/help/QuestionPage.vue'
import QuestionReadPage from '@/views/help/QuestionReadPage.vue'
const helpRouter = [
    {
        path: '/help/faq',
        name: 'FAQPage',
        component: FAQPage
      },
      {
        path: '/help/caution',
        name: 'CautionPage',
        component: CautionPage
      },
      {
        path: '/help/directions',
        name: 'DirectionsPage',
        component: DirectionsPage
      },
      {
        path: '/help/question',
        name: 'QuestionPage',
        component: QuestionPage
      },
      {
        path: '/help/question/:questionId',
        name: 'QuestionReadPage',
        components: { default: QuestionReadPage },
        props: { default: true },
      },
]
export default helpRouter