<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheMainMenu from '@/components/TheMainMenu.vue'

// const sth = 1_000_000
</script>

<template>
  <TheHeader />
  <main class="container">
    <TheMainMenu />
    <RouterView />
  </main>
</template>

<style scoped></style>
