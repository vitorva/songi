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
    <h1>
      Player
    </h1>

    <div class="infos" v-if="!currentTrack"></div> <!-- Placeholder -->
    <div class="infos" v-if="currentTrack">
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
  left: 0;
  bottom: 0;
  height: 15%;
  width: 100%;
  background-color: yellow;
  text-align: center;
}
</style>