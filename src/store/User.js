import axios from 'axios'
import router from '@src/router'
import { setCookie, deleteCookie } from '@src/utils'

export default {
  state: {
    isAuth: false,
    user: null
  },

  mutations: {
    setAuth (state, value) {
      state.isAuth = value
    },

    setUser (state, value) {
      state.user = value
    }
  },

  actions: {
    // ============
    //    Auth
    // ============


    /**
     * User Sign up
     * @param commit
     * @param dispatch
     * @param data {Object} {name, email, password}
     * @return {Promise.<T>|Promise<any>|Promise}
     */
    signUp ({ commit, dispatch }, data) {
      return axios.post(`${process.env.VUE_APP_API}/auth/signup`, data)
        .then((response) => {
          commit('setUser', response.data)
          dispatch('setToken', response.data)
          return response.data
        })
    },

    /**
     * User login
     * @param commit
     * @param dispatch
     * @param data {Object} {email, password}
     * @return {Promise.<T>|Promise<any>|Promise}
     */
    login ({ commit, dispatch }, data) {
      return axios.post(`${process.env.VUE_APP_API}/auth/login`, data)
        .then((response) => {
          commit('setUser', response.data)
          dispatch('setToken', response.data)
          return response.data
        })
    },

    /**
     * confirm user's email by token from link
     * @param commit
     * @param dispatch
     * @param token {String} confirm token
     * @returns {Promise.<T>|Promise<any>|Promise}
     */
    confirmEmail ({ commit, dispatch }, token) {
      return axios.post(`${process.env.VUE_APP_API}/auth/confirm_email`, { token })
        .then((response) => {
          commit('setUser', response.data)
          dispatch('setToken', response.data)
          return response.data
        })
    },

    /**
     * first step of restoring password - send confirmation mail
     * @param email {String}
     * @returns {Promise.<T>|Promise<any>|Promise}
     */
    // eslint-disable-next-line
    restorePwdFirst ({ }, email) {
      return axios.post(`${process.env.VUE_APP_API}/auth/restore_password_step1`, { email })
        .then((response) => {
          return response
        })
        .catch((e) => {
          throw e
        })
    },

    /**
     * second step of restoring password - generate new password and send it via email
     * @param commit
     * @param dispatch
     * @param token {String}
     */
    restorePwdSecond ({ commit, dispatch }, token) {
      return axios.post(`${process.env.VUE_APP_API}/auth/restore_password_step1`, { token })
        .then((response) => {
          commit('setUser', response.data)
          dispatch('setToken', response.data)
          return response.data
        })
    },

    /**
     * Refresh expired token
     * @param commit
     * @param dispatch
     * @param refreshToken {String}
     * @returns {Promise.<T>|Promise<any>|Promise}
     */
    refreshToken ({ dispatch }, refreshToken) {
      return axios.post(`${process.env.VUE_APP_API}/auth/refresh`, {
        refreshToken
      })
        .then((response) => {
          dispatch('setToken', response.data)
          return response.data
        })
        .catch((error) => {
          dispatch('logout')
          return error
        })
    },

    /**
     * Logout
     * @param dispatch
     */
    logout ({ dispatch }) {
      dispatch('clearAuth')
      axios.get(`${process.env.VUE_APP_API}/auth/logout`)

    },

    /**
     * Clear cookie & redirect to login
     * @param commit
     */
    clearAuth ({commit}) {
      deleteCookie('token')
      deleteCookie('refreshToken')
      commit('setAuth', false)
      router.push({ path: `/login` })
    },

    /**
     * Set new access token to store and localeStorage
     * @param commit
     * @param token {Object} {accessToken, refreshToken}
     */
    setToken ({ commit }, token) {
      let options

      if (process.env.NODE_ENV === 'production') {
        options = {
          domain: `${process.env.VUE_APP_COOKIE_DOMAIN}`,
          secure: true
        }
      }

      setCookie('token', token.accessToken, options)
      setCookie('refreshToken', token.refreshToken, options)
      commit('setAuth', true)
    },

    // ==========
    //    User
    // ==========

    /**
     * Get user info
     * @param commit
     * @returns { userId }
     */
    getUser ({ commit }) {
      return axios.get(`${process.env.VUE_APP_API}/user`)
        .then(response => {
          commit('setUser', response.data)
          commit('setAuth', true)
          return response.data
        })
    },

    /**
     * Set new user name
     * @param commit
     * @param name {String}
     * @return {Promise<AxiosResponse<T>>}
     */
    setUserName ({ commit }, name) {
      return axios.post(`${process.env.VUE_APP_API}/user`, { name })
        .then(response => {
          commit('setUser', response.data)
          return response.data
        })
    },

    /**
     * Set new user password
     * @param commit
     * @param password {String}
     * @return {Promise<AxiosResponse<T>>}
     */
    setUserPassword ({ commit }, password) {
      return axios.post(`${process.env.VUE_APP_API}/user/password`, password)
        .then(response => {
          commit('setUser', response.data)
          return response.data
        })
    },

    /**
     * Send email with link to user, to confirm email address
     * @return {Promise<AxiosResponse<T>>}
     */
    sendConfirmation () {
      return axios.get(`${process.env.VUE_APP_API}/user/send_email_confirmation`)
    }
  },

  namespaced: true
}
