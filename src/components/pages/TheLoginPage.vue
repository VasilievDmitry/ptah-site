<template>
  <div>
    <h1>Login</h1>

    <form action="" @submit.prevent="submit">
      <div><input type="email" v-model="email" required placeholder="email" /></div>
      <div><input type="password" v-model="password" required placeholder="password"/></div>
      <div class="error" v-if="errorText.length">{{errorText}}</div>
      <div><button type="submit">Sign in</button></div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheLoginPage',

  data () {
    return {
      email: '',
      password: '',
      errorText: ''
    }
  },

  methods: {
    ...mapActions('User', ['login']),

    submit () {
      this.login({
        email: this.email,
        password: this.password
      })
        .then(() => {
          // redirect to dashboard
          this.errorText = ''
        })
        .catch(e => {
          this.errorText = e.response.data.error.message
        })
    }
  }
}
</script>

<style scoped>
div {
  padding: .5rem;
}

input {
  padding: 5px;
}

.error {
  color: red;
}
</style>
