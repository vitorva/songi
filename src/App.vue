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
  <Player />
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.view {
  padding: 1rem 1rem;
  margin-bottom: 75px;
  overflow-y: scroll;
  flex-grow: 1;
}

img {
  border-radius: 0.5rem;
}

.soft {
  color: #6d8093;
}

.clickable {
  cursor: pointer;
  transition-duration: 0.2s;
}

.clickable:hover {
  filter: brightness(1.1);
  transform: scale(1.01);
  text-decoration: underline;
}
</style>
