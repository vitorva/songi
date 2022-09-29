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

</script>

<template>
    <div>
        <!-- {{id}} - {{track}} - {{index}} -->
        <img :src="track.album.cover_small" /> {{track.title}}
        <button @click="addToQueue">click on me</button>
    </div>
</template>

