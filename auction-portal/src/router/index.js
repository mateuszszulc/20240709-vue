import { createRouter, createWebHistory } from 'vue-router'
import AuctionsView from '../views/AuctionsView.vue'
import PromotionsView from '../views/PromotionsView.vue'
import AddAuctionView from '../views/AddAuctionView.vue'
import CartView from '../views/CartView.vue'


// zaimportowane z osobnego pliku może byc
const otherModulePaths = [
  {
    path: '/promotions',
    name: 'promotions',
    component: PromotionsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auctions'
    },
    {
      path: '/auctions',
      name: 'auctions',
      component: AuctionsView
    },
    ...otherModulePaths,
    {
      path: '/advices',
      name: 'advices',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdvicesView.vue')
    },
    {
      path: '/add-auction',
      component: AddAuctionView
    },
    {
      path: '/cart',
      component: CartView
    }
  ]
})

export default router
