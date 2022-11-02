<script setup>
import { ref, onMounted } from 'vue';
import TrackItem from './TrackItem.vue';

const props = defineProps({
    id: String
})

const title = ref("Fetching playlist...");
const tracks = ref(null);
const picture = ref(null);
const creator = ref(null);
const year = ref(null);
const nbTracks = ref(null);
const duration = ref(null);

onMounted(async () => {
    console.log("id", props.id)
    const values = await fetch(`/api/playlist/${props.id}`, {
        "method": "GET"
    })
    const json = await values.json()

    title.value = json.title
    tracks.value = json.tracks.data
    picture.value = json.picture_big
    creator.value = json.creator.name
    year.value = new Date(json.creation_date).getFullYear();
    nbTracks.value = json.nb_tracks;
    duration.value = Math.round(json.duration / 60); // From seconds to minutes TODO to computed

    console.log("json", json)
})

</script>

<template>
    <div class="view">
        <div>
            <RouterLink to="/">&lt Back to playlists</RouterLink>
        </div>
        <div class="header">
            <img class="picture" :src="picture" alt="Picture">
            <div>
                <p>PLAYLIST</p>
                <h2>{{ title }}</h2>
                <p>
                    <span>By</span> {{ creator }}
                </p>
                <p>
                    {{ `${year} • ${nbTracks} songs • ${duration} minutes` }}
                </p>
            </div>
        </div>

        <TrackItem v-for="(item, index) in tracks" :id="item.id" :track="item" :index="index" :btnQueue="false" />

    </div>
</template>

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