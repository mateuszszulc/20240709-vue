import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/*
  interface CartItem {
    id: number,
    count: number,
    auction: AuctionItem
  }

*/

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const getItemsCount = computed(() => items.value.map(i => i.count).reduce((a, b) => a + b, 0))


  function addItem(auction) {

    const item = items.value.find(i => i.id === auction.id);
    if (item) {
      item.count++;
    } else {
      items.value.push({
        id: auction.id,
        count: 1,
        auction
      })
    }

  }

  return { items, getItemsCount, addItem }
})
