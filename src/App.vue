<template>
  <div id="app">
    <app-masterhead></app-masterhead>
    <div class="container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
    <div class="loading overlay" v-if="loading">
      Loading...
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppMasterhead from '@/components/partials/AppMasterhead'
import AppFooter from '@/components/partials/AppFooter'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      loading: 'getLoading'
    })
  },
  components: {
    'app-masterhead': AppMasterhead,
    'app-footer': AppFooter
  }
  /*,
  created: function () {
    this.$store.dispatch('START_LOADING')
  }
  */
}
</script>

<style lang ="scss">
@import './styles/style.scss';
.loading{
  z-index: 100;
  text-align: center;
  background-color: rgba(18, 18, 18, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
