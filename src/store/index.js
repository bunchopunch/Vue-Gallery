import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
var apiRoot = 'https://jsonplaceholder.typicode.com/'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    status: {
      loading: false,
      error: false,
      errorText: ''
    },
    albums: [],
    photos: [],
    totals: {
      albums: 0,
      photos: 0
    }
  },
  mutations: {
    SET_ALBUMS (state, albumsPayload) {
      state.totals.albums = albumsPayload.total
      state.albums = albumsPayload.records
    },
    SET_PHOTOS (state, photosPayload) {
      // Set some extra properties, since Placeholder API is pretty basic
      state.photos = photosPayload.map((photo) => {
        photo.links = {
          self: `/Photo/${photo.id}`,
          file: photo.url
        }
        photo.desc = `A photo from Album ${photo.albumId}.`
        return photo
      })
    },
    SET_LOADING (state, loadingPayload) {
      state.status.loading = loadingPayload
    },
    SET_ERROR (state, errorPayload) {
      state.status.loading = false
      state.status.error = true
      state.status.errorText = errorPayload
    }
  },
  actions: {
    FETCH_ALBUMS: function ({ commit }, pageOptions = {pageNumber: 1}) {
      commit('SET_LOADING', 'true')
      axios.get(apiRoot + `albums?_page=${pageOptions.pageNumber}&_limit=16`)
        .then((albumsRes) => {
          // For each album, create a promise to get the first image
          let firstImgsPromises = albumsRes.data.map(function (albumEl) {
            return axios.get(`${apiRoot}photos?albumId=${albumEl.id}&_limit=1`)
          })
          axios.all(firstImgsPromises)
            .then((firstImgsRes) => {
              // Augment the response as if we had a more robust API
              commit('SET_ALBUMS', {
                records: albumsRes.data.map((currentAlbumEl, index, array) => {
                  currentAlbumEl.desc = `Album ${currentAlbumEl.id}. An ablum by User ${currentAlbumEl.userId}.`
                  currentAlbumEl.links = {
                    self: './album/' + currentAlbumEl.id,
                    thumbnail: firstImgsRes[index].data[0].thumbnailUrl,
                    fullSize: firstImgsRes[index].data[0].url
                  }
                  return currentAlbumEl
                }),
                type: 'albums',
                index: 0,
                total: 100 // From JSON API docs
              })
              commit('SET_LOADING', false)
            })
        }, (err) => {
          console.error('There was an issue retrieving the albums.', err)
          commit('SET_ERROR', 'There was an error retrieving the albums.')
        })
    },
    // TODO: Come back to incorporate id and page.
    FETCH_PHOTOS: function ({ commit }) {
      axios.get(apiRoot + 'photos')
      .then((response) => {
        commit('SET_PHOTOS', response.data)
      }, (err) => {
        console.error(err)
      })
    },

    POPULATE_STORE: function ({ commit }) {
      axios.all([
        axios.get(apiRoot + 'photos'),
        axios.get(apiRoot + 'albums')])
      .then(axios.spread((photosRes, albumsRes) => {
        commit('SET_PHOTOS', photosRes.data)
        commit('SET_ALBUMS', albumsRes.data)
      }), (err) => {
        console.error(err)
      })
    },

    START_LOADING: function ({ commit }) {
      commit('SET_LOADING', true)
    },

    END_LOADING: function ({ commit }) {
      commit('SET_LOADING', false)
    },

    SET_ERROR: function ({ commit }, errorOptions = {text: 'A generic Error has occured.'}) {
      commit('SET_ERROR', errorOptions.text)
    }
  },
  getters: {
    getStatus (state) {
      return state.status
    },
    getAlbums (state) {
      return state.albums
    },
    getAlbum () {},
    getPhotos (state) {
      return state.photos
    },
    getPhoto () {}
  }
})
