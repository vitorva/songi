<script setup>

// Créer des thumbnail vide ici

import { ref, onMounted } from 'vue';

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
        Playlist
    </h1>
    <div class = "container">
        <div v-for="playlist in playlists"> 
            <div class = "thumbnail"></div>
        </div>
    </div>
</div>

</template>

<style>
.view {
    position: absolute;
    height: 80%;
    width: 50%;
    background-color: red; 
    overflow: scroll;
    overflow-x: hidden;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.thumbnail {
    height: 300px;
    width: 200px;
    background-color: green;
    margin: 10px;
}

</style>