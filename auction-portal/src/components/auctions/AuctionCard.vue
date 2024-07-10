<script setup>
/*
{
    id: number;
    title: string;
    imgUrl: string;
    description: string;
    price: number;
}
*/
defineProps({
  auction: {
    type: Object,
    // required: true
    // default() {
    //   return { title: 'Przykład ' }
    // },
    default: () => ({ title: 'Przykład ' }) // zwracamy obiekt / factory function jako arrow
  }
})
</script>

<template>
  <div class="card">
    <div class="card-header">{{ auction.title }}</div>
    <img class="card-img" :src="auction.imgUrl" :alt="auction.title" />
    <div class="card-body">
      <p class="card-text">{{ auction.description }}</p>
      <div class="d-flex justify-content-between align-content-center">
        <strong> {{ auction.price }} zł</strong>
        <button class="btn btn-primary" @click="$emit('addToCart', auction)"></button>
      </div>
    </div>
  </div>
</template>
