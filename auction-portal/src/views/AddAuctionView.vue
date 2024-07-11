<script setup>
import PageView from '@/components/PageView.vue'
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minValue } from '@vuelidate/validators'

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

const v$ = useVuelidate(
  {
    title: { required, $autoDirty: true },
    imgId: { required, minValue: minValue(1), $autoDirty: true },
    price: { required, minValue: minValue(1), $autoDirty: true }
  },
  formState
)

async function handleFormSubmit() {
  const isOk = await v$.value.$validate()
  if (!isOk) {
    return
  }
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
        <form @submit.prevent="handleFormSubmit" novalidate>
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
                :class="{ 'is-invalid': v$.title.$error }"
                v-model="formState.title"
                @blur="v$.title.$touch"
              />
              <!--  @blur="v$.title.$touch" niepotrzebne bo $autoDirty -->
            </div>
            <div class="alert alert-danger" v-if="v$.title.$error">
              <span v-for="{ $uid, $message } of v$.title.$errors" :key="$uid">{{ $message }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="auctionPrice">Cena aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="fa-tag" />
                </span>
              </div>
              <input
                id="auctionPrice"
                type="number"
                name="price"
                required
                class="form-control"
                v-model="formState.price"
                :class="{ 'is-invalid': v$.price.$error }"
                @blur="v$.price.$touch"
              />
            </div>
            <div class="alert alert-danger" v-if="v$.price.$error">
              <span v-for="{ $uid, $message } of v$.price.$errors" :key="$uid">{{ $message }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="img">Zdjecie</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="fa-image" />
                </span>
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
            <button
              class="btn btn-primary"
              type="submit"
              :style="{ opacity: v$.$invalid ? 0.5 : 1 }"
            >
              <fa-icon icon="fa-gavel" /> Dodaj aukcję
            </button>
          </div>
        </form>
      </div>
    </section>
  </PageView>
</template>
