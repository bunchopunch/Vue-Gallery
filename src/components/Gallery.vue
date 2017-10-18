<template>
  <div class="gallery">
    <div class="my-3 px-2">
      <h2>Newest Albums</h2>
    </div>

    <div class="row text-center text-md-left">
      <card-single v-for="(album, index) in albums" :key="album.id" :album="album"></card-single>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import cardSingle from './Card-List/Card-Single'

  export default {
    name: 'Gallery-View',

    computed: {
      ...mapGetters({
        albums: 'getAlbums',
        photos: 'getPhotos'
      })
    },

    components: {
      cardSingle
    }
  }
</script>

<style scoped>
</style>
