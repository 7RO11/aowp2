import { itemDb } from '../public/itemDb'

export function getType(type) {
  // returns all the weapons of a specific type
  let filteredDb = []
  for (const item of itemDb) {
    if (item.type === type) {
      filteredDb.push(item)
    }
  }
  return filteredDb
}

export function getItem(id) {
  // returns a single item object from id
  let itemObject
  for (const item of itemDb) {
    if (item.id === id) {
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
