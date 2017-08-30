<template>
  <div>
    <h1>Gallery</h1>
    <h2>Albums</h2>
    <div v-for="album in enhancedAlbums">
      <h3 v-text="album.title"></h3>
      {{album.thubnail}}
      <img v-bind:src="album.thumbnailUrl">
<!--
      <img v-for="photo in photos" v-if="photo.albumId === album.id" v-bind:src="photo.thumbnailUrl">
      <button v-on:click="deleteAlbum">Delete Album</button>
    -->
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
            'url': 'http://placehold.it/600/92c952',
            'thumbnailUrl': 'http://placehold.it/150/92c952'
          },
          {
            'albumId': 1,
            'id': 2,
            'title': 'Fake Image 2',
            'url': 'http://placehold.it/600/771796',
            'thumbnailUrl': 'http://placehold.it/150/771796'
          },
          {
            'albumId': 2,
            'id': 3,
            'title': 'Fake Image 3',
            'url': 'http://placehold.it/600/771796',
            'thumbnailUrl': 'http://placehold.it/150/92c952'
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
        let a = self.albums.map(function (album) {
          let albumPhotos = self.photos.filter(function (photo) {
            if (photo.albumId === album.id) { return true }
          })

          album.thumbnailUrl = albumPhotos[0].thumbnailUrl

          return album
        })
        console.log(a)
        return a
      }
    }
  }
</script>

<style scoped>
</style>
