import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/HomeLayout.vue'),
      children: [{ path: '', component: () => import('../pages/HomePage.vue') }]
    },
    {
      path: '/create',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '', component: () => import('../pages/CreatePage.vue') }]
    },
    {
      path: '/details/:id',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '', component: () => import('../pages/DetailsPage.vue') }],
      props: true
    },
    {
      path: '/edit/:id',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '', component: () => import('../pages/EditPage.vue') }],
      props: true
    },
    {
      path: '/users',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '', component: () => import('../pages/UsersPage.vue') }]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '', component: () => import('../pages/NotFoundPage.vue') }]
    }
  ]
})

export default router
