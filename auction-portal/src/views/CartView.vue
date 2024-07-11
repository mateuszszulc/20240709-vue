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
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.imgUrl" alt="" class="cart-item-img" />
          <div class="cart-item-details">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <strong>{{ item.price }} zł</strong>
          </div>
        </div>
      </div>
    </div>
  </PageView>
</template>
