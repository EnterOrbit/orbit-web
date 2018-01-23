import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'

export const store = new Vuex.Store({
  state
})
