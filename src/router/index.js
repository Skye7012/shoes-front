import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import VerifyPage from '@/pages/VerifyPage.vue'
import BasketPage from '@/pages/BasketPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'

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
    path: '/basket',
    name: 'basket',
    component: BasketPage,
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
  {
    path: '/verify',
    name: 'verify',
    component: VerifyPage,
    beforeEnter: (to, from) => {
      if(localStorage.token)
        return false;
    },
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersPage,
    beforeEnter: (to, from) => {
      if(!localStorage.token)
        return {name: 'login'}
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
