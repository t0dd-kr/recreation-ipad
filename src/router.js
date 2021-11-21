import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "index" */ '@/pages/Index.vue'),
    },
    {
      path: '/songs',
      component: () => import(/* webpackChunkName: "index" */ '@/pages/Songs.vue'),
    },
    {
      path: '/bodyquizs',
      component: () => import(/* webpackChunkName: "index" */ '@/pages/BodyQuizs.vue'),
    },
    {
      path: '/letters',
      component: () => import(/* webpackChunkName: "index" */ '@/pages/Letters.vue'),
    },
    {
      path: '/people',
      component: () => import(/* webpackChunkName: "index" */ '@/pages/People.vue'),
    }
  ]
})