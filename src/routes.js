
const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Home" */ './components/pages/Home.vue'),
    meta: {
      title: 'Home — Ptah'
    }
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "Login", webpackPrefetch: true */ './components/pages/TheLoginPage.vue'),
    meta: {
      title: 'Sign in — Ptah'
    }
  },
  {
    path: '/signup',
    component: () => import(/* webpackChunkName: "SignUp", webpackPrefetch: true */ './components/pages/TheSignUpPage.vue'),
    meta: {
      title: 'Sign up — Ptah'
    }
  },
  {
    path: '/restore',
    component: () => import(/* webpackChunkName: "Restore", webpackPrefetch: true */ './components/pages/TheRestorePwdPage.vue'),
    meta: {
      title: 'Ptah — Restore password'
    }
  },
  {
    path: '/after-sign-up',
    component: () => import(/* webpackChunkName: "MessageAfterSignUp", webpackPrefetch: true */ './components/pages/TheMessageAfterSignUp.vue'),
    meta: {
      title: 'Ptah — The Message After SignUp'
    }
  },
  {
    path: '/account',
    component: () => import(/* webpackChunkName: "Account", webpackPrefetch: true */ './components/pages/TheAccountPage.vue'),
    meta: {
      title: 'Ptah — Account settings'
    }
  },
  {
    path: '/policy',
    component: () => import(/* webpackChunkName: "PrivacyPolicy", webpackPrefetch: true */ './components/pages/ThePrivacyPolicyPage.vue'),
    meta: {
      title: 'The Privacy Policy — Ptah'
    }
  },
  {
    path: '/terms',
    component: () => import(/* webpackChunkName: "Terms", webpackPrefetch: true */ './components/pages/TheTermsPage.vue'),
    meta: {
      title: 'Terms of Service — Ptah'
    }
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "About", webpackPrefetch: true */ './components/pages/About.vue'),
    meta: {
      title: 'About — Ptah'
    }
  },
  /*{
    path: '/pricing',
    component: Pricing,
    component: () => import('./components/pages/Pricing.vue'),
    meta: {
      title: 'Ptah — Pricing'
    }
  },*/
  {
    path: '/features',
    component: () => import(/* webpackChunkName: "Features", webpackPrefetch: true */ './components/pages/Features.vue'),
    meta: {
      title: 'Features — Ptah'
    }
  },
  {
    path: '/oauth2',
    component: () => import(/* webpackChunkName: "MailchimpOauthComplete", webpackPrefetch: true */ './components/pages/MailchimpOauthComplete.vue'),
    meta: {
      title: 'Ptah — oauth'
    }
  },
  {
    path: '/ui',
    component: () => import(/* webpackChunkName: "Ui", webpackPrefetch: true */ './components/pages/Ui.vue'),
    meta: {
      title: 'Ptah — Ui kit'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404", webpackPrefetch: true */ '@components/pages/404'),
    meta: {
      title: '404 - Ptah'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
/*function lazyLoadView (AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: import('@components/base/BaseLoading'),
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: import('@components/base/BaseTimeout'),
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 70,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 15000
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    }
  })
}*/

export default routes
