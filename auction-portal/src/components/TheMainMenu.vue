<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const menuItems = [
  { href: '/auctions', title: 'Aukcje' },
  { href: '/promotions', title: 'Promocje' },
  { href: '/advices', title: 'Podpowiadamy' }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" @click="toggleMenu()" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="item of menuItems" :key="item.href">
          <a class="nav-link" :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
