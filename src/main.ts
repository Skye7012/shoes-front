import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import AppComponent from "@/App.vue";
import router from "@/router";
import { configureRouteExtensions } from "@/router/routerExtension";
import { configureFontAwesome } from "./fontAwesomeConfig";
import "./index.css";

const pinia = createPinia();
const app = createApp(AppComponent);

/** Конфигурация pinia */
pinia.use(({ store }) => {
  // eslint-disable-next-line no-param-reassign
  store.$router = markRaw(router);
});

/** Конфигурация приложения */
app.use(router).use(pinia);

configureFontAwesome(app);
configureRouteExtensions(router);

/** Запуск приложения */
app.mount("#app");
