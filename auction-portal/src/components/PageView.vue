<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3 class="mt-4 p-2 bg-secondary text-white">{{ title }}</h3>
  <!-- <slot name="header"></slot> -->
  <slot></slot>
</template>
