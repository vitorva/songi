<script setup>
import { useStore } from 'vuex'

const props = defineProps({
    id: Number,
    track: Object,
    index: Number,
    btnQueue: Boolean
})

const store = useStore()

function removeTrack(index){
    store.dispatch("removeTrack", index)
    console.log("index", index)
    console.log("state", store.state.queue)
}

function addToQueue() {
    store.dispatch('addToQueue', props.track)
    console.log("queue", store.state.queue)
}

function playTrack() {
    if (props.btnQueue) {
        // Just play at given index (clicked from queue)
        store.dispatch('playAt', props.index);

    } else {
        // Add to queue and play immediately
        store.dispatch('addToQueue', props.track);
        store.dispatch('playLastTrack', props.track);
    }
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
        <button v-if="btnQueue" @click="removeTrack(index)">delete</button>
    </div>
</template>

