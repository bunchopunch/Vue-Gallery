<template>
  <div class="image widget">
    <div class="my-3 px-2">
      <h2>{{currentPhoto.title}}</h2>
    </div>
    <div class="card text-center">
      <div class="card-body">
        <img v-bind:src="currentPhoto.url">
        <p>{{currentPhoto.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Image-View',

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
