<template>
  <div>
    <h1>Gallery</h1>
    <p>{{title}}</p>
    <div>
      <h2>{{photos[0].title}}</h2>
      <img v-bind:src="photos[0].thumbnailUrl" >
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
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
