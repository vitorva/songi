<script setup>
import { useStore } from 'vuex'
import TrackItem from './TrackItem.vue';

const store = useStore()

function reset() {
    store.dispatch("resetQueue")
}

</script>


<template>
    <div class="queue">
        <p class="title">
            <span>
                Queue<span class="soft"> • {{ store.state.queue.length }} tracks</span>
            </span>
            <span v-if="store.state.queue.length > 0" class="material-icons reset" @click="reset">
                clear
            </span>
        </p>
        <TrackItem v-for="(item, index) in store.state.queue" :id="item.id" :track="item" :index="index"
            :btnQueue="true" />
    </div>
</template>

<style>
.queue {
    flex-shrink: 0;
    margin-bottom: 75px;
    background: #f7fafc;
    background-color: red;
    height: 100%;
    width: 26rem;
    top: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    padding: 2rem;
    overflow-y: scroll;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.reset {
    cursor: pointer;
}
</style>