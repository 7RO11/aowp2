import { reactive } from 'vue'

export const store = reactive({
  isDropdownOpen: false,
  change() {
    this.isDropdownOpen = !this.isDropdownOpen
  },
  isSpecialFiltered: false,
  setSpecialFiltered() {
    this.isSpecialFiltered = true
  },
  resetSpecialFiltered() {
    this.isSpecialFiltered = false
    this.specials = {}
  },
  specials: {},
  setFastAttack() {
    this.specials.isFastAttack = !this.specials.isFastAttack
  },
  setBrawl() {
    this.specials.isBrawl = !this.specials.isBrawl
  },
  setDimach() {
    this.specials.isDimach = !this.specials.isDimach
  },
  setFlingShot() {
    this.specials.isFlingShot = !this.specials.isFlingShot
  },
  setBurst() {
    this.specials.isBurst = !this.specials.isBurst
  },
  setFullAuto() {
    this.specials.isFullAuto = !this.specials.isFullAuto
  },
  setAimedShot() {
    this.specials.isAimedShot = !this.specials.isAimedShot
  },
})
