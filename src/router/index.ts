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

/** Наименования рутов */
export const routeNames = {
  home: "home",
  profile: "profile",
  login: "login",
  basket: "basket",
  registration: "registration",
  orders: "orders",
  notFound: "notFound"
};

/** Руты */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HeaderLayoutWithSearch,
    children: [
      {
        path: "/",
        name: routeNames.home,
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
        name: routeNames.profile,
        component: ProfileView,
        beforeEnter: () => {
          if (!localStorage.token) return { name: routeNames.login };
          return undefined;
        }
      },
      {
        path: "/basket",
        name: routeNames.basket,
        component: BasketView
      },
      {
        path: "/login",
        name: routeNames.login,
        component: LoginView,
        beforeEnter: () => {
          if (localStorage.token) return false;
          return undefined;
        }
      },
      {
        path: "/registration",
        name: routeNames.registration,
        component: RegistrationView,
        beforeEnter: () => {
          if (localStorage.token) return false;
          return undefined;
        }
      },
      {
        path: "/orders",
        name: routeNames.orders,
        component: OrderView,
        beforeEnter: () => {
          if (!localStorage.token) return { name: routeNames.login };
          return undefined;
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: routeNames.notFound,
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
