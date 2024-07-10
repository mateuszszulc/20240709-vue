# Zadania na start
## Dzień 2

### Zadanie #1 | Konfiguracja dev

Zmień zapisy w skrypcie `dev` tak, aby po jego uruchomieniu, otwierała się domyślna przeglądarka a serwer dev osadzał się na porcie `5100`.  
- Skorzystaj z dokumentacji vite: [CLI guide](https://vitejs.dev/guide/cli.html).


### Zadanie #2 | Modyfikacje w [TheManinMenu.vue](./src/components/TheMainMenu.vue)

#### 2.1 👇 
Spraw aby kod reprezentujący elementy menu:

```html
<li class="nav-item">
    <a class="nav-link" href="auctions">Aukcje</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="promotions">Promocje</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="advices">Podpowiadamy</a>
</li>
```

był tworzony aytomatycznie, na podstawie modelu danych w logice `<script setup>` tego komponentu

- Pomocny link z doc: [v-for](https://vuejs.org/api/built-in-directives.html#v-for)

#### 2.2 👇
Dodaj obslugę burger menu: `button.navbar-toggler` tak aby po jego kliknięciu do elementu:

```
div.collapse.navbar-collapse
```

dodawała się klasa css: `show`

w zależności czy menu jest otwarte czy zamknięte

> ⚠️ Pamiętaj o zmienjszeniu okna przeglądarki aby móc zobaczyć burger menu 

pomocne linki z dokumentacji do manipulacji klasami css elementu:

- Pomocny link z doc: [Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style.html#class-and-style-bindings)