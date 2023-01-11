import { App } from "vue";

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

/** Плагин, который добавляет в vue поле с объектом всех именований рутов */
export const vueRouteNamesPlugin =  {
  install: (app: App) => {
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$routeNames = routeNames;
  }
}
