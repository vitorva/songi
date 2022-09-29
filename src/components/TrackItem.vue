<script setup>

const props = defineProps({
    id: Number,
    track: Object,
    index: Number
})


function addToQueue() {
    console.log("store", $store);
    store.dispatch('addToQueue', track.value);
    console.log("queue", store.state.queue);
}

</script>

<template>
    <div>
        <!-- {{id}} - {{track}} - {{index}} -->
        <img :src="track.album.cover_small" /> {{track.title}}
        <button @click="addToQueue">click on me</button>
    </div>
</template>

