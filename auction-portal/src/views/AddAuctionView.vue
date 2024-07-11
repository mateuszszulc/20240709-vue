<script setup>
import PageView from '@/components/PageView.vue'
import { computed, reactive } from 'vue'

// używajac v-model => zbierz wartości formularza w jeden obiekt (przyszła aukcja)
// do img uzyj computed property i zmieniaj je po lewej stornie:
// zwróc uwage na to czy Twoj fomularz zachowuje sie poprawnie w kontekscie SPA
// pamieta o <form onsubmit> natywnie

//

const formState = reactive({
  title: '',
  imgId: 1,
  description: '',
  price: 1
})

const imgUrl = computed(() => `https://picsum.photos/id/${formState.imgId}/600/600`)

function handleFormSubmit() {
  console.log(formState)
}
</script>

<template>
  <PageView title="Dodaj nową aukcję">
    <section class="row">
      <div class="col-6">
        <img class="img-thumbnail" alt="Podgląd fotografii" :src="imgUrl" />
      </div>
      <div class="col-6">
        <form @submit.prevent="handleFormSubmit">
          <div class="form-group">
            <label for="auctionTitle">Nazwa aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="fa-edit" />
                </span>
              </div>
              <input
                id="auctionTitle"
                type="text"
                name="title"
                required
                class="form-control"
                v-model="formState.title"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="auctionPrice">Cena aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"> </span>
              </div>
              <input
                id="auctionPrice"
                type="number"
                name="price"
                required
                class="form-control"
                v-model="formState.price"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="img">Zdjecie</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"> </span>
              </div>
              <input
                id="img"
                type="number"
                name="imgUrl"
                required
                class="form-control"
                v-model="formState.imgId"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="auctionDescription">Szczegółowy opis</label>
            <div class="input-group mb-3">
              <textarea
                id="auctionDescription"
                rows="5"
                class="form-control"
                name="description"
                v-model="formState.description"
              ></textarea>
            </div>
          </div>
          <div class="text-right">
            <button class="btn btn-primary" type="submit">Dodaj aukcję</button>
          </div>
        </form>
      </div>
    </section>
  </PageView>
</template>
