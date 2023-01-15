/* eslint-disable */
import { Router } from "vue-router";
import { routeNames } from ".";

/** Типизация расширений к роутеру */
declare module "vue-router" {
  interface Router {
    routeNames: typeof routeNames;
  }
}

/** Сконфигурировать расширения для роутера */
export const configureRouteExtensions = (router: Router) => {
  /**
   * Добавление к роутеру статического константного поля со всеми рутами
   */
  router.routeNames = routeNames;
};
