import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/ebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      name: 'ebook',
      component: () => import('./views/ebook'),
      children:[
          {
            path:':fileName',
            component:()=>import(
              './components/ebook/EbookReader.vue'
            )
          }
      ]
    },

  ]
})
