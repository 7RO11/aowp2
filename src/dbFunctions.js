import { itemDb } from '../itemDb'

export function getType(type) {
  // returns all the weapons of a specific type.
  let filteredDb = []
  for (const item of itemDb) {
    if (item.type === type) {
      if (item.isMultiplePatches) {
        if (!item.isRebalance) {
          filteredDb.push(item)
        }
      } else {
        filteredDb.push(item)
      }
    }
  }
  return filteredDb
}

export function getItem(id, isRebalance = true) {
  // returns a single item object from id. picks either pre or post rebalance version of items if 2 are filtered
  let itemObject
  for (const item of itemDb) {
    if (item.id === id && item.isRebalance === isRebalance) {
      itemObject = item
    }
  }
  return itemObject
}

export function parseEvadeShorthand(number) {
  // returns an evade skill based on a number. if its not a single digit, return as is. number is a string
  if (number.length > 1) {
    return number
  }
  if (number == 0) {
    return 'Evade close'
  }
  if (number == 1) {
    return 'Dodge Ranged'
  }
  if (number == 2) {
    return 'Duck Explosions'
  }
  return false
}

export function extractSpecials(skillChecks, attackTime) {
  let specialsObject = {}
  for (const skill in skillChecks) {
    if (skill === 'Fast Attack') {
      specialsObject['Fast Attack'] = calculateFastAttackFling(Number(attackTime))
    }
  }
  return specialsObject
}

// copied from tinkertools formulas
// https://github.com/TheTinkeringIdiot/Tinkertools/blob/main/frontend/src/services/game-utils.ts

export function calculateFastAttackFling(attackTime) {
  // skill is how much fast attack/fling required to reach speed cap, cap is seconds
  let skill = Math.round((attackTime * 16 - 6) * 100) + 1
  let cap = Math.floor(5 + attackTime)
  return { skill, cap }
}
