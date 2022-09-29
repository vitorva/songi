<script setup>
import Queue from './components/Queue.vue';
import Player from './components/Player.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const currentTrack = ref(null)

function selectCurrentTrack(track) {
  currentTrack.value = track
}

</script>

<template>
  <RouterView></RouterView>
  <Queue />
  <Player/>
</template>

<style scoped>

</style>
