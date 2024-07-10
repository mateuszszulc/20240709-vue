<script setup>
import AuctionCard from '@/components/auctions/AuctionCard.vue'
import PageView from '@/components/PageView.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

// level 1 : callback
// level 2 : Promise
// level 3 : Streams / Observables

// Symulacja sciagania z backendu:
async function getAuctions() {
  // const data = await fetch('http://localhost:3000/auctions/900')
  // return data.json()
  return axios.get('http://localhost:3000/auctions')
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
const isLoading = ref(false)
const errorMessage = ref('')

// Odbierz aukcje i przedstaw wszystkie z tablicy
onMounted(async () => {
  console.log('LifecycleMethod: mounted!')
  /*
  getAuctions()
    .then((data) => {
      auctions.value = data
    })
    .catch((e) => {
      console.error(e)
    })
    .finally(() => {
      console.log('I will always fire')
    })
  */

  try {
    isLoading.value = true
    const myAuctions = await getAuctions()
    auctions.value = myAuctions.data
  } catch (e) {
    console.error(e)
    errorMessage.value = e.message
  } finally {
    console.log('I will always fire')
    isLoading.value = false
  }
})
</script>

<template>
  <PageView title="Nasze Aukcje">
    <div class="row">
      <div class="col-12" v-if="isLoading">
        <div class="alert alert-info">Ładuję aukcje...</div>
      </div>
      <div class="col-12" v-if="errorMessage">
        <div class="alert alert-danger">Wystąpił błąd: {{ errorMessage }}</div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item of auctions" :key="item.id">
        <!-- nazwij i zrob z tego komponent: pojedynczy props "auction" -->
        <AuctionCard :auction="item" />
      </div>
    </div>
  </PageView>
</template>
