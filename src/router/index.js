import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  // Redirects
  {
    path: '/',
    redirect: '/home'
  },
  // Pages
  {
    path: '/home',
    name: 'home',
    components: Home,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
