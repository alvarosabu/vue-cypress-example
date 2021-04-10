import { createApp } from "vue";
import { Quasar } from "quasar";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import quasarUserOptions from "./quasar.config";

const app = createApp(App);

app.use(Quasar, quasarUserOptions).use(router).mount("#app");
