<script setup>
import View from './components/View.vue';
import Queue from './components/Queue.vue';
import Player from './components/Player.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView></RouterView>
  <Queue />
  <Player/>
</template>

<style scoped>

</style>
