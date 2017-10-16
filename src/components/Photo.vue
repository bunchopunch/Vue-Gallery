<template>
  <div>
    <h3>{{currentPhoto.title}}!</h3>
    <img v-bind:src="currentPhoto.url">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Photo-View',

  computed: {
    ...mapGetters({
      albums: 'getAlbums',
      photos: 'getPhotos'
    }),

    currentPhoto () {
      return this.photos.find((item) => item.id === parseInt(this.$route.params.id))
    }
  }
}
</script>

<style scoped>
</style>
