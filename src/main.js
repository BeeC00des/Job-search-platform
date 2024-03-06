import "./assets/main.css";


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as IconifyVue from '@iconify/vue';

const app = createApp(App);
app.use(IconifyVue);

app.use(router);


app.mount("#app");
