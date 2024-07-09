<script setup>
defineProps({
  title: {
    type: String,
    default: 'Auction Portal'
  }
})
</script>

<template>
  <header class="p-5 mb-4 bg-light rounded-3">
    <h1>{{ title }}</h1>
  </header>
</template>
