<template>
  <div>
    {{$route.params.id}}
    <h2></h2>
    <div v-for="photo in photos" v-if="photo.albumId === parseInt($route.params.id)">
      <h3 v-text="photo.title"></h3>
      <img v-bind:src="photo.thumbnailUrl">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Album',
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

    methods: {},
    watch: {
      '$route' (to, from) {

      }
    },
    computed: {
      currentAlbum () {
        return this.albums.find(function (album) {
          return album.id === parseInt(this.$route.params.id)
        })
      }
    }
  }
</script>

<style scoped>
</style>
