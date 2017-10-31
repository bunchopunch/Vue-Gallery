import Vue from 'vue'
import Router from 'vue-router'
import GalleryView from '@/components/GalleryView'
import AlbumView from '@/components/AlbumView'
import PhotoView from '@/components/PhotoView'
import notFoundView from '@/components/notFoundView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'notFoundView',
      component: notFoundView
    },
    {
      path: '/',
      name: 'GalleryView',
      component: GalleryView
    },
    {
      path: '/page/:pageNumber',
      name: 'GalleryView',
      component: GalleryView
    },
    {
      path: '/album/:id',
      name: 'AlbumView',
      component: AlbumView
    },
    {
      path: '/photo/:id',
      name: 'PhotoView',
      component: PhotoView
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
