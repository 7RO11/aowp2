<script setup>
import NavBar from '@/components/NavBar.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterLink to="/search/type" class="bigLink"
    ><h2><span>⚔︎</span> Search by weapon type</h2></RouterLink
  >
  <RouterLink to="/search/profession" class="bigLink"
    ><h2><span>✚</span> Search by profession</h2></RouterLink
  >
  <RouterLink to="/search/level" class="bigLink"
    ><h2><span>🡳</span> Search by level floor</h2></RouterLink
  >
  <RouterLink to="/search/zone" class="bigLink"
    ><h2><span>⚲</span>  Search by dungeon</h2></RouterLink
  >
  <RouterLink to="/search/raid" class="bigLink"
    ><h2><span>🗪</span>  Search by raid</h2></RouterLink
  >
  <RouterLink to="/search/expansion-pack" class="bigLink"
    ><h2><span>$</span>  Search by expansion pack</h2></RouterLink
  >
  <RouterLink to="/search/custom" class="bigLink"
    ><h2><span>✈︎</span> Search Project Rubi-ka custom items</h2></RouterLink
  >
</template>

<style scoped></style>
