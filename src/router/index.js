import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/car',
      name: 'car',
      component: () => import('../views/Car.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('../views/Customer.vue')
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: () => import('../views/Rentals.vue')
    }
  ]
})

export default router