<script setup>
import { useStore } from 'vuex'

const props = defineProps({
    id: Number,
    track: Object,
    index: Number
})

const store = useStore()

function addToQueue() {
    store.dispatch('addToQueue', props.track)
    console.log("queue", store.state.queue)
}

function playTrack() {
    store.dispatch('addToQueue', props.track);
    store.dispatch('playLastTrack', props.track);

    console.log("props.track", props.track)
    console.log(" store.state", store.state)
    console.log("preview", store.state.preview)
}

</script>

<template>
    <div>
        <!-- {{id}} - {{track}} - {{index}} -->
        <div @click="playTrack">
            <img :src="track.album.cover_small" /> {{track.title}}
        </div>
    </div>
</template>

