<script setup>
import { useStore } from 'vuex'
import TrackItem from './TrackItem.vue';

const store = useStore()

function reset(){
    store.dispatch("resetQueue")
}

</script>


<template>
<div class="queue">
    <h1>
        Queue
    </h1>
    <button @click="reset">RESET</button>

    <TrackItem v-for="(item, index) in store.state.queue" :id="item.id" :track="item" :index="index" :btnQueue="true"/>

</div>

</template>

<style>
.queue {
    position: absolute;
    margin-left: 50%;
    height: 80%;
    width: 50%;
    background-color:  rgb(247, 250, 252); 
}

</style>