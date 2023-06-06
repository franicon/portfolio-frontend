import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/pages/index.vue'),
      children: [
        {
          path: 'about',
          name: 'about',
          component: () => import('../components/section/AboutSection.vue')
        },
      ]
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
})

export default router
