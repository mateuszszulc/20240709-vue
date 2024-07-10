import { createRouter, createWebHistory } from 'vue-router'
import AuctionsView from '../views/AuctionsView.vue'
import PromotionsView from '../views/PromotionsView.vue'

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
    {
      path: '/promotions',
      name: 'promotions',
      component: PromotionsView
    },
    {
      path: '/advices',
      name: 'advices',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdvicesView.vue')
    }
  ]
})

export default router
