<template>
  <div class="album">
    <div class="my-3 px-2">
      <h2>Images from {{albums[$route.params.id-1].title}}</h2>
    </div>
    <div class="row">
      <thumbnail-single v-for="photo in photos" :key="photo.id" :photo="photo"></thumbnail-single>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ThumbnailSingle from '@/components/partials/ThumbnailSingle'

  export default {
    name: 'AlbumView',
    computed: {
      ...mapGetters({
        albums: 'getAlbums',
        photos: 'getPhotos'
      })
    },
    components: {
      ThumbnailSingle
    }
  }
</script>

<style scoped>
</style>
