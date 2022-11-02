<template>
  <div class="queue">
    <p class="title">
      <span>
        Queue<span class="soft"> • {{ queue.length }} tracks</span>
      </span>
      <span v-if="queue.length > 0" class="material-icons reset" @click="resetQueue">
        clear
      </span>
    </p>
    <TrackItem
        v-for="(item, index) in queue"
        :key="item.id"
        :track="item"
        :queue-btn="false"
        :index="index"
    />
  </div>
</template>

<script>
import TrackItem from "@/components/TrackItem";

export default {
  name: "Queue",
  components: {
    TrackItem
  },
  computed: {
    queue() {
      return this.$store.state.queue;
    }
  },
  methods: {
    resetQueue() {
      this.$store.dispatch('resetQueue');
    }
  }
}
</script>

<style scoped>

  .queue {
    flex-shrink: 0;
    margin-bottom: 75px;
    background: #f7fafc;
    width: 26rem;
    top: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    padding: 2rem;
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
