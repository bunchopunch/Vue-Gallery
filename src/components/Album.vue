<template>
  <div class="album">
    <div class="my-3 px-2">
      <h2>Images from {{albums[$route.params.id-1].title}}</h2>
    </div>
    <div class="row">

      <div class="widget col-sm-12 col-md-6 col-lg-4 mb-4" v-for="photo in photos" :key="photo.id" v-if="photo.albumId === parseInt($route.params.id)" >
        <router-link :to="{ path: '/Photo/' + photo.id }">
          <div class="media p-3 h-100 rounded">
            <img class="img-thumbnail mr-3" v-bind:src="photo.thumbnailUrl">
            <div class="media-body">
              <h3 class="h5">{{photo.title}}</h3>
              A photo from Album {{photo.albumId}}.
            </div>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Album-View',

    // TODO: Add a way to get the album title

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
