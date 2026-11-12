<script setup>
import NavBar from '@/components/NavBar.vue'
import {
  getExpansion,
  getFloor,
  getProfession,
  getProjectRK,
  getType,
  getZone,
  searchIntoFilter,
} from '@/dbFunctions'
import { useRoute } from 'vue-router'

const route = useRoute()
const filterType = searchIntoFilter(route.params.filterOption)
</script>

<template>
  <NavBar />
  <div v-if="filterType === 'type'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in getType(route.params.filterOption)"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }} {{ item.levelFloor }}
      </h2></RouterLink
    >
  </div>
  <div v-if="filterType === 'profession'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in getProfession(route.params.filterOption)"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        <span>{{ item.levelFloor }}</span>
      </h2></RouterLink
    >
  </div>
  <div v-if="filterType === 'floor'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in getFloor(route.params.filterOption)"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        <span>{{ item.levelFloor }}</span>
      </h2></RouterLink
    >
  </div>
  <div v-if="filterType === 'zone'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in getZone(route.params.filterOption)"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        <span>{{ item.levelFloor }}</span>
      </h2></RouterLink
    >
  </div>
  <div v-if="filterType === 'expansion'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in getExpansion(route.params.filterOption)"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        <span>{{ item.levelFloor }}</span>
      </h2></RouterLink
    >
    >
  </div>
  <div v-if="filterType === 'prk'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in getProjectRK()"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        <span>{{ item.levelFloor }}</span>
      </h2></RouterLink
    >
  </div>
</template>

<style scoped>
img {
  margin-right: 1%;
}
h2 {
  display: flex;
  align-items: baseline;
}
</style>
