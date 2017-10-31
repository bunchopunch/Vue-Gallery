<template>
  <div class="gallery">
    <div class="my-3 px-2">
      <h2>Newest Albums</h2>
    </div>
    <div class="row">
      <card-single v-for="(album, index) in albums" :key="album.id" :album="album"></card-single>
    </div>
    <widget-pagination></widget-pagination>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CardSingle from '@/components/partials/CardSingle'
  import WidgetPagination from '@/components/partials/WidgetPagination'

  export default {
    name: 'GalleryView',
    computed: {
      ...mapGetters({
        albums: 'getAlbums',
        photos: 'getPhotos'
      })
    },
    components: {
      CardSingle,
      WidgetPagination
    },
    created: function () {
      this.$store.dispatch('FETCH_ALBUMS')
    }
}
</script>

<style scoped>
</style>
