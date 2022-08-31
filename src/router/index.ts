import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/layout/Layout.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'home',
        component: () => import('../views/index/Index.vue'),
      }
    ]
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
