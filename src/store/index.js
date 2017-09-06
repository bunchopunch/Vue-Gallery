import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  getters: {
    getAlbums () {},
    getAlbum () {},
    getPhotos () {},
    getPhoto () {}
  },
  setters: {
  },
  actions
})
