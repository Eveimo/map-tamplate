import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false


import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import './utils/leaflet.canvas-markers'

import service from './utils/request'
import Axios from 'axios'
Vue.prototype.$axios=Axios
Vue.prototype.service=service


import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
