import { createApp } from "vue";
import AppComponent from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { configureFontAwesome } from "./fontAwesomeConfig";
import "./index.css";

configureFontAwesome();
const pinia = createPinia();
const app = createApp(AppComponent);

app
  .use(router)
  .use(pinia)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
