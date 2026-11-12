<script setup>
import NavBar from '@/components/NavBar.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterLink to="/search/type" class="bigLink"><h2>Search by weapon type</h2></RouterLink>
  <RouterLink to="/search/profession" class="bigLink"><h2>Search by profession</h2></RouterLink>
  <RouterLink to="/search/level" class="bigLink"><h2>Search by level floor</h2></RouterLink>
  <RouterLink to="/search/zone" class="bigLink"><h2>Search by zone</h2></RouterLink>
  <RouterLink to="/search/expansion-pack" class="bigLink"
    ><h2>Search by expansion pack</h2></RouterLink
  >
  <RouterLink to="/filter/project-rubi-ka" class="bigLink"
    ><h2>Search Project Rubi-ka custom items</h2></RouterLink
  >
</template>

<style scoped>
h2 {
  display: flex;
}
</style>
