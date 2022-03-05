import { createApp } from "vue";
import App from "./App.vue";
import ui from "@/components/UI/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

ui.forEach((component) => {
	app.component(component.name, component);
});

app.mount("#app");

