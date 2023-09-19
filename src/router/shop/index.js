import ShopMainPage from '@/views/shop/ShopMainPage.vue'
import ShopReadProductPage from '@/views/shop/ShopReadProductPage.vue'
import ShopRegisterProductPage from '@/views/shop/ShopRegisterProductPage.vue'

const ShopRouter = [
    {
      path: '/shopMainpage',
      name: 'ShopMainPage',
      component: ShopMainPage
    },
    {
      path: '/shopReadproductPage/:productId',
      name: 'ShopReadProductPage',
      components: {
        default: ShopReadProductPage
      },
      props: {
        default: true
      }
    },
    {
      path: '/shopRegisterProductPage',
      name: 'ShopRegisterProductPage',
      component: ShopRegisterProductPage
    },
]
export default ShopRouter