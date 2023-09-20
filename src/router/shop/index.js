import ShopMainPage from '@/views/shop/ShopMainPage.vue'
import ShopReadProductPage from '@/views/shop/ShopReadProductPage.vue'
import ShopRegisterProductPage from '@/views/shop/ShopRegisterProductPage.vue'
import ShopModifyProductPage from '@/views/shop/ShopModifyProductPage.vue'

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
    {
      path: '/shopModifyProductPage/:productId',
      name: 'ShopModifyProductPage',
      components: {
        default: ShopModifyProductPage
      },
      props: {
        default: true
      }
    },
]
export default ShopRouter