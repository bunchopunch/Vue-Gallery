<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-if="photo.albumId === parseInt($route.params.id)" >
    <router-link :to="{ path: photo.links.self }">
      <div class="media p-3 h-100 rounded">
        <img class="img-thumbnail mr-3" v-bind:src="photo.thumbnailUrl">
        <div class="media-body">
          <h3 class="h5">{{photo.title}}</h3>
          {{photo.desc}}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ThumbnailSingle',
    props: {
      photo: {
        type: Object,
        default () {
          return {
            albumId: 0,
            desc: '',
            id: 0,
            thumbnailUrl: 'http://placehold.it/150/92c952',
            title: 'Untitled',
            url: '#'
          }
        }
      }
    }
  }
</script>

<style scoped>
</style>
