<script setup>
import NavBar from '@/components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <NavBar />
  <div v-if="route.params.searchOption === 'type'">
    <RouterLink to="/filter/1hb" class="bigLink"
      ><h2><img src="/icons/skull.png" />1 Handed Blunt</h2></RouterLink
    >
    <RouterLink to="/filter/2hb" class="bigLink"
      ><h2><img src="/icons/oof.png" />2 Handed Blunt</h2></RouterLink
    >
    <RouterLink to="/filter/1he" class="bigLink"
      ><h2><img src="/icons/oof.png" />1 Handed Edged</h2></RouterLink
    >
    <RouterLink to="/filter/2he" class="bigLink"
      ><h2><img src="/icons/oof.png" />2 Handed Edged</h2></RouterLink
    >
    <RouterLink to="/filter/martial-arts" class="bigLink"
      ><h2><img src="/icons/oof.png" />Martial Arts</h2></RouterLink
    >
    <RouterLink to="/filter/melee-energy" class="bigLink"
      ><h2><img src="/icons/oof.png" />Melee Energy</h2></RouterLink
    >
    <RouterLink to="/filter/piercing" class="bigLink"
      ><h2><img src="/icons/oof.png" />Piercing</h2></RouterLink
    >
    <RouterLink to="/filter/assault-rifle" class="bigLink"
      ><h2><img src="/icons/oof.png" />Assault Rifle</h2></RouterLink
    >
    <RouterLink to="/filter/bow" class="bigLink"
      ><h2><img src="/icons/oof.png" />Bow</h2></RouterLink
    >
    <RouterLink to="/filter/grenade" class="bigLink"
      ><h2><img src="/icons/oof.png" />Grenade</h2></RouterLink
    >
    <RouterLink to="/filter/pistol" class="bigLink"
      ><h2><img src="/icons/oof.png" />Pistol</h2></RouterLink
    >
    <RouterLink to="/filter/ranged-energy" class="bigLink"
      ><h2><img src="/icons/oof.png" />Ranged Energy</h2></RouterLink
    >
    <RouterLink to="/filter/rifle" class="bigLink"
      ><h2><img src="/icons/oof.png" />Rifle</h2></RouterLink
    >
    <RouterLink to="/filter/shotgun" class="bigLink"
      ><h2><img src="/icons/oof.png" />Shotgun</h2></RouterLink
    >
    <RouterLink to="/filter/sub-machine-gun" class="bigLink"
      ><h2><img src="/icons/oof.png" />Sub-Machine Gun</h2></RouterLink
    >
    <RouterLink to="/filter/miscellaneous" class="bigLink"
      ><h2><img src="/icons/oof.png" />Miscellaneous</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'profession'">
    <RouterLink to="/filter/adventurer" class="bigLink"
      ><h2><img src="/icons/oof.png" />Adventurer</h2></RouterLink
    >
    <RouterLink to="/filter/agent" class="bigLink"
      ><h2><img src="/icons/oof.png" />Agent</h2></RouterLink
    >
    <RouterLink to="/filter/bureaucrat" class="bigLink"
      ><h2><img src="/icons/oof.png" />Bureaucrat</h2></RouterLink
    >
    <RouterLink to="/filter/doctor" class="bigLink"
      ><h2><img src="/icons/oof.png" />Doctor</h2></RouterLink
    >
    <RouterLink to="/filter/enforcer" class="bigLink"
      ><h2><img src="/icons/oof.png" />Enforcer</h2></RouterLink
    >
    <RouterLink to="/filter/engineer" class="bigLink"
      ><h2><img src="/icons/oof.png" />Engineer</h2></RouterLink
    >
    <RouterLink to="/filter/fixer" class="bigLink"
      ><h2><img src="/icons/oof.png" />Fixer</h2></RouterLink
    >
    <RouterLink to="/filter/keeper" class="bigLink"
      ><h2><img src="/icons/oof.png" />Keeper</h2></RouterLink
    >
    <RouterLink to="/filter/martial-artist" class="bigLink"
      ><h2><img src="/icons/oof.png" />Martial Artist</h2></RouterLink
    >
    <RouterLink to="/filter/meta-physicist" class="bigLink"
      ><h2><img src="/icons/oof.png" />Meta-Physicist</h2></RouterLink
    >
    <RouterLink to="/filter/nano-technician" class="bigLink"
      ><h2><img src="/icons/oof.png" />Nano-Technician</h2></RouterLink
    >
    <RouterLink to="/filter/shade" class="bigLink"
      ><h2><img src="/icons/oof.png" />Shade</h2></RouterLink
    >
    <RouterLink to="/filter/soldier" class="bigLink"
      ><h2><img src="/icons/oof.png" />Soldier</h2></RouterLink
    >
    <RouterLink to="/filter/trader" class="bigLink"
      ><h2><img src="/icons/oof.png" />Trader</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'level'">
    <RouterLink to="/filter/15" class="bigLink"
      ><h2><img src="/icons/oof.png" />15</h2></RouterLink
    >
    <RouterLink to="/filter/25" class="bigLink"
      ><h2><img src="/icons/oof.png" />25</h2></RouterLink
    >
    <RouterLink to="/filter/45" class="bigLink"
      ><h2><img src="/icons/oof.png" />45</h2></RouterLink
    >
    <RouterLink to="/filter/65" class="bigLink"
      ><h2><img src="/icons/oof.png" />65</h2></RouterLink
    >
    <RouterLink to="/filter/95" class="bigLink"
      ><h2><img src="/icons/oof.png" />95</h2></RouterLink
    >
    <RouterLink to="/filter/125" class="bigLink"
      ><h2><img src="/icons/oof.png" />125</h2></RouterLink
    >
    <RouterLink to="/filter/175" class="bigLink"
      ><h2><img src="/icons/oof.png" />175</h2></RouterLink
    >
    <RouterLink to="/filter/200" class="bigLink"
      ><h2><img src="/icons/oof.png" />200</h2></RouterLink
    >
    <RouterLink to="/filter/205" class="bigLink"
      ><h2><img src="/icons/oof.png" />205</h2></RouterLink
    >
    <RouterLink to="/filter/215" class="bigLink"
      ><h2><img src="/icons/oof.png" />215</h2></RouterLink
    >
    <RouterLink to="/filter/220" class="bigLink"
      ><h2><img src="/icons/oof.png" />220</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'zone'">
    <RouterLink to="/filter/subway" class="bigLink"
      ><h2><img src="/icons/oof.png" />Subway</h2></RouterLink
    >
    <RouterLink to="/filter/steps" class="bigLink"
      ><h2><img src="/icons/oof.png" />Steps of Madness</h2></RouterLink
    >
    <RouterLink to="/filter/totw" class="bigLink"
      ><h2><img src="/icons/oof.png" />Temple of the Three Winds</h2></RouterLink
    >
    <RouterLink to="/filter/cyborg-barracks" class="bigLink"
      ><h2><img src="/icons/oof.png" />Cyborg Barracks</h2></RouterLink
    >
    <RouterLink to="/filter/foremans" class="bigLink"
      ><h2><img src="/icons/oof.png" />Foremans</h2></RouterLink
    >
    <RouterLink to="/filter/mantis-den" class="bigLink"
      ><h2><img src="/icons/oof.png" />Mantis Den</h2></RouterLink
    >
    <RouterLink to="/filter/the-reck" class="bigLink"
      ><h2><img src="/icons/oof.png" />The Reck</h2></RouterLink
    >
    <RouterLink to="/filter/new-subway" class="bigLink"
      ><h2><img src="/icons/oof.png" />New Subway</h2></RouterLink
    >
    <RouterLink to="/filter/new-totw" class="bigLink"
      ><h2><img src="/icons/oof.png" />New TOTW</h2></RouterLink
    >
    <RouterLink to="/filter/pyramid-of-home" class="bigLink"
      ><h2><img src="/icons/oof.png" />Pyramid of Home</h2></RouterLink
    >
    <RouterLink to="/filter/inner-sanctum" class="bigLink"
      ><h2><img src="/icons/oof.png" />Inner Sanctum</h2></RouterLink
    >
    <RouterLink to="/filter/camelot-castle" class="bigLink"
      ><h2><img src="/icons/oof.png" />Camelot Castle</h2></RouterLink
    >
    <RouterLink to="/filter/mercenaries" class="bigLink"
      ><h2><img src="/icons/oof.png" />Mercenaries</h2></RouterLink
    >
  </div>
  <div v-if="route.params.searchOption === 'expansion-pack'">
    <RouterLink to="/filter/fr00b" class="bigLink"
      ><h2><img src="/icons/oof.png" />Fr00b</h2></RouterLink
    >
    <RouterLink to="/filter/base" class="bigLink"
      ><h2><img src="/icons/oof.png" />Base</h2></RouterLink
    >
    <RouterLink to="/filter/shadowlands" class="bigLink"
      ><h2><img src="/icons/oof.png" />Shadowlands</h2></RouterLink
    >
    <RouterLink to="/filter/alien-invasion" class="bigLink"
      ><h2><img src="/icons/oof.png" />Alien Invasion</h2></RouterLink
    >
    <RouterLink to="/filter/lost-eden" class="bigLink"
      ><h2><img src="/icons/oof.png" />Lost Eden</h2></RouterLink
    >
    <RouterLink to="/filter/legacy-of-the-xan" class="bigLink"
      ><h2><img src="/icons/oof.png" />Legacy of the Xan</h2></RouterLink
    >
  </div>
</template>

<style scoped>
img {
  margin-right: 1%;
}
</style>
