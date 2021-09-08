import { createApp } from "vue";
import App from "./App.vue";
import Add from "./components/Add.vue";
import Stored from "./components/Stored.vue";
import Modal from "./components/Modal.vue";

const app = createApp(App);

app.component("add-item", Add);
app.component("stored-item", Stored);
app.component("modal-item", Modal);
app.mount("#app");
