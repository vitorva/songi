import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Playlist from "../components/Playlist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/playlist/:id",
      name: "playlist",
      component: Playlist,
      props: true,
    },
  ],
});

export default router;
