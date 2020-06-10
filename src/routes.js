import TheLoginPage from './components/pages/TheLoginPage'
import TheSignUpPage from './components/pages/TheSignUpPage'
import TheRestorePwdPage from './components/pages/TheRestorePwdPage'
import ThePrivacyPolicyPage from './components/pages/ThePrivacyPolicyPage'

import Home from "./components/pages//Home.vue";
import About from "./components/pages/About.vue";
import Pricing from "./components/pages/Pricing.vue";
import Features from "./components/pages/Features.vue";
import Ui from "./components/pages/Ui.vue";

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Ptah — Home'
    }
  },
  {
    path: '/login',
    component: TheLoginPage,
    meta: {
      title: 'Ptah — Sign in'
    }
  },
  {
    path: '/signup',
    component: TheSignUpPage,
    meta: {
      title: 'Ptah — Sign up'
    }
  },
  {
    path: '/restore',
    component: TheRestorePwdPage,
    meta: {
      title: 'Ptah — Restore password'
    }
  },
  {
    path: '/policy',
    component: ThePrivacyPolicyPage,
    meta: {
      title: 'Ptah — Terms of Service & Privacy Policy'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'Ptah — About'
    }
  },
  {
    path: '/pricing',
    component: Pricing,
    meta: {
      title: 'Ptah — Pricing'
    }
  },
  {
    path: '/features',
    component: Features,
    meta: {
      title: 'Ptah — Features'
    }
  },
  {
    path: '/ui',
    component: Ui,
    meta: {
      title: 'Ptah — Ui kit'
    }
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
