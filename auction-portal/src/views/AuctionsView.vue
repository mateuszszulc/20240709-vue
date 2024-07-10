<script setup>
import AuctionCard from '@/components/auctions/AuctionCard.vue'
import PageView from '@/components/PageView.vue'
import { ref } from 'vue'

// level 1 : callback
// level 2 : Promise
// level 3 : Streams / Observables

// Symulacja sciagania z backendu:
async function getAuctions() {
  return [
    {
      id: 36,
      title: 'Części do aparatu',
      imgUrl: 'https://picsum.photos/id/36/600/600',
      description: 'Jakiś opis',
      price: 2000
    },
    {
      id: 90,
      title: 'Części',
      imgUrl: 'https://picsum.photos/id/90/600/600',
      price: 1000
    }
  ]
}

/*
Promise.resolve([
  {
    id: 1,
    title: 'Części do aparatu',
    imgUrl: 'https://picsum.photos/id/36/200/200',
    description: 'Jakiś opis',
    price: 2000
  }
])
*/

const auctions = ref([])

// Odbierz aukcje i przedstaw wszystkie z tablicy
getAuctions().then((data) => {
  auctions.value = data
})
</script>

<template>
  <PageView title="Nasze Aukcje">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item of auctions" :key="item.id">
        <!-- nazwij i zrob z tego komponent: pojedynczy props "auction" -->
        <AuctionCard :auction="item" />
      </div>
    </div>
  </PageView>
</template>
