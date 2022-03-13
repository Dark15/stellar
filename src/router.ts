import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const blogRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('./views/PostList.vue')
  }
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes: blogRoutes
})
