<template>
  <div>
    <h1>Gallery</h1>
    <h2>Albums</h2>
    <div v-for="album in enhancedAlbums">
      <h3 v-text="album.title"></h3>
      <img v-bind:src="album.thumbnailUrl">
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
        let self = this
        return self.albums.map(function (album) {
          album.thumbnailUrl = self.photos.find(function (photo) {
            return photo.albumId === album.id
          }).thumbnailUrl
          return album
        })
      }
    }
  }
</script>

<style scoped>
</style>
