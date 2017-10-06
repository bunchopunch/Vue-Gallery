<template>
  <div>
    <h2>Albums</h2>
    <div v-for="album in albums" :key="album.id" class="album-summary">
      <h3><router-link :to="{ path: 'Album/' + album.id }">{{album.title}}</router-link></h3>
      <router-link :to="{ path: 'Album/' + album.id }"><img v-bind:src="album.thumbnailUrl"></router-link>
      <button class="btn btn-danger" v-on:click="deleteAlbum">Delete Album</button>
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
