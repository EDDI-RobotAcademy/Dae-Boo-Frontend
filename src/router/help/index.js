import FAQPage from '@/views/help/FAQPage.vue'
import CautionPage from '@/views/help/CautionPage.vue'
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
]
export default helpRouter