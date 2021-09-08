import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AddCustomer from "../views/AddCustomer.vue";
import View from "../views/View.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/add",
    name: "AddCustomer",
    component: AddCustomer,
  },
  {
    path: "/customers/1",
    name: "View",
    component: View,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
