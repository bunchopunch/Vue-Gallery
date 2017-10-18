<template>
  <div class="col-lg-3 col-md-4 col-xs-6 mb-4">
    <div class="card album-summary text-center text-md-left rounded d-block mb-4 h-100">
      <router-link :to="{ path: album.links.self }"><img class="card-img-top" v-bind:src="album.thumbnailUrl" alt="Card image cap" /></router-link>
      <div class="card-body">
        <h3 class="card-title h5"><router-link :to="{ path: album.links.self }">{{album.title}}</router-link></h3>
        <h4 class="card-subtitle mb-2 h6 text-muted">Album ID Number {{album.id}}</h4>
        <p class="card-text">{{album.desc}}</p>
        <button class="btn btn-danger" v-on:click="deleteAlbum">Delete Album</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardSingle',
    props: {
      album: {
        type: Object,
        default () {
          return {
            desc: '',
            id: 0,
            thumbnailUrl: 'http://placehold.it/150/92c952',
            title: 'Untitled',
            url: '#',
            userId: 0
          }
        }
      }
    },
    methods: {
      deleteAlbum: function (e) {
        console.log('Delete?', e.target)
      }
    }
  }
</script>

<style scoped>
.card-img-top {
  max-height: 10em;
  object-fit: cover;
}
</style>
