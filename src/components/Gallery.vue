<template>
  <div>
    <h1>Gallery</h1>
    <h2>Albums</h2>
    <div v-for="album in albums">
      <h3 v-text="album.title"></h3>
      <!-- TODO: Come back and use a computed property for this -->
      <img v-for="photo in photos" v-if="photo.albumId === album.id" v-bind:src="photo.thumbnailUrl">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data () {
      return {
        title: 'Most Recent Images',
        albums: [
          {
            'userId': 1,
            'id': 1,
            'title': 'Fake Album 1'
          },
          {
            'userId': 1,
            'id': 2,
            'title': 'Fake Album 2'
          }
        ],
        photos: [
          {
            'albumId': 1,
            'id': 1,
            'title': 'Fake Image 1',
            'url': 'http://placehold.it/600/92c952',
            'thumbnailUrl': 'http://placehold.it/150/92c952'
          },
          {
            'albumId': 1,
            'id': 2,
            'title': 'Fake Image 2',
            'url': 'http://placehold.it/600/771796',
            'thumbnailUrl': 'http://placehold.it/150/771796'
          },
          {
            'albumId': 2,
            'id': 3,
            'title': 'Fake Image 1',
            'url': 'http://placehold.it/600/92c952',
            'thumbnailUrl': 'http://placehold.it/150/92c952'
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
