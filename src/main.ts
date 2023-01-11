import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import AppComponent from "@/App.vue";
import router from "@/router";
import { configureFontAwesome } from "./fontAwesomeConfig";
import "./index.css";
import { vueRouteNamesPlugin } from "./router/routeNames";

const pinia = createPinia();
const app = createApp(AppComponent);

/** Конфигурация pinia */
pinia.use(({ store }) => {
  // eslint-disable-next-line no-param-reassign
  store.$router = markRaw(router);
});

/** Конфигурация приложения */
app.use(router).use(pinia).use(vueRouteNamesPlugin);

configureFontAwesome(app);

/** Запуск приложения */
app.mount("#app");
