<template>
  <div class="track">
    <img class="picture-song clickable" :src="track.album.cover_small" alt="Picture" @click="playTrack">
    <p>
      <b :class="{'clickable': true, 'isPlaying': isPlaying}" @click="playTrack">{{ track.title }}</b>
      <br>
      {{ track.artist.name }}
      <br>
      <a id="add" v-if="queueBtn" class="soft clickable" @click="addToQueue"> Add to queue</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "TrackItem",
  props: {
    track: Object,
    queueBtn: Boolean,
    index: Number
  },
  computed: {
    currentTrack () {
      return this.$store.state.currentTrack;
    },
    isPlaying() {
      return this.currentTrack && this.currentTrack.id === this.track.id;
    }
  },
  methods: {
    playTrack() {
      if(this.queueBtn) {
        // Add to queue and play immediately
        this.$store.dispatch('addToQueue', this.track);
        this.$store.dispatch('playLastTrack', this.track);
      } else {
        // Just play at given index (clicked from queue)
        this.$store.dispatch('playAt', this.index);
      }
    },
    addToQueue() {
      this.$store.dispatch('addToQueue', this.track);
    }
  }
}
</script>

<style scoped>
  .track {
    display: flex;
    align-items: center;
  }

  .track {
    margin-top: 1rem;
  }

  .picture-song {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  .isPlaying {
    color: #18d963;
  }

  #add {
    color: transparent;
  }

  .track:hover #add {
    color: initial;
  }
</style>
