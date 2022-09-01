import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/layout/Layout.vue'),
    redirect: '/index',
    children: [
      // 首页
      {
        path: '/index',
        name: 'home',
        component: () => import('../views/index/Index.vue'),
      },
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
  } 
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
