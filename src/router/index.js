import AboutPage from '@/pages/AboutPage.vue'
import FilterPage from '@/pages/FilterPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ItemPage from '@/pages/ItemPage.vue'
import NotFound from '@/pages/NotFound.vue'
import SearchPage from '@/pages/SearchPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/search/:searchOption', component: SearchPage },
    { path: '/filter/:filterOption', component: FilterPage },
    { path: '/item/:itemId', component: ItemPage },
    { path: '/:catchAll(.*)*', component: NotFound },
  ],
})

export default router
