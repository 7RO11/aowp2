<script setup>
import { RouterLink } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import { store } from '@/store'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <div class="navbar">
    <RouterLink class="marginBig" to="/"><h1>AOWP</h1></RouterLink>
    <div v-if="isLargeScreen" class="navbar">
      <RouterLink class="marginSmall" to="/"><h2>Home</h2></RouterLink>
      <RouterLink class="marginSmall" to="/about"><h2>About</h2></RouterLink>
      <RouterLink class="marginSmall" to="/index"><h2>Index</h2></RouterLink>
      <RouterLink class="marginSmall" to="/guides"><h2>PRK Guides</h2></RouterLink>
    </div>
    <div v-else class="menuIcon"><h1 @click="store.change()">☰</h1></div>
    <div v-if="store.isDropdownOpen">
      <br />
      <RouterLink class="marginSmall" to="/" @click="store.change()"><h2>Home</h2></RouterLink>
      <RouterLink class="marginSmall" to="/about" @click="store.change()"
        ><h2>About</h2></RouterLink
      >
      <RouterLink class="marginSmall" to="/index" @click="store.change()"
        ><h2>Index</h2></RouterLink
      >
      <RouterLink class="marginSmall" to="/guides" @click="store.change()"
        ><h2>PRK Guides</h2></RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: baseline;
  border-bottom: 2px solid var(--border-color);
  width: 100%;
}
.marginBig {
  margin-right: 1.5%;
  text-decoration: none;
}
.marginSmall {
  margin-right: 1%;
  text-decoration: none;
}
.menuIcon {
  margin-left: 3%;
}

@media (prefers-color-scheme: dark) {
  .marginSmall:hover {
    color: lightskyblue;
    text-decoration: underline;
  }
  .marginSmall:active {
    color: red;
    text-decoration: underline;
  }
  .marginBig,
  .marginSmall {
    color: white;
  }
}

@media (prefers-color-scheme: light) {
  .marginSmall:hover {
    color: blue;
    text-decoration: underline;
  }
  .marginSmall:active {
    color: red;
    text-decoration: underline;
  }
  .marginBig,
  .marginSmall {
    color: black;
  }
}
</style>
