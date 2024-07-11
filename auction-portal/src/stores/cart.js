import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const getItemsCount = computed(() => items.value.length)
  function addItem(auction) {
    items.value.push(auction)
  }

  return { items, getItemsCount, addItem }
})
