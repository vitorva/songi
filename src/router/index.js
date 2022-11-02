import { createRouter, createWebHistory } from 'vue-router'
import View from '../components/View.vue'
import Playlist from '../components/Playlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'view',
      component: View
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: Playlist,
      props : true
    }
  ]
})

export default router
