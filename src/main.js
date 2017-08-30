import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
  template: `
    <h1><router-link to='/'>GalleryApp</router-link></h1>
    <router-view></router-view>`
})
