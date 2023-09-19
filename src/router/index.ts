import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    return [
      ...setupLayouts(routes),
      {
        path: '/xxx/yyy/xxx',
        component: () => import('@/pages/xxx/yyy.vue')
      },
      {
        path: '/zhuang/haixin/xin',
        component: () => import('@/pages/zhx.vue')
      }
    ]
  }
})

export default router
