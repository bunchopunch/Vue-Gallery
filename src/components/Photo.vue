<template>
  <div>
    <h3>{{currentPhoto.title}}!</h3>
    <img v-bind:src="currentPhoto.url">
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
            'url': 'http://placehold.it/600/4b8fbf',
            'thumbnailUrl': 'http://placehold.it/150/4b8fbf'
          },
          {
            'albumId': 1,
            'id': 2,
            'title': 'Fake Image 2',
            'url': 'http://placehold.it/600/32597f',
            'thumbnailUrl': 'http://placehold.it/150/32597f'
          },
          {
            'albumId': 2,
            'id': 3,
            'title': 'Fake Image 3',
            'url': 'http://placehold.it/600/64b3ff',
            'thumbnailUrl': 'http://placehold.it/150/64b3ff'
          }
        ]
      }
    },

    methods: {},
    computed: {
      currentPhoto () {
        return this.photos.find((item) => item.id === parseInt(this.$route.params.id))
      }
    }
  }
</script>

<style scoped>
</style>
