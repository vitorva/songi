<script setup>
import { useStore } from 'vuex'

const props = defineProps({
    track: Object,
    queueBtn: Boolean,
    index: Number,
})

const store = useStore()

function removeTrack(index) {
    store.dispatch("removeTrack", index)
    console.log("index", index)
    console.log("state", store.state.queue)
}

function addToQueue() {
    store.dispatch('addToQueue', props.track)
    console.log("queue", store.state.queue)
}

function playTrack() {
    if (props.queueBtn) {
        // Add to queue and play immediately
        store.dispatch('addToQueue', props.track);
        store.dispatch('playLastTrack', props.track);
    } else {
        // Just play at given index (clicked from queue)
        store.dispatch('playAt', props.index);
    }
    console.log("props.track", props.track)
    console.log(" store.state", store.state)
    console.log("preview", store.state.preview)
}

function currentTrack() {
    if (store !== undefined) {
        return store.state.currentTrack;
    }
    return null
}

function isPlaying() {

    return currentTrack() !== null && currentTrack() !== undefined && this.currentTrack().id === props.track.id;
}

</script>

<template>
    <!--
    <div>
        <div @click="playTrack">
            <img :src="track.album.cover_small" /> {{ track.title }}
        </div>
        <button v-if="btnQueue" @click="removeTrack(index)">delete</button>
    </div>
-->

    <div class="track">
        <img class="picture-song clickable" :src="track.album.cover_small" alt="Picture" @click="playTrack()">
        <p>
            <b :class="{ 'clickable': true, 'isPlaying': isPlaying() }" @click="playTrack()">{{ track.title }}</b>
            <br>
            {{ track.artist.name }}
            <br>
            <a id="add" v-if="queueBtn" class="soft clickable" @click="addToQueue"> Add to queue</a>
        </p>
    </div>

</template>

<style >
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

