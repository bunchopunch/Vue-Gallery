import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
var apiRoot = 'https://jsonplaceholder.typicode.com/'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    albums: [],
    photos: [],
    totals: {
      albums: 0,
      photos: 0
    }
  },
  mutations: {
    SET_ALBUMS (state, albumsPayload) {
      console.log(albumsPayload)
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
    }
  },
  actions: {
    FETCH_ALBUMS: function ({ commit }) {
      axios.get(apiRoot + 'albums?_page=1&limit=16')
      .then((response) => {
        // Create a AJAX promise for each albums first image and get them all
        let getFirstImgPromises = []
        response.data.forEach(function (albumEl) {
          getFirstImgPromises.push(axios.get(`${apiRoot}photos?albumId=${albumEl.id}&_limit=1`))
        })
        axios.all(getFirstImgPromises)
          .then((firstImgResponses) => {
            // Augment the response as if we had a more robust API
            commit('SET_ALBUMS', {
              records: response.data.map((currentAlbumEl, index, array) => {
                currentAlbumEl.desc = `Album ${currentAlbumEl.id}. An ablum by User ${currentAlbumEl.userId}.`
                currentAlbumEl.links = {}
                currentAlbumEl.links.self = './album/' + currentAlbumEl.id
                currentAlbumEl.links.thumbnail = firstImgResponses[index].data[0].thumbnailUrl
                currentAlbumEl.links.fullSize = firstImgResponses[index].data[0].url
                return currentAlbumEl
              }),
              type: 'albums',
              index: 0,
              total: 100
            })
          })
      }, (err) => {
        console.error(err)
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
    }
  },
  getters: {
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
