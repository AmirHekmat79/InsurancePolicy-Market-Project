import { defineStore } from 'pinia'
import { Notify } from 'quasar'

export const useInfoStore = defineStore('info', {
  state: () => ({
    // counter: 0
  }),

  getters: {
    // doubleCount (state) {
    //   return state.counter * 2
    // }
  },

  actions: {
    // increment () {
    //   this.counter++
    // }
    showNotify(message,color) {
      Notify.create({
        message: message,
        color: `${color}-5`,
        timeout: 3000,
        position: 'bottom-right',
        actions: [{ icon: 'close', color: 'white' }]
      })
    }
  }
})
