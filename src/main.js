import { createApp } from "vue";
import App from "./App.vue";
import ui from "@/components/UI/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "@/router/route";

const app = createApp(App);

ui.forEach((component) => {
	app.component(component.name, component);
});

app
.use(router)
.mount("#app");

