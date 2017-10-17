<template>
  <div class="gallery">
    <div class="my-3 px-2">
      <h2>Newest Albums</h2>
    </div>
    <div class="row text-center text-md-left">

      <template v-for="(album, index) in albums">
        <div class="col-lg-3 col-md-4 col-xs-6 mb-4" :key="album.id">
          <div class="card album-summary rounded d-block mb-4 h-100">
            <router-link :to="{ path: 'Album/' + album.id }"><img class="card-img-top" v-bind:src="album.thumbnailUrl" alt="Card image cap" /></router-link>
            <div class="card-body">
              <h3 class="card-title h5"><router-link :to="{ path: 'Album/' + album.id }">{{album.title}}</router-link></h3>
              <h4 class="card-subtitle mb-2 h6 text-muted">Album ID Number {{album.id}}</h4>
              <p class="card-text">One of User {{album.userId}}'s albums.</p>
              <!-- <router-link :to="{ path: 'Album/' + album.id }"><img class="img-thumbnail"></router-link> -->
              <button class="btn btn-danger" v-on:click="deleteAlbum">Delete Album</button>
            </div>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Gallery-View',

    methods: {
      deleteAlbum: function (e) {
        console.log('Delete?', e.target)
      }
    },

    computed: {
      ...mapGetters({
        albums: 'getAlbums',
        photos: 'getPhotos'
      })
    },

    created: function () {
      this.$store.dispatch('POPULATE_STORE')
    }
}
</script>

<style scoped>
</style>
