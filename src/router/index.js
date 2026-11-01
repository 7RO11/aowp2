import AboutPage from '@/pages/AboutPage.vue'
import NotFound from '@/pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/about', component: AboutPage },
    { path: '/:catchAll(.*)*', component: NotFound },
  ],
})

export default router
