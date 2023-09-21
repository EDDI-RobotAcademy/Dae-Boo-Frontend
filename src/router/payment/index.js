import BillPage from '@/views/purchase/BillPage.vue'
import SuccessPage from '@/views/purchase/SuccessPage.vue'

const paymentRouter = [
    {
      path: '/payment/test',
      name: 'BillPage',
      component: BillPage
    },
    {
      path: '/payment/success',
      name: 'SuccessPage',
      component: SuccessPage
    },
 
]
export default paymentRouter