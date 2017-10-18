<template>
  <div id="app">

    <div class="container widget masterhead">
      <nav class="nav">
        <h1><router-link class="nav-link active" to='/'>GalleryApp</router-link></h1>
        <a class="nav-link" href="#">About</a>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    this.$store.dispatch('POPULATE_STORE')
  }
}
</script>

<style lang="scss">
@import './styles/style.scss';
</style>
