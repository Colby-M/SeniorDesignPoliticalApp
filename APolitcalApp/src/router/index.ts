import { createMemoryHistory, createRouter } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView
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
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSettingsPage.vue')
    },
    {
      path: '/devTest',
      name: 'devTest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewDevTestPage.vue')
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'not-found',
      redirect: '/'
    }
  ]
})

export default router
