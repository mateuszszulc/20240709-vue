# Zadania na start

## Dzień 3

### Zadanie #1 | W pełni działające menu + strony w [router](./src/router/index.js)

#### 1.1 👇 Menu

Dodaj na koniec widoku [TheMainMenu.vue](./src/components/TheMainMenu.vue) kod HTML pomiędzy jego znacznikami:

```html
....
      </ul>
  </div>
  <!-- tutaj wklej kod z buttonami poniżej -->
</nav>
```

Kod z buttonami do dodania:

```html
<div>
  <a class="btn btn-primary mx-1 mx-sm-2"> Dodaj </a>
  <a class="btn btn-secondary"> Koszyk </a>
</div>
```

#### 1.2 👇 Dodanie brakujących [view](./src/views/)

Dodaj brakujące strony jako komponenty `*View.vue` do dodawania aukcji oraz obsługi koszyka

#### 1.3 👇

Podłącz strony z routingiem i menu (przyciski: **Dodaj** i **Koszyk**).

#### 1.4 👇 Kod `<template>` do dodawania aukcji:

```html
<PageView title="Dodaj nową aukcję">
  <section class="row">
    <div class="col-6">
      <img
        class="img-thumbnail"
        alt="Podgląd fotografii"
        src="https://picsum.photos/id/1/600/600"
      />
    </div>
    <div class="col-6">
      <form>
        <div class="form-group">
          <label for="auctionTitle">Nazwa aukcji</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"> </span>
            </div>
            <input id="auctionTitle" type="text" name="title" required class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <label for="auctionPrice">Cena aukcji</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"> </span>
            </div>
            <input id="auctionPrice" type="number" name="price" required class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <label for="img">Zdjecie</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"> </span>
            </div>
            <input id="img" type="number" name="imgUrl" required class="form-control" />
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
```

### Zadanie #2 | Obsługa `404` w routingu

#### 2.1 👇 Dodaj i przetestuj obsługę nieznanych ścieżek

Dokumentacja dla router:

- [Catch all / 404 Not found Route](https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route)

#### 2.2 👇

Dodaj komponent `*View` do obsługi `404` i w nim kod:

```html
<PageView title="😭 --[404]--">
  <div class="alert alert-warning">Nie posiadam strony: <code>{{ $route.fullPath }}</code></div>
  <div class="d-flex justify-content-center mt-4">
    <button class="btn btn-primary" @click="handleGoHomeClick">Wróc do strony głównej</button>
  </div>
</PageView>
```

#### 2.3 👇

Dodaj obsługę funkcji `handleGoHomeClick` gdzie programistycznie obsużysz przejście do ścieżki `/`, skorzystaj z _Composition API_ dla `router`

- [useRouter](https://router.vuejs.org/guide/advanced/composition-api.html#Accessing-the-Router-and-current-Route-inside-setup)

- [Programmatic Navigation](https://router.vuejs.org/guide/essentials/navigation.html#Programmatic-Navigation)

### Zadanie #3 | Dodanie ikon do projektu

> (3rd party lib z komponentem)

#### 3.1 👇 Doinstaluj dodatkowe packages z `@fortawesome`:

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`

> 💡HINT  
> możesz to zrobić jedną komedną:  
> `npm i nazwa_lib_1 nazwa_lib_2 nazwa_lib_3`

#### 3.2 👇

Użyj przykładowej ikony w `button`'ie komponentu [AuctionCard.vue](./src/components/auctions/AuctionCard.vue) za pomocą komponentu `FontAwesomeIcon`:

- setup:

```javascript
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
```

- template:

```html
...
<button class="btn btn-primary" @click="$emit('addToCart', auction)">
  <!-- dodany kod: -->
  <FontAwesomeIcon :icon="faCartPlus" />
</button>
```
