<template>
  <div class="album">
    <div class="card bg-secondary my-2 px-2">
      <h2>{{albums[$route.params.id+1].title}}</h2>
    </div>
    <div class="row">

      <div class="col-4" v-for="photo in photos" :key="photo.id" v-if="photo.albumId === parseInt($route.params.id)" >
        <div class="media mb-2 p-3">
          <router-link :to="{ path: '/Photo/' + photo.id }"><img class="img-thumbnail d-flex mr-3" v-bind:src="photo.thumbnailUrl"></router-link>
          <div class="media-body">
            <h3 v-text="photo.title"></h3>
            <p>This is a photo from Album {{photo.albumId}}</p>
          </div>
        </div>
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
