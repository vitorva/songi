<script setup>
import Queue from './components/Queue.vue';
import Player from './components/Player.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView></RouterView>
  <Queue />
  <Player/>
</template>

<style scoped>

</style>
