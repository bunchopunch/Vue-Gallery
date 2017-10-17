import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import Album from '@/components/Album'
import Photo from '@/components/Photo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/album/:id',
      name: 'Album',
      component: Album
    },
    {
      path: '/photo/:id',
      name: 'Photo',
      component: Photo
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
