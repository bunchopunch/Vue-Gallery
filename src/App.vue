<template>
  <div id="app">
    <app-masterhead></app-masterhead>
    <div class="container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
    <div class="overlay loading" v-if="status.loading">
      Loading...
    </div>
    <div class="overlay error" v-if="status.error">
      {{status.errorText}}
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
      status: 'getStatus'
    })
  },
  components: {
    'app-masterhead': AppMasterhead,
    'app-footer': AppFooter
  }
  /* ,
  created: function () {
    this.$store.dispatch('SET_ERROR')
  }
  */
}
</script>

<style lang ="scss">
@import './styles/style.scss';
.overlay {
  z-index: 100;
  text-align: center;
  background-color: rgba(18, 18, 18, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.error {
  color: #f00;
}
</style>
