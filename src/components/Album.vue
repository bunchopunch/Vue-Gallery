<template>
  <div>
    <h2>{{albums[$route.params.id+1].title}}</h2>
    <div class="album text-muted">
      <div class="container">
        <div class="row">

            <div class="card col-6 col-lg-4" v-for="photo in photos" :key="photo.id" v-if="photo.albumId === parseInt($route.params.id)" >
              <div class="row">
                <div class="col-3">
                  <router-link class="float-left" :to="{ path: '/Photo/' + photo.id }"><img class="img-thumbnail" v-bind:src="photo.thumbnailUrl"></router-link>
                </div>
                <div class="col-9">
                  <h3 v-text="photo.title"></h3>
                  <p>This is a photo from Album {{photo.albumId}}</p>
                </div>
              </div>
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
