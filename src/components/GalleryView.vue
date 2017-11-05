<template>
  <div class="gallery">
    <div class="my-3 px-2">
      <h2>Newest Albums</h2>
    </div>
    <div class="row">
      <card-single v-for="(album, index) in albums" :key="album.id" :album="album"></card-single>
    </div>
    <!-- TODO: Use the values from the API -->
    <widget-pagination totalItems="100" perPage="16"></widget-pagination>
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
        status: 'getStatus',
        albums: 'getAlbums',
        photos: 'getPhotos'
      })
    },
    watch: {
      '$route': 'fetchAlbums'
    },
    methods: {
      fetchAlbums () {
        this.$store.dispatch('FETCH_ALBUMS', { 'pageNumber': this.$route.params.pageNumber })
      }
    },
    components: {
      CardSingle,
      WidgetPagination
    },
    created: function () {
      this.fetchAlbums()
    }
}
</script>

<style scoped>
</style>
