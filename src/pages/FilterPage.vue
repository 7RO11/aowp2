<script setup>
import NavBar from '@/components/NavBar.vue'
import { getType } from '@/dbFunctions'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <NavBar />
  <RouterLink
    class="bigLink"
    :to="`/item/${item.id}`"
    :key="item.id"
    v-for="item in getType(route.params.filterOption)"
    ><h2>
      <img src="/public/icons/skull.png" />{{ item.name }}
      <span>🡳{{ item.levelFloor }}</span>
    </h2></RouterLink
  >
</template>

<style scoped>
img {
  margin-right: 1%;
}
span {
  margin-left: 0.67%;
}
</style>
