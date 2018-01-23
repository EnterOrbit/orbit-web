import Vue from 'vue'
import VueRouter from 'vue-router'
import Orbit from './Orbit'

// Import router which uses vue-router
import { sync } from 'vuex-router-sync'
import routes from './router'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes : routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

sync(store, router)

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(Orbit)
})
