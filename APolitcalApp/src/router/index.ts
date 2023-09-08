import { createRouter, createWebHistory } from 'vue-router'
import BasePageView from '../views/BasePageView.vue'
import ViewProfilePage from '../views/ViewProfilePage.vue'
import ViewDiscoverPage from '@/views/ViewDiscoverPage.vue'
import ViewReviewPage from '@/views/ViewReviewPage.vue'
import ViewCreatePage from '@/views/ViewCreatePage.vue'
import ViewSettingsPage from '@/views/ViewSettingsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasePageView
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewProfilePage.vue')
    },
    {
      path: '/discover',
      name: 'discover',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewDiscoverPage.vue')
    },
    {
      path: '/review',
      name: 'review',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewReviewPage.vue')
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewCreatePage.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSettingsPage.vue')
    },

  ]
})

export default router
