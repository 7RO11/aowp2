<script setup>
import NavBar from '@/components/NavBar.vue'
import {
  filterBySpecial,
  getExpansion,
  getFloor,
  getProfession,
  getProjectRK,
  getType,
  getZone,
  searchIntoFilter,
} from '@/dbFunctions'
import { useRoute } from 'vue-router'
import { store } from '@/store'

const route = useRoute()
const filterType = searchIntoFilter(route.params.filterOption)

function storeCourier(type) {
  switch (type) {
    case 'fas':
      store.setFastAttack()
      break
    case 'br':
      store.setBrawl()
      break
    case 'di':
      store.setDimach()
      break
    case 'fl':
      store.setFlingShot()
      break
    case 'bu':
      store.setBurst()
      break
    case 'fa':
      store.setFullAuto()
      break
    case 'as':
      store.setAimedShot()
      break

    default:
      break
  }
  store.setSpecialFiltered()
}
</script>

<template>
  <NavBar />
  <h3 v-if="store.isSpecialFiltered">Filters Active!</h3>
  <h3 v-else>No filters active</h3>
  <div class="filters">
    <button @click="store.resetSpecialFiltered()">Reset</button>
    <span @click="storeCourier('fas')">
      <input type="checkbox" :checked="store.specials.isFastAttack" />
      <label>Fast Attack</label>
    </span>
    <span @click="storeCourier('br')">
      <input type="checkbox" :checked="store.specials.isBrawl" />
      <label>Brawl</label>
    </span>
    <span @click="storeCourier('di')">
      <input type="checkbox" :checked="store.specials.isDimach" />
      <label>Dimach</label>
    </span>
    <span @click="storeCourier('fl')">
      <input type="checkbox" :checked="store.specials.isFlingShot" />
      <label>Fling Shot</label>
    </span>
    <span @click="storeCourier('bu')">
      <input type="checkbox" :checked="store.specials.isBurst" />
      <label>Burst</label>
    </span>
    <span @click="storeCourier('fa')">
      <input type="checkbox" :checked="store.specials.isFullAuto" />
      <label>Full Auto</label>
    </span>
    <span @click="storeCourier('as')">
      <input type="checkbox" :checked="store.specials.isAimedShot" />
      <label>Aimed Shot</label>
    </span>
  </div>
  <div v-if="filterType === 'type'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in filterBySpecial(
        getType(route.params.filterOption),
        store.specials,
        store.isSpecialFiltered,
      )"
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
      v-for="item in filterBySpecial(
        getProfession(route.params.filterOption),
        store.specials,
        store.isSpecialFiltered,
      )"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        {{ item.levelFloor }}
      </h2></RouterLink
    >
  </div>
  <div v-if="filterType === 'floor'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in filterBySpecial(
        getFloor(route.params.filterOption),
        store.specials,
        store.isSpecialFiltered,
      )"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        {{ item.levelFloor }}
      </h2></RouterLink
    >
  </div>
  <div v-if="filterType === 'zone'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in filterBySpecial(
        getZone(route.params.filterOption),
        store.specials,
        store.isSpecialFiltered,
      )"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        {{ item.levelFloor }}
      </h2></RouterLink
    >
  </div>
  <div v-if="filterType === 'expansion'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in filterBySpecial(
        getExpansion(route.params.filterOption),
        store.specials,
        store.isSpecialFiltered,
      )"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        {{ item.levelFloor }}
      </h2></RouterLink
    >
    >
  </div>
  <div v-if="filterType === 'prk'">
    <RouterLink
      class="bigLink"
      :to="`/item/${item.id}`"
      :key="item.id"
      v-for="item in filterBySpecial(
        getProjectRK(route.params.filterOption),
        store.specials,
        store.isSpecialFiltered,
      )"
      ><h2>
        <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}
        {{ item.levelFloor }}
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
span {
  user-select: none;
}
@media screen and (max-width: 1024px) {
  .filters {
    display: flex;
    flex-direction: column;
  }
}
</style>
