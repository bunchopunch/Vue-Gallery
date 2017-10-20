<template>
  <div class="container widget masterhead">
    <nav class="nav">
      <h1><router-link class="nav-link active" to='/'>GalleryApp</router-link></h1>
      <a class="nav-link" href="#">About</a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'AppMasterhead'
  }
</script>

<style scoped>
.masterhead {
  background-color: theme-color("panel")
}
</style>
