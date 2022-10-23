import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoadingView from '@/components/app/LoadingLogo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoadingView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/load',
    name: 'load',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
