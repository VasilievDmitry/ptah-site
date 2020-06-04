<template>
  <div>
    <form action="" @submit="submit" v-if="!emailSendSuccess">
      <div><input type="email" placeholder="email" v-model="email"></div>
      <div><button type="submit">Submit</button></div>
      <div class="error" v-if="errorText.length">{{errorText}}</div>
    </form>

    <div v-if="emailSendSuccess">
      An email was sent to the specified email address. Please follow the link in it.
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheRestorePwdPage',

  data () {
    return {
      email: '',
      emailSendSuccess: false,
      errorText: ''
    }
  },

  methods: {
    ...mapActions('User', ['restorePwdFirst']),

    submit () {
      this.restorePwdFirst(this.email)
        .then(() => {
          this.emailSendSuccess = true
        })
        .catch((e) => {
          if (e.response.data.error.code === 404) {
            this.errorText = 'The specified email address was not found'
          } else {
            this.errorText = 'Something went wrong'
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
