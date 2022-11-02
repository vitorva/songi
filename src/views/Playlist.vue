<template>
  <div>
    <p><router-link to="/">&lt; Back to playlists</router-link></p>

    <div class="header">
      <img class="picture" :src="picture" alt="Picture">
      <div>

        <p class="soft">PLAYLIST</p>
        <h2>{{ this.title }}</h2>
        <p>
          <span class="soft">By</span> {{ creator }}
        </p>
        <p class="soft">
          {{ `${this.year} • ${this.nbTracks} songs • ${this.duration} minutes` }}
        </p>
      </div>
    </div>

    <TrackItem
        v-for="(item, index) in tracks"
        :key="item.id"
        :track="item"
        :queue-btn="true"
        :index="index"
    />

  </div>
</template>

<script>
import TrackItem from "@/components/TrackItem";

export default {
  name: "Playlist",
  components: {TrackItem},
  created() {
    this.fetchPlaylist()
  },
  data() {
    return {
      title: "Fetching playlist...", // Placeholder text
      tracks: null,
      picture: null,
      creator: null,
      year: null,
      nbTracks: null,
      duration: null,
    };
  },
  methods: {
    fetchPlaylist() {
      fetch(`/api/playlists/${this.$route.params.id}`, {
        "method": "GET"
      })
      .then(res => res.json())
      .then(json => {
        this.title = json.title;
        this.tracks = json.tracks.data;
        this.picture = json.picture_big;
        this.creator = json.creator.name;
        this.year = new Date(json.creation_date).getFullYear();
        this.nbTracks = json.nb_tracks;
        this.duration = Math.round(json.duration / 60); // From seconds to minutes TODO to computed
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>
  .picture {
    width: 15rem;
    height: 15rem;
    margin-right: 2rem;
  }

  .header {
    display: flex;
    align-items: center;
  }
</style>
