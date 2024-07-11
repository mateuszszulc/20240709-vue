<script setup>
import AuctionCard from '@/components/auctions/AuctionCard.vue'
import PageView from '@/components/PageView.vue'
import { useAuctions } from '@/compositions/useAuctions'
import { useCartStore } from '@/stores/cart'

// level 1 : callback
// level 2 : Promise
// level 3 : Streams / Observables

// // Symulacja sciagania z backendu:
// async function getAuctions() {
//   // const data = await fetch('http://localhost:3000/auctions/900')
//   // return data.json()
//   return axios.get('http://localhost:3000/auctions')
// }

const { auctions, isLoading, errorMessage } = useAuctions()
const cart = useCartStore()

function handleAddToCart(auction) {
  cart.addItem(auction)
}
</script>

<template>
  <PageView title="Nasze Aukcje">
    <div class="row">
      <div class="col-12" v-if="isLoading">
        <div class="alert alert-info"><fa-icon icon="fa-spinner" spin /> Ładuję aukcje...</div>
      </div>
      <div class="col-12" v-if="errorMessage">
        <div class="alert alert-danger">Wystąpił błąd: {{ errorMessage }}</div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item of auctions" :key="item.id">
        <!-- nazwij i zrob z tego komponent: pojedynczy props "auction" -->
        <AuctionCard :auction="item" @add-to-cart="handleAddToCart" />
      </div>
    </div>
  </PageView>
</template>
