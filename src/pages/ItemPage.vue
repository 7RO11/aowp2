<script setup>
import NavBar from '@/components/NavBar.vue'
import { extractSpecials, getItem, parseEvadeShorthand } from '@/dbFunctions'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let item = undefined
function filterByPatch(id, patch) {
  if (patch === 'pre') {
    return getItem(id, false)
  } else {
    return getItem(id)
  }
}
item = filterByPatch(route.params.itemId, route.params.patch)

watch(
  () => route.params.patch,
  () => {
    item = filterByPatch(route.params.itemId, route.params.patch)
  },
)
</script>

<template>
  <NavBar />
  <h2>
    <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}<span>🡳{{ item.levelFloor }}</span>
  </h2>
  <h3>{{ item.description }}</h3>
  <h3 v-if="item.proc">{{ item.proc }}</h3>
  <h3>[{{ item.IsNodrop ? 'NODROP' : 'YESDROP' }}]</h3>
  <h3>{{ item.from }}</h3>
  <table>
    <tbody :key="route.params">
      <tr v-if="item.isMultiplePatches">
        <td>Patch</td>
        <RouterLink v-if="item.isRebalance" :to="`/item/${item.id}/pre`">
          <td>Project Rubi-ka / Pre 18.5</td>
        </RouterLink>
        <td v-if="item.isRebalance">||</td>
        <td v-if="item.isRebalance">Retail / 18.5+</td>

        <td v-if="!item.isRebalance">Project Rubi-ka / Pre 18.5</td>
        <td v-if="!item.isRebalance">||</td>
        <RouterLink v-if="!item.isRebalance" :to="`/item/${item.id}/post`">
          <td>Retail / 18.5+</td>
        </RouterLink>
      </tr>
      <tr>
        <td>QL</td>
        <td>{{ item.ql }}</td>
      </tr>
      <tr>
        <td>Equip Time</td>
        <td>{{ item.equipTime }}s</td>
      </tr>
      <tr>
        <td>Attack Time</td>
        <td>{{ item.attackTime }}s</td>
      </tr>
      <tr>
        <td>Recharge Time</td>
        <td>{{ item.rechargeTime }}s</td>
      </tr>
      <tr>
        <td>Range</td>
        <td>{{ item.range }}m</td>
      </tr>
      <tr v-if="item.clip !== '0'">
        <td>Magazine Size</td>
        <td>{{ item.clip }}</td>
      </tr>
      <tr v-if="item.ammo !== '0'">
        <td>Ammunition Type</td>
        <td>{{ item.ammo }}</td>
      </tr>
      <tr>
        <td>Damage</td>
        <td>{{ item.minimumDamage }}-{{ item.maximumDamage }} ({{ item.criticalModifier }})</td>
      </tr>
      <tr>
        <td>Damage Type</td>
        <td>{{ item.damageType }}</td>
      </tr>
      <tr>
        <td>Maximum Beneficial Skill</td>
        <td>{{ item.maximumBeneficialSkill }}</td>
      </tr>
      <tr>
        <td>Dual Wield Requirement</td>
        <td>{{ item.multiRequirement }}</td>
      </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <tr>
        <th>Attack Skills</th>
      </tr>
      <tr :key="skill" v-for="(amount, skill) in item.attackSkills">
        <td>{{ skill }}</td>
        <td>{{ amount }}%</td>
      </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <tr>
        <th>Defense Skills</th>
      </tr>
      <tr :key="skill" v-for="(amount, skill) in item.defenseSkills">
        <td>{{ parseEvadeShorthand(skill) }}</td>
        <td>{{ amount }}%</td>
      </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <tr>
        <th>Skill Checks</th>
      </tr>
      <tr :key="skill" v-for="(amount, skill) in item.skillChecks">
        <td>{{ parseEvadeShorthand(skill) }}</td>
        <td>{{ amount }}</td>
      </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <tr>
        <th>Specials</th>
      </tr>
      <tr :key="key" v-for="(values, key) in extractSpecials(item.skillChecks, item.attackTime)">
        <td>{{ key }}</td>
        <td>{{ values.skill }} for {{ values.cap }}s</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
img {
  margin-right: 1%;
}
span {
  margin-left: 0.67%;
}
</style>
