<template>
  <div>
    <h2>Newest Albums</h2>
    <div class="card-columns">
      <div v-for="album in albums" :key="album.id" class="card album-summary">
        <img class="card-img-top" v-bind:src="album.thumbnailUrl" alt="Card image cap" />
        <div class="card-body">
          <h3 class="card-title"><router-link :to="{ path: 'Album/' + album.id }">{{album.title}}</router-link></h3>
          <h4 class="card-subtitle mb-2 text-muted">Album ID Number {{album.id}}</h4>
          <p class="card-text">One of User {{album.userId}}'s albums.</p>
          <!-- <router-link :to="{ path: 'Album/' + album.id }"><img class="img-thumbnail"></router-link> -->
          <button class="btn btn-danger" v-on:click="deleteAlbum">Delete Album</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Gallery View',

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
