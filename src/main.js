import Vue from 'vue'
import VueRouter from "vue-router"
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/bootstrap-icons.svg'
import '@fortawesome/fontawesome-free/css/all.css'
import 'jquery/dist/jquery'
import 'popper.js/dist/popper'

import Home from './components/Home.vue'
import store from "./store/store"
import {routes} from './routes'

axios.defaults.baseURL='https://addblog-vuejs.firebaseio.com'

Vue.use(VueRouter)
const router=new VueRouter({
      routes,
      mode:'history',
    })

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Home),
}).$mount('#app')
