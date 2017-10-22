<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-if="photo.albumId === parseInt($route.params.id)" >
    <router-link :to="{ path: photo.links.self }">
      <div class="media p-3 h-100 rounded">
        <img class="img-thumbnail mr-3" v-bind:src="photo.thumbnailUrl">
        <div class="media-body">
          <h3 class="h5 mt-0">{{photo.title}}</h3>
          <p class="text-light mb-0">{{photo.desc}}</p>
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
a:hover {
  text-decoration: none;
}
</style>
