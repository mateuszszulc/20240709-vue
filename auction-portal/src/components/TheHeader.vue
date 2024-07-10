<script setup>
import { string } from 'vue-types'

defineProps({
  title: string().def('Auction Portal')
  // title: {
  //   type: String,
  //   default: 'Auction Portal'
  // }
})
</script>

<template>
  <header class="p-5 mb-4 bg-light rounded-3">
    <h1>{{ title }}</h1>
  </header>
</template>
