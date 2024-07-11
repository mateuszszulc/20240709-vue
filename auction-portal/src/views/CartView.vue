<script setup>
import PageView from '@/components/PageView.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <PageView title="Koszyk">
    <div class="cart-items">
      <div v-if="cartStore.items.length === 0" class="alert alert-info">
        Twój koszyk jest pusty.
      </div>
      <div v-else>
        <div v-for="{ auction, count, id } in cartStore.items" :key="id" class="cart-item d-flex">
          <span class="badge text-bg-primary rounded-pill position-absolute">{{ count }}</span>
          <img :src="auction.imgUrl" alt="" class="img-thumbnail" :style="{ width: '200px' }" />
          <div class="cart-item-details">
            <h3>{{ auction.title }}</h3>
            <p>{{ auction.description }}</p>
            <strong>{{ auction.price }} zł</strong>
          </div>
        </div>
      </div>
    </div>
  </PageView>
</template>
