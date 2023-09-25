import BillPage from '@/views/purchase/BillPage.vue'
import SuccessPage from '@/views/purchase/SuccessPage.vue'

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
 
]
export default paymentRouter