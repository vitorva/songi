<script setup>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue';

const store = useStore()

/* Not working with composition API !
function preview() {
  console.log("preview !!!!!!", store.state.preview)
  return store.state.preview;
}
*/

const audioPlayer = ref(null);

onMounted(() => {

  audioPlayer.value.onended = () => {
    store.dispatch('next');
  };

});
</script>


<template>
  <div class="player">
    <div v-if="!currentTrack"></div> <!-- Placeholder -->
    <div v-if="currentTrack">
      <img class="picture" :src="currentTrack.album.cover" alt="Picture">
      <div>
        <b>{{ currentTrack.title }}</b>
        <br>
        <span>{{ currentTrack.artist.name }}</span>
      </div>
    </div>

    <!-- Controls -->
    <div class="controls">
      <span class="arrow" @click="previous">◂◂</span>
      <audio id="audioPlayer" ref="audioPlayer" controls autoplay :src="store.state.preview">
        Your browser does not support the <code>audio</code> element.
      </audio>
      <span class="arrow" @click="next">▸▸</span>
    </div>

  </div>

</template>

<style>
.player {
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  background-color: white;
  left: 0;
  right: 0;
  bottom: 0;
  height: 75px;
  border-top: 2px solid #eff3f7;
}

.player .picture {
  height: 100%;
  border-radius: 0;
  margin-right: 1rem;
}

.player .controls {
  display: flex;
  align-items: center;
}

.player .arrow {
  font-size: 2rem;
  cursor: pointer;
  color: #474747;
}

#audioPlayer {
  margin: 0 1rem 0 1rem;
  border-radius: 100px;
}
</style>