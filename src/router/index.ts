import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import BasketView from "@/views/BasketView.vue";
import ProfileView from "@/views/ProfileView.vue";
import LoginView from "@/views/LoginView.vue";
import CatalogView from "@/views/CatalogView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import OrderView from "@/views/OrderView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import HeaderLayoutWithSearch from "@/layouts/HeaderLayoutWithSearch.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";

/** Руты с шаблонами */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HeaderLayoutWithSearch,
    children: [
      {
        path: "/",
        name: "home",
        component: CatalogView
      }
    ]
  },
  {
    path: "/",
    component: HeaderLayout,
    children: [
      {
        path: "/profile",
        name: "profile",
        component: ProfileView,
        beforeEnter: () => {
          if (!localStorage.token) return { name: "login" };
          return undefined;
        }
      },
      {
        path: "/basket",
        name: "basket",
        component: BasketView
      },
      {
        path: "/login",
        name: "login",
        component: LoginView,
        beforeEnter: () => {
          if (localStorage.token) return false;
          return undefined;
        }
      },
      {
        path: "/registration",
        name: "registration",
        component: RegistrationView,
        beforeEnter: () => {
          if (localStorage.token) return false;
          return undefined;
        }
      },
      {
        path: "/orders",
        name: "orders",
        component: OrderView,
        beforeEnter: () => {
          if (!localStorage.token) return { name: "login" };
          return undefined;
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
