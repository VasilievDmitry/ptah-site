import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import axios from 'axios/index'
import { getCookie, deleteCookie } from './utils'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuelidate)

sync(store, router)

// request interceptor
const createSetAuthInterceptor = () => config => {
  if (getCookie('token') !== null) {
    config.headers.Authorization = `Bearer ${getCookie('token')}`
  }
  return config
}

const setAuthCb = createSetAuthInterceptor(getCookie('token'))
axios.interceptors.request.use(setAuthCb)

// response interceptor
let refreshTokenPromise

const createUpdateAuthInterceptor = (store, http) => async error => {
  if (error.response.status === 500 &&
    (error.response.config.url.indexOf('refresh') > -1 || error.response.config.url.indexOf('logout'))) {
    deleteCookie('token')
    window.location.href = `${process.env.VUE_APP_DOMAIN}/login`
  }
  if (error.response.data.error.code !== 401) {
    return Promise.reject(error)
  }

  if (!refreshTokenPromise) {
    refreshTokenPromise = store.dispatch('User/refreshToken')
  }

  await refreshTokenPromise
  refreshTokenPromise = null

  return http(error.config)
}

const updateAuthCb = createUpdateAuthInterceptor(store, axios)
axios.interceptors.response.use(null, updateAuthCb)

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
