<template>
  <div class="player">
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
      <audio id="audioPlayer" ref="audioPlayer" controls autoplay :src="preview">
        Your browser does not support the <code>audio</code> element.
      </audio>
      <span class="arrow" @click="next">▸▸</span>
    </div>

    <DeezerCredits />
  </div>
</template>

<script>
import DeezerCredits from "@/components/DeezerCredits.vue";

export default {
  name: "Player",
  components: {
    DeezerCredits
  },
  mounted() {
    // Autoplay next song in queue
    // (can't hide whole player div with v-if, otherwise $refs.audioPlayer wouldn't be accessible here.
    // So we use the 'preview' attribute above with default value null, because currentTrack isn't yet available)
    this.$refs.audioPlayer.onended = () => {
      this.next();
    };
  },
  computed: {
    currentTrack() {
      return this.$store.state.currentTrack;
    },
    preview() {
      return this.$store.state.preview;
    }
  },
  watch: {
    preview: function(newPreview) {
      // If preview is set to null, stop audio playback
      if(newPreview === null) {
        this.$refs.audioPlayer.pause();
        this.$refs.audioPlayer.currentTime = 0;
      }
    }
  },
  methods: {
    next() {
      this.$store.dispatch('next');
    },
    previous() {
      this.$store.dispatch('previous');
    }
  }
}
</script>

<style scoped>

  .player {
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
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

  .player .infos {
    display: flex;
    height: 100%;
    width: 15rem;
    align-items: center;
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
