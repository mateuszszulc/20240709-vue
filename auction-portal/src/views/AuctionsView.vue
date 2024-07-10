<script setup>
import PageView from '@/components/PageView.vue'

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
// Odbierz aukcje i przedstaw wszystkie z tablicy
getAuctions().then((auctions) => {
  console.log(auctions)
})
</script>

<template>
  <PageView title="Nasze Aukcje">
    Jakiś komponent do wyswietlenia jednej aukcji....
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <!-- nazwij i zrob z tego komponent: pojedynczy props "auction" -->
        <div class="card">
          <div class="card-header">Tytuł</div>
          <img class="card-img" src="" alt="" />
          <div class="card-body">
            <p class="card-text">Opis aukcji</p>
            <div class="d-flex justify-content-between align-content-center">
              <strong> 0 zł</strong>
              <button class="btn btn-primary"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageView>
</template>
