import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'
import SearchPage from '@/pages/SearchPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/search/:searchOption', component: SearchPage },
    { path: '/:catchAll(.*)*', component: NotFound },
  ],
})

export default router
