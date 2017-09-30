<template>
  <div>
    <h2>Albums</h2>
    <div v-for="album in enhancedAlbums" :key="album.id" class="album-summary">
      <h3><router-link :to="{ path: 'Album/' + album.id }">{{album.title}}</router-link></h3>
      <router-link :to="{ path: 'Album/' + album.id }"><img v-bind:src="album.thumbnailUrl"></router-link>
      <button v-on:click="deleteAlbum">Delete Album</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data () {
      return {
        albums: [
          {
            'userId': 1,
            'id': 1,
            'title': 'Fake Album 1'
          },
          {
            'userId': 1,
            'id': 2,
            'title': 'Fake Album 2'
          }
        ],
        photos: [
          {
            'albumId': 1,
            'id': 1,
            'title': 'Fake Image 1',
            'url': 'http://placehold.it/600/4b8fbf',
            'thumbnailUrl': 'http://placehold.it/150/4b8fbf'
          },
          {
            'albumId': 1,
            'id': 2,
            'title': 'Fake Image 2',
            'url': 'http://placehold.it/600/32597f',
            'thumbnailUrl': 'http://placehold.it/150/32597f'
          },
          {
            'albumId': 2,
            'id': 3,
            'title': 'Fake Image 3',
            'url': 'http://placehold.it/600/64b3ff',
            'thumbnailUrl': 'http://placehold.it/150/64b3ff'
          }
        ]
      }
    },

    methods: {
      deleteAlbum: function (e) {
        console.log('Delete?', e.target)
      }
    },

    computed: {
      enhancedAlbums () {
        // TODO: It may make the template bulky, but We could possibly drop use v-for range.
        return this.albums.map((album) => {
          album.thumbnailUrl = this.photos.find((photo) => photo.albumId === album.id).thumbnailUrl
          return album
        })
      }
    },

    created: function () {
      this.$store.dispatch('FETCH_ALBUMS')
      this.$store.dispatch('FETCH_PHOTOS')
    }
}
</script>

<style scoped>
</style>
