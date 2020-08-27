<template>
  <div id="app">
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>

    <base-confirm
      :isHideCancel="true"
      title="Awesome!"
      v-if="showConfirmWindow"
      @close="showConfirmWindow = false">
      Thank you, the email address is confirmed.
    </base-confirm>

    <base-confirm
      :isHideCancel="true"
      title="Reset Password"
      v-if="showResetPwdWindow"
      @close="showResetPwdWindow = false">
      A new password has been sent to your email address.
    </base-confirm>

    <cookie-policy />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getCookie } from '@src/utils'

export default {
  name: 'App',
  data () {
    return {
      showConfirmWindow: false,
      showResetPwdWindow: false
    }
  },

  created () {
    setTimeout(() => {
      if (this.$route.query.confirm_email) {
        // confirm
        this.confirm(this.$route.query.confirm_email)
      }

      if (this.$route.query.reset_pwd) {
        // restore pwd
        this.restore(this.$route.query.reset_pwd)
      }

      this.checkAuth()
    }, 500)
  },

  methods: {
    ...mapActions('User', ['confirmEmail', 'restorePwdSecond', 'getUser']),

    confirm (token) {
      this.confirmEmail(token)
        .then(() => {
          this.showConfirmWindow = true
        })
        .catch(() => {
          //
        })
    },

    restore (token) {
      this.restorePwdSecond(token)
        .then(() => {
          this.showResetPwdWindow = true
        })
        .catch(e => console.warn(e))
    },

    checkAuth () {
      let token = getCookie('token')
      if (token !== null && token.length !== 0) {
        this.getUser()
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/styles";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
