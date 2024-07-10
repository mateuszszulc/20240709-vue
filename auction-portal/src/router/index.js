import { createRouter, createWebHistory } from 'vue-router'
import AuctionsView from '../views/AuctionsView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
