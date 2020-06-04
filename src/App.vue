<template>
  <div id="app">
    <router-view></router-view>

    <base-confirm
      :isHideCancel="true"
      title="Awesome!"
      v-if="showConfirmWindow"
      @close="showConfirmWindow = false">
      Thank you, the email address is confirmed.
    </base-confirm>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      showConfirmWindow: false
    }
  },

  created () {
    if (this.$route.query.confirm_email) {
      // confirm
      this.confirm(this.$route.query.confirm_email)
    }

    if (this.$route.query.restore_pwd) {
      // restore pwd
      this.restore(this.$route.query.restore_pwd)
    }
  },

  methods: {
    ...mapActions('User', ['confirmEmail', 'restorePwdSecond']),

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
          // redirect to new pwd window
        })
        .catch(e => console.warn(e))
    }
  }
}
</script>
