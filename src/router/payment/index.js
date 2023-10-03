import BillPage from '@/views/purchase/BillPage.vue'
import SuccessPage from '@/views/purchase/SuccessPage.vue'
import PaymentCancelPage from '@/views/purchase/PaymentCancelPage.vue'
import PaymentFailPage from '@/views/purchase/PaymentFailPage.vue'

const paymentRouter = [
    {
      path: '/payment/bill/:productId',
      name: 'BillPage',
      components: {
        default: BillPage
      },
      props: {
        default: true
      }
    },
  
    {
      path: '/payment/success',
      name: 'SuccessPage',
      component: SuccessPage
    },
    {
      path: '/payment/cancel',
      name: 'PaymentCancelPage',
      component: PaymentCancelPage
    },
    {
      path: '/payment/fail',
      name: 'PaymentFailPage',
      component: PaymentFailPage
    },
 
]
export default paymentRouter