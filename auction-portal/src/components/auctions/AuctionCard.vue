<script setup>
import { string, number, shape } from 'vue-types'
defineProps({
  auction: shape({
    id: string().isRequired,
    title: string().isRequired,
    imgUrl: string(),
    description: string(),
    price: number().isRequired
  }).def(() => ({ title: 'Przykład ' }))
  // auction: {
  //   type: Object,
  //   required: true,
  //   // default() {
  //   //   return { title: 'Przykład ' }
  //   // },
  //   default: () => ({ title: 'Przykład ' }) // zwracamy obiekt / factory function jako arrow
  // }
})

// podpowiadanie składni po stronie parent componentu:
defineEmits(['addToCart'])
</script>

<template>
  <div class="card">
    <div class="card-header">{{ auction.title }}</div>
    <img class="card-img" :src="auction.imgUrl" :alt="auction.title" />
    <div class="card-body">
      <p class="card-text">{{ auction.description }}</p>
      <div class="d-flex justify-content-between align-content-center">
        <strong> {{ auction.price }} zł</strong>
        <button class="btn btn-primary" @click="$emit('addToCart', auction)">
          <fa-icon icon="fa-cart-plus" />
        </button>
      </div>
    </div>
  </div>
</template>
