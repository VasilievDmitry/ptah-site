import VueRouter from 'vue-router'
import routes from './routes'
import qs from 'qs'
import { getCookie } from './utils'

const allowedPaths = [
  '/',
  '/login',
  '/signup',
  '/restore',
  '/policy',
  '/about',
  '/pricing',
  '/features',
  '/404'
]

let router = new VueRouter(
  {
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active',
    parseQuery: function (query) {
      return qs.parse(query)
    },
    stringifyQuery: function (query) {
      let result = qs.stringify(query)

      return result ? ('?' + result) : ''
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  }
)

router.beforeEach(
  (to, from, next) => {
    if (!allowedPaths.includes(to.path) && (getCookie('token') === null)) {
      next('/login')
      return
    }

    next()
  }
)

router.afterEach((to) => {
  document.title = to.meta.title ? to.meta.title : 'Ptah'
})

export default router
