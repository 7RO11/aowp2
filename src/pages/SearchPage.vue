<script setup>
import NavBar from '@/components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <NavBar />
  <div v-if="route.params.searchOption === 'type'">
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/skull.png" />1 Handed Blunt</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />2 Handed Blunt</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />1 Handed Edged</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />2 Handed Edged</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Martial Arts</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Melee Energy</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Piercing</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Assault Rifle</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Bow</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Grenade</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Pistol</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Ranged Energy</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Rifle</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Shotgun</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Sub-Machine Gun</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Miscellaneous</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'profession'">
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Adventurer</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Agent</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Bureaucrat</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Doctor</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Enforcer</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Engineer</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Fixer</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Keeper</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Martial Artist</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Meta-Physicist</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Nano-Technician</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Shade</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Soldier</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Trader</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'level'">
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />15</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />25</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />45</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />65</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />95</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />125</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />175</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />200</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />205</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />215</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'zone'">
    <h3>Locations that you may play by yourself or with a team.</h3>
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Subway</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Temple of the Three Winds</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Cyborg Barracks</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Foremans</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Mantis Den</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />The Reck</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />New Subway</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />New TOTW</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Pyramid of Home</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'raid'">
    <h3>Locations that you may need more than 6 players.</h3>
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Inner Sanctum</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Camelot Castle</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Mercenaries</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'expansion-pack'">
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Base (Froob)</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Base</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Shadowlands</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Alien Invasion</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Lost Eden</h2></RouterLink
    >
    <RouterLink to="/" class="bigLink"
      ><h2><img src="/public/icons/oof.png" />Legacy of the Xan</h2></RouterLink
    >
  </div>
</template>

<style scoped>
img {
  margin-right: 1%;
}
</style>
