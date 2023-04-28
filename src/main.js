import { createApp } from "vue";
import "./assets/style/style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Tasks from "./components/Tasks.vue";

const routes = [
  { path: "/", name: Login, component: Login },
  { path: "/tasks", name: Tasks, component: Tasks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
