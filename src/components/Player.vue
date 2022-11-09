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

function previous() {
  store.dispatch('previous');
}

function next() {
  store.dispatch('next');
}


</script>


<template>
  <div class="player">

    <div class="infos" v-if="!store.state.currentTrack"></div> <!-- Placeholder -->
    <div class="infos" v-if="store.state.currentTrack">
      <img class="picture" :src="store.state.currentTrack.album.cover" alt="Picture" />
      <div>
        <b>{{ store.state.currentTrack.title }}</b>
        <br>
        <span>{{ store.state.currentTrack.artist.name }}</span>
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
  height: 200px;
  border-top: 2px solid #eff3f7;
}

.player .picture {
  display: block;
  height: 65%;
  border-radius: 0;
  border: 0.05em solid black;
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

.infos {
  display: none;
}

@media (min-width: 1024px) {
  .infos {
    position: fixed;
    height: 150px;
    left: 40px;
    right: 0;
    bottom: 25px;
    display: block;
    width: 100px;
  }
}
</style>