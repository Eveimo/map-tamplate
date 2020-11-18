import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouters from './modules/index'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/Map')
    },
    {
      path: '/',
      name: '',
      component: () => import('@/views/Home')
    },
    ...configRouters
  ]
})
