<script setup>

// Créer des thumbnail vide ici


</script>


<template>
<div class="view">
    <h1>
        Playlist
    </h1>
    <div class = "container">
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
        <div class = "thumbnail"></div>
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