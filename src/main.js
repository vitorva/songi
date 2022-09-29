import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

import './assets/main.css'

const app = createApp(App)

app.use(router)

const store = createStore({
    state: {
        currentTrack: null,
        preview: null,
        queue: [],
        queuePtr: 0
    },
    mutations: {
        setCurrentTrack(state, track) {
            state.currentTrack = track;
            state.preview = track.preview;
        },
        pushInQueue(state, track) {
            state.queue.push(track);
        },
        setQueueIndex(state, index) {
            state.queuePtr = index;
        },
        resetQueue(state) {
            state.queue = []
            state.queuePtr = 0;
            state.currentTrack = null;
            state.preview = null;
        }
    },
    actions: {
        playLastTrack({ commit }) {
            commit('setQueueIndex', this.state.queue.length - 1);
            commit('setCurrentTrack', this.state.queue[this.state.queuePtr]);
        },
        playAt({ commit }, index) {
            commit('setQueueIndex', index);
            commit('setCurrentTrack', this.state.queue[this.state.queuePtr]);
        },
        addToQueue({ commit }, track) {
            commit('pushInQueue', track);
            if (this.state.queue.length === 1) { // Play song if it's the only one in queue
                commit('setCurrentTrack', track);
            }
        },
        next({ commit }) {
            if (this.state.queuePtr + 1 < this.state.queue.length) { // Can't next if at the end of queue
                commit('setQueueIndex', this.state.queuePtr + 1);
                commit('setCurrentTrack', this.state.queue[this.state.queuePtr]);
            }
        },
        previous({ commit }) {
            if (this.state.queuePtr > 0) {
                commit('setQueueIndex', this.state.queuePtr - 1);
                commit('setCurrentTrack', this.state.queue[this.state.queuePtr]);
            }
        },
        resetQueue({ commit }) {
            commit('resetQueue');
        },
    }
});

app.use(store)

app.mount('#app')
