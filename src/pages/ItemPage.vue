<script setup>
import NavBar from '@/components/NavBar.vue'
import { getItem, parseEvadeShorthand } from '@/dbFunctions'
import { useRoute } from 'vue-router'

const route = useRoute()
const item = getItem(route.params.itemId)
</script>

<template>
  <NavBar />
  <h2>
    <img src="/public/icons/skull.png" />{{ item.name }}<span>🡳{{ item.levelFloor }}</span>
  </h2>
  <h3>{{ item.description }}</h3>
  <h3>[{{ item.nodrop ? 'NODROP' : 'YESDROP' }}]</h3>
  <h3>{{ item.from }}</h3>
  <table>
    <tr>
      <td>Patch</td>
      <td>{{ item.patch }}</td>
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
  </table>
  <table>
    <tr>
      <th>Attack Skills</th>
    </tr>
    <tr :key="skill" v-for="(amount, skill) in item.attackSkills">
      <td>{{ skill }}</td>
      <td>{{ amount }}%</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Defense Skills</th>
    </tr>
    <tr :key="skill" v-for="(amount, skill) in item.defenseSkills">
      <td>{{ parseEvadeShorthand(skill) }}</td>
      <td>{{ amount }}%</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Skill Checks</th>
    </tr>
    <tr :key="skill" v-for="(amount, skill) in item.skillChecks">
      <td>{{ parseEvadeShorthand(skill) }}</td>
      <td>{{ amount }}</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Specials</th>
    </tr>
    <tr :key="skill" v-for="(amount, skill) in item.specials">
      <td>{{ skill }}</td>
      <!-- oh no -->
      <td>{{ amount.split(' ')[0] }}</td>
      <td>({{ amount.split(' ')[1] }}s)</td>
    </tr>
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
