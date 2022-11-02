<template>
  <div>

    <h1>Playlists</h1>

    <div class="playlists">
      <div class="playlist-item" v-for="p in playlists" v-bind:key="p.id">
        <router-link class="clickable" :to="`/playlists/${p.id}`">
          <img :src="p.picture_medium" alt="Picture">
        </router-link>
        <b>{{ p.title }}</b>
        <span v-if="p.user">{{ p.user.name }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.fetchPlaylists()
  },
  data() {
    return {
      playlists: "Fetching playlists...", // Placeholder text
    };
  },
  methods: {
    fetchPlaylists() {
      fetch("/api/playlists/top/20", {
        "method": "GET"
      })
      .then(res => res.json())
      .then(json => {
        this.playlists = json.data;
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>
  .playlists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .playlist-item {
    width: 10rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }

  .playlist-item img {
    width: 100%;
  }

</style>
