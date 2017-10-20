<template>
  <div id="app">
    <app-masterhead>TestHead</app-masterhead>
    <div class="container">
      <router-view>TestFoot</router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppMasterhead from '@/components/partials/AppMasterhead'
import AppFooter from '@/components/partials/AppFooter'

export default {
  name: 'App',
  components: {
    'app-masterhead': AppMasterhead,
    'app-footer': AppFooter
  },
  created: function () {
    this.$store.dispatch('POPULATE_STORE')
  }
}
</script>

<style lang ="scss">
@import './styles/style.scss';
</style>
