import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
var apiRoot = 'https://jsonplaceholder.typicode.com/'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    albums: [],
    photos: []
  },
  mutations: {
    SET_ALBUMS (state, albums) {
      state.albums = albums
    },
    SET_PHOTOS (state, photos) {
      state.photos = photos
    }
  },
  actions: {
    FETCH_ALBUMS: function ({ commit }) {
      axios.get(apiRoot + 'albums')
      .then((response) => {
        commit('SET_ALBUMS', { list: response.data })
      }, (err) => {
        console.error(err)
      })
    },
    // TODO: Come back to incorporate id and page.
    FETCH_PHOTOS: function ({ commit }) {
      axios.get(apiRoot + 'photos')
      .then((response) => {
        commit('SET_PHOTOS', { list: response.data })
      }, (err) => {
        console.error(err)
      })
    }
  },
  getters: {
    getAlbums () {},
    getAlbum () {},
    getPhotos () {},
    getPhoto () {}
  }
})
