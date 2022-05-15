import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    beforeEnter: (to, from) => {
      if(!localStorage.token)
        return {name: 'login'}
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    beforeEnter: (to, from) => {
      if(localStorage.token)
        return false;
    },
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage,
    beforeEnter: (to, from) => {
      if(localStorage.token)
        return false;
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
