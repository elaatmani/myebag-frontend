import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'
import ContactView from '../views/ContactView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

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
