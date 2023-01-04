import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { configureFontAwesome } from "./fontAwesomeConfig";

configureFontAwesome();
const pinia = createPinia();
const app = createApp(App);

app
  .use(router)
  .use(pinia)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
