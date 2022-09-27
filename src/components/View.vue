<script setup>

// Créer des thumbnail vide ici

import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

// Appel a l'api

const playlists = ref(null)

onMounted(async () => {
    const values = await fetch("http://localhost:4000/api/playlists/top/15")
    const jsonValues = await values.json()
    playlists.value = jsonValues["data"]
    console.log("playlists", playlists.value)
})

</script>


<template>
<div class="view">
    <h1>
        Playlists
    </h1>
    <div class = "container">
        <div v-for="playlist in playlists"> 
            <div class = "playlist-item">
                <router-link :to="{ name: 'playlist', params: { id: playlist.id } }"><img :src="playlist.picture_medium"/></router-link>
                <b>{{playlist.title}}</b>
                <span>{{playlist.user.name}}</span>
            </div>
        </div>
    </div>
</div>

</template>

<style>
.view {
    position: absolute;
    height: 80%;
    width: 50%;
    background-color: white; 
    overflow: scroll;
    overflow-x: hidden;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.playlist-item {
    display : flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    margin: 10px;
}

.playlist-item img {
  width: 100%;
  height: auto;
}

</style>