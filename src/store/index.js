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
    SET_ALBUMS (state, albumsRes) {
      // TODO: Why is .list needed? Is vuex adding that?
      state.albums = albumsRes.list.map((album) => {
        // TODO: Doing the map and find is going to get expensive.
        album.thumbnailUrl = state.photos.list.find((photo) => photo.albumId === album.id).thumbnailUrl
        return album
      })
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
    },

    POPULATE_STORE: function ({ commit }) {
      axios.all([
        axios.get(apiRoot + 'photos'),
        axios.get(apiRoot + 'albums')])
      .then(axios.spread((photosRes, albumsRes) => {
        commit('SET_PHOTOS', { list: photosRes.data })
        commit('SET_ALBUMS', { list: albumsRes.data })
      }), (err) => {
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
