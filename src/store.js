import { reactive } from 'vue'

export const store = reactive({
  isDropdownOpen: false,
  change() {
    this.isDropdownOpen = !this.isDropdownOpen
  },
})
