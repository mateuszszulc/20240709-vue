import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


// Zadanie:
// Wykonaj cart.js jako store
// dodaj akcje:
// 1. addItem
// zwracaj elementy:
// 2. items - elementy koszyka
// 3. getItemsCount - iloś elementow w koszyku

{/* <script setup>
  const cart = useCartStore();

  cart.items
  </script> */}