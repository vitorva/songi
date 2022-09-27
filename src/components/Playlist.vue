<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    id: String
})

const tracks = ref(null)

onMounted(async () => {
    console.log("id", props.id)
    const values = await fetch(`http://localhost:4000/api/playlist/${props.id}`, {
        "method": "GET"
    })
    const jsonValues = await values.json()
    tracks.value = jsonValues.tracks.data
    console.log("tracks", tracks.value)
})

</script>

<template>
    <div class="view">
        <div>
            <RouterLink to="/">&lt Back to playlists</RouterLink>
        </div>
        Mon ID est : {{id}}
        <div v-for="track in tracks">{{track.title}}</div>
    </div>
</template>
