import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import TestingApi from '@/views/TestingApi.vue'
import ProfileView from '@/views/ProfileView.vue'
import LoadingLogo from '@/components/app/LoadingLogo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/api',
    name: 'api',
    component: TestingApi
  },
  {
    path: '/load',
    name: 'load',
    component: LoadingLogo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((next, prev) => {
  console.log(next.path);
  console.log(prev.path);
})

export default router
