<template>
  <div>
    {{$route.params.id}}
    <h2></h2>
    <div v-for="photo in photos" :key="photo.id" v-if="photo.albumId === parseInt($route.params.id)" >
      <h3 v-text="photo.title"></h3>
      <p>This is a photo from Album {{photo.albumId}}</p>
      <router-link :to="{ path: '/Photo/' + photo.id }"><img v-bind:src="photo.thumbnailUrl"></router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Album',

    computed: {
      ...mapGetters({
        albums: 'getAlbums',
        photos: 'getPhotos'
      })

    }
  }
</script>

<style scoped>
</style>
