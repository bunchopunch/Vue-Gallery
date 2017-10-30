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
      state.albums = albumsPayload.map((album) => {
        // TODO: Doing the map and find is going to get expensive.
        album.thumbnailUrl = state.photos.find((photo) => photo.albumId === album.id).thumbnailUrl
        album.desc = `Lorem Ipsum. One of ${album.userId}'s albums.`
        album.links = {self: `Album/${album.id}`}
        return album
      })
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
        // TODO: Use async dispatch()?
        // Augment the response as if we had a nicer API
        let getFirstImageRequests = []
        console.log('response', response)

        response.data.forEach(function (element) {
          getFirstImageRequests.push(axios.get(apiRoot + 'photos?albumId=2&_limit=1'))
        })

        axios.all(getFirstImageRequests)
          .then((firstImages) => {
            let augmentedAlbumsData = response.data
            augmentedAlbumsData.forEach((currentValue, index, array) => {
              currentValue.links = {}
              currentValue.links.self = firstImages[index].data[0].url
              currentValue.links.thumbnail = firstImages[index].data[0].thumbnailUrl
            })
            commit('SET_ALBUMS', {
              records: augmentedAlbumsData,
              type: 'albums',
              total: 100,
              index: 0
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
