import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppComponent from "@/App.vue";
import router from "@/router";
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
