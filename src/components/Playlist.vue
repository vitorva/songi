<script setup>
const props = defineProps({
  id: String
})
</script>

<template>
    <div><RouterLink to="/">Home</RouterLink></div>
    Mon ID est : {{id}}
</template>