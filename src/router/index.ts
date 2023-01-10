import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
import OrdersPage from "@/pages/OrdersPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    beforeEnter: () => {
      if (!localStorage.token) return { name: "login" };
      return undefined;
    }
  },
  {
    path: "/basket",
    name: "basket",
    component: BasketPage
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    beforeEnter: () => {
      if (localStorage.token) return false;
      return undefined;
    }
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationPage,
    beforeEnter: () => {
      if (localStorage.token) return false;
      return undefined;
    }
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersPage,
    beforeEnter: () => {
      if (!localStorage.token) return { name: "login" };
      return undefined;
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
