import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /**Always scroll to top */
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" }
  },

  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/info/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/info/ProjectsView.vue')
    },
    {
      path: '/workstation',
      name: 'workstation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/info/WorkstationView.vue')
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/info/HobbiesView.vue')
    },
  ]
})

export default router
