<template>
  <div>
    <h1>Sign up</h1>
    <form action="" @submit.prevent="submit">
      <div><input type="email" v-model="email" placeholder="email"/></div>
      <div><input type="text" v-model="name" placeholder="name"></div>
      <div><input type="password" v-model="password" placeholder="password" autocomplete="new-password"/></div>
      <div><input type="password" v-model="repeatPassword" placeholder="repeat password"/></div>
      <div><button type="submit">Sign up</button></div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'TheSignUpPage',

  data () {
    return {
      email: '',
      name: '',
      password: '',
      repeatPassword: '',
      errorText: ''
    }
  },

  validations: {
    email: {
      required,
      email
    },
    name: {
      required
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    ...mapActions('User', ['signUp']),

    submit () {
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.signUp({
          email: this.email,
          name: this.name,
          password: this.password
        })
          .then(() => {
            // redirect to onboarding
            this.errorText = ''
          })
          .catch(e => {
            this.errorText = e.response.data.error.message
          })
      }
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
  border: 1px solid red;
}
</style>
