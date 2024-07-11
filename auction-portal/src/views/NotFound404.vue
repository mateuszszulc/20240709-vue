<script setup>
import PageView from '@/components/PageView.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleGoHomeClick() {
  router.push('/')
}
</script>

<template>
  <PageView title="😭 --[404]--">
    <div class="alert alert-warning">
      Nie posiadam strony: <code>{{ $route.fullPath }}</code>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <button class="btn btn-primary" @click="handleGoHomeClick">Wróc do strony głównej</button>
    </div>
  </PageView>
</template>
