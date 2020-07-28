import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import axios from 'axios/index'
import '@components/_globals'
import { getCookie } from './utils'
import VueGtag from 'vue-gtag'
import VueYandexMetrika from 'vue-yandex-metrika'
import VueGtm from 'vue-gtm'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuelidate)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

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
  let method = error.response.config.url.split('/').pop()
  let status = error.response.status

  if ((status === 500 || status === 401) && method === 'refresh') {
    store.dispatch('User/clearAuth')
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

if (process.env.VUE_APP_PROD === '1') {
  Vue.use(VueGtag, {
    config: {
      id: process.env.VUE_APP_GTAG
    },
    linker: {
      domains: ['editor.ptah.pro', 'docs.ptah.pro']
    }
  })

  Vue.use(VueYandexMetrika, {
    id: process.env.VUE_APP_METRIKA,
    router: router,
    env: process.env.NODE_ENV,
    options: {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    }
  })

  Vue.use(VueGtm, {
    id: 'GTM-PSFK7BN',
    vueRouter: router
  })
}

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
