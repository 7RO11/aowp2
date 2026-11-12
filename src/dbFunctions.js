import { itemDb } from '../itemDb'

const types = [
  '1hb',
  '2hb',
  '1he',
  '2he',
  'martial-arts',
  'melee-energy',
  'piercing',
  'assault-rifle',
  'bow',
  'grenade',
  'pistol',
  'ranged-energy',
  'rifle',
  'shotgun',
  'sub-machine-gun',
  'miscellaneous',
]

const professions = [
  'adventurer',
  'agent',
  'bureaucrat',
  'doctor',
  'enforcer',
  'engineer',
  'fixer',
  'keeper',
  'martial-artist',
  'meta-physicist',
  'nano-technician',
  'shade',
  'soldier',
  'trader',
]

const zones = [
  'subway',
  'steps',
  'totw',
  'cyborg-barracks',
  'foremans',
  'mantis-den',
  'the-reck',
  'new-subway',
  'new-totw',
  'pyramid-of-home',
  'inner-sanctum',
  'camelot-castle',
  'mercenaries',
]

const expansions = [
  'fr00b',
  'basegame',
  'shadowlands',
  'alien-invasion',
  'lost-eden',
  'legacy-of-the-xan',
]

export function searchIntoFilter(param) {
  // looks up the search option to return the filter type
  for (const string of types) {
    if (string === param) {
      return 'type'
    }
  }
  for (const string of professions) {
    if (string === param) {
      return 'profession'
    }
  }
  if (!isNaN(Number(param))) {
    return 'floor'
  }
  for (const string of zones) {
    if (string === param) {
      return 'zone'
    }
  }
  for (const string of expansions) {
    if (string === param) {
      return 'expansion'
    }
  }
  if (param === 'project-rubi-ka') {
    return 'prk'
  }
  return false
}

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

export function getProfession(profession) {
  // returns all the weapons of a specific profession.
  let filteredDb = []
  for (const item of itemDb) {
    console.log(item)
    for (const itemProfession of item.profs) {
      console.log(itemProfession)
      if (itemProfession === profession) {
        if (item.isMultiplePatches) {
          if (!item.isRebalance) {
            filteredDb.push(item)
          }
        } else {
          filteredDb.push(item)
        }
      }
    }
  }
  return filteredDb
}

export function getFloor(floor) {
  // returns all the weapons of a specific level floor.
  let filteredDb = []
  for (const item of itemDb) {
    if (item.levelFloor === floor) {
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

export function getZone(zone) {
  // returns all the weapons of a specific zone.
  let filteredDb = []
  for (const item of itemDb) {
    if (item.location === zone) {
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

export function getExpansion(expansion) {
  // returns all the weapons of a specific expansion.
  let filteredDb = []
  for (const item of itemDb) {
    if (parseExpacShorthand(item.expansion).replace(/\s/g, '-').toLowerCase() === expansion) {
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

export function getProjectRK() {
  // returns all the custom prk items
  let filteredDb = []
  for (const item of itemDb) {
    if (!item.isMultiplePatches && !item.isRebalance) {
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
  // returns a single item object from id. picks the post rebalance version first if 2 are filtered
  let itemObject
  for (const item of itemDb) {
    if (item.id === id && item.isRebalance === isRebalance) {
      itemObject = item
      return itemObject
    }
  }
  for (const item of itemDb) {
    if (item.id === id && item.isRebalance !== isRebalance) {
      itemObject = item
      return itemObject
    }
  }
  return false
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

export function parseSlotShorthand(number) {
  // returns an item slot based on a number. if its not a single digit, return as is. number is a string
  if (number.length > 1) {
    return number
  }
  if (number == 0) {
    return 'Right hand, two hander'
  }
  if (number == 1) {
    return 'Right hand only, one hander'
  }
  if (number == 2) {
    return 'Left hand only, two hander'
  }
  if (number == 3) {
    return 'Left hand only, one hander'
  }
  if (number == 4) {
    return 'Right or left hand'
  }
  return false
}

export function parseExpacShorthand(number) {
  // returns an string based on a number. if its not a single digit, return as is. number is a string
  if (number.length > 1) {
    return number
  }
  if (number == 0) {
    return 'FR00B'
  }
  if (number == 1) {
    return 'BASEGAME'
  }
  if (number == 2) {
    return 'SHADOWLANDS'
  }
  if (number == 3) {
    return 'ALIEN INVASION'
  }
  if (number == 4) {
    return 'LOST EDEN'
  }
  if (number == 5) {
    return 'LEGACY OF THE XAN'
  }
  if (number == 6) {
    return 'PROJECT RUBI-KA'
  }
  return false
}

export function parseDropsShorthand(string) {
  // returns an string based on a shorthand. if its not a single word, return as is.
  if (string.includes(' ')) {
    return string
  }
  if (string === 'rsc') {
    return 'This is a rollable, shop buyable, common loot pool item.'
  }
  return false
}

export function extractSpecials(skillChecks, attackTime, rechargeTime, fullAutoCycle, burstCycle) {
  let specialsObject = {}
  for (const skill in skillChecks) {
    if (skill === 'Fast Attack') {
      specialsObject['Fast Attack'] = calculateFastAttackFling(Number(attackTime))
    }
    if (skill === 'Fling Shot') {
      specialsObject['Fling Shot'] = calculateFastAttackFling(Number(attackTime))
    }
    if (skill === 'Full Auto') {
      specialsObject['Full Auto'] = calculateFullAuto(
        Number(attackTime),
        Number(rechargeTime),
        Number(fullAutoCycle),
      )
    }
    if (skill === 'Burst') {
      specialsObject['Burst'] = calculateBurst(
        Number(attackTime),
        Number(rechargeTime),
        Number(burstCycle),
      )
    }
    if (skill === 'Aimed Shot') {
      specialsObject['Aimed Shot'] = calculateAimedShot(Number(attackTime), Number(rechargeTime))
    }
  }
  return specialsObject
}

// copied from tinkertools formulas
// https://github.com/TheTinkeringIdiot/Tinkertools/blob/main/frontend/src/services/game-utils.ts

export function calculateFastAttackFling(attackTime) {
  // skill is how much relevent skill required to reach speed cap, cap is seconds
  let skill = Math.round((attackTime * 16 - 6) * 100) + 1
  let cap = Math.floor(5 + attackTime)
  return { skill, cap }
}

export function calculateFullAuto(attackTime, rechargeTime, fullAutoCycle) {
  const cap = Math.floor(10 + attackTime)
  if (fullAutoCycle === 0) {
    fullAutoCycle = 1000
  }
  const skill = Math.floor((rechargeTime * 40 + fullAutoCycle / 100 - 12 + attackTime) * 25) + 1
  return { skill, cap }
}

export function calculateBurst(attackTime, rechargeTime, burstCycle) {
  const cap = Math.floor(attackTime / 100 + 8)
  const skill = Math.floor((rechargeTime * 20 + burstCycle / 100 - 10 + attackTime) * 25) + 1
  return { skill, cap }
}

export function calculateAimedShot(attackTime, rechargeTime) {
  const cap = Math.floor(attackTime / 100 + 10)
  const skill = Math.floor(((rechargeTime * 40 + attackTime - 12) * 100) / 3)
  return { skill, cap }
}
