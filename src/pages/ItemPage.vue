<script setup>
import NavBar from '@/components/NavBar.vue'
import {
  extractSpecials,
  getItem,
  parseDropsShorthand,
  parseEvadeShorthand,
  parseExpacShorthand,
  parseSlotShorthand,
  parseUniverseShorthand,
  universeIntoLink,
} from '@/dbFunctions'
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
    <img :src="`/icons/${item.iconSrc}.png`" />{{ item.name }}<span>{{ item.levelFloor }}</span>
  </h2>
  <h3>{{ item.description }}</h3>
  <h3 v-if="item.proc">{{ item.proc }}</h3>
  <h3>[{{ item.IsNodrop ? 'NODROP' : 'YESDROP' }}] [{{ parseExpacShorthand(item.expansion) }}]</h3>
  <h3>{{ parseDropsShorthand(item.from) }}</h3>
  <table class="bigItemTable">
    <tbody :key="route.params">
      <tr v-if="item.isMultiplePatches">
        <!-- items that exist on both servers in different versions  -->
        <td>Patch</td>
        <td v-if="item.isRebalance">
          <RouterLink v-if="item.isRebalance" :to="`/item/${item.id}/pre`">
            <span>Project Rubi-ka / Pre 18.5</span>
          </RouterLink>
          Retail / 18.5+
        </td>
        <!-- switch between the two active patch buttons -->
        <td v-if="!item.isRebalance">
          Project Rubi-ka / Pre 18.5
          <RouterLink v-if="!item.isRebalance" :to="`/item/${item.id}/post`">
            <span>Retail / 18.5+</span>
          </RouterLink>
        </td>
      </tr>
      <!-- items that only exist on prk -->
      <tr v-if="item.expansion === '6'">
        <td>Patch</td>
        <td>Project Rubi-ka only</td>
      </tr>
      <tr>
        <td>QL</td>
        <td>
          <span v-if="item.minQl">{{ item.minQl }}-</span>{{ item.ql }}
        </td>
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
        <td>Item Slot</td>
        <td>{{ parseSlotShorthand(item.slot) }}</td>
      </tr>
      <tr v-if="item.slot == '1' || item.slot == '3'">
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
      <tr
        :key="key"
        v-for="(values, key) in extractSpecials(
          item.skillChecks,
          item.attackTime,
          item.rechargeTime,
          item.cycles.fa,
          item.cycles.burst,
        )"
      >
        <td>{{ key }}</td>
        <td>{{ values.skill }} for {{ values.cap }}s</td>
      </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <tr>
        <th>Relevent Links</th>
      </tr>
      <tr>
        <td v-if="item.aoUniverse">AO-Universe</td>
        <td v-if="item.aoUniverse">
          <a
            :href="`https://www.ao-universe.com/guides/${universeIntoLink(item.aoUniverse)}`"
            target="blank"
            >{{ parseUniverseShorthand(item.aoUniverse) }}</a
          >
        </td>
      </tr>
      <tr v-if="item.expansion !== '6'">
        <td>Auno</td>
        <td>
          <a :href="`https://auno.org/ao/db.php?id=${item.id}`" target="blank">Auno Item Page</a>
          (default retail)
        </td>
      </tr>
      <tr v-if="item.expansion !== '6' && route.params.patch !== 'pre'">
        <td>AO Galaxy</td>
        <td>
          <a :href="`https://www.aogalaxy.com/_items/item.php?aoid=${item.id}`" target="blank"
            >AO Galaxy Item Page</a
          >
          (only retail)
        </td>
      </tr>
      <tr v-if="item.expansion !== '6' && route.params.patch !== 'pre'">
        <td>TinkerTools Retail</td>
        <td>
          <a :href="`https://ao.tinkeringidiot.com/items/${item.id}`" target="blank"
            >TinkerTools Item Page</a
          >
        </td>
      </tr>
      <tr v-if="!item.isRebalance">
        <td>TinkerTools PRK</td>
        <td>
          <a :href="`https://prk.tinkeringidiot.com/items/${item.id}`" target="blank"
            >TinkerTools Item Page</a
          >
        </td>
      </tr>
      <tr v-if="!item.isRebalance">
        <td>Project Rubi-ka Portal</td>
        <td>
          <a
            :href="`https://portal.project-rk.com/Servers/ItemDetail/ithaca/${item.id}`"
            target="blank"
            >Portal Item Page</a
          >
          (requires sign-in)
        </td>
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
table {
  border-spacing: 6.7px;
  margin-bottom: 1%;
}
td {
  padding: 2px 4px 2px 4px;
}
@media screen and (min-width: 1024px) {
  td {
    text-wrap: nowrap;
  }
}
@media (prefers-color-scheme: dark) {
  .bigItemTable tbody tr:nth-child(odd) {
    background-color: var(--dark-table);
  }
}
@media (prefers-color-scheme: light) {
  .bigItemTable tbody tr:nth-child(odd) {
    background-color: whitesmoke;
  }
}
</style>
