/** import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/** import specific icons */
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { App } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/**
 * Сконфигурировать FontAwesomeIcon
 * @param app Приложение
 */
export const configureFontAwesome = (app: App) => {
  library.add(faUser, faCartShopping);
  app.component("FontAwesomeIcon", FontAwesomeIcon);
};
