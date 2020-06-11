<template>
  <div>
    <form action="" @submit.prevent="submit" class="b-auth">
      <div class="b-auth-left">
      <span class="b-auth-logo-ptah">
        <BasePtahLogo />
      </span>

        <span class="b-auth-center">
        <span class="b-auth-center__text">
          Sell your game directly to consumers with
        </span>
        <span class="b-auth-center__logo-ptah">
          <BasePtahLogo />
        </span>
      </span>
      </div>
      <div class="b-auth-right">
        <span class="b-auth-right__logo-ptah">
          <BasePtahLogo />
        </span>
        <span class="b-auth-right__get-start">
          <span>
            Don`t have an account?
          </span>
          <span class="link link_m-hide" @click="goToSignUp">
            Get started
          </span>
        </span>
        <div class="b-auth-right-contain">
          <!-- form -->
          <div class="b-auth-form">
            <div class="b-auth-form__chapter">
              Sign In to Ptah
            </div>

            <div class="b-auth-form__delimiter" />

            <div class="b-form">
              <div class="b-form-row">
                <base-text-field-auth
                  label="Email"
                  placeholder="Email"
                  type="email"
                  :hasError="errorText.length > 0"
                  v-model="email"
                />
              </div><!--/.b-form-row -->
              <div class="b-form-row">
                <base-text-field-auth
                  label="Password"
                  placeholder="Create password"
                  :hasError="errorText.length > 0"
                  type="password"
                  v-model="password"
                />
              </div><!--/.b-form-row -->
              <div>
                <base-error-text-auth v-if="errorText.length">
                  {{errorText}}
                </base-error-text-auth>
              </div>
              <div class="b-form-row">
                <div class="b-auth-form__description-after-form">
                  <span class="b-auth-form__forgot-link" @click="goToRestorePage">
                    Forgot your pasword?
                  </span>
                </div>
              </div><!--/.b-form-row -->
              <div class="b-form-row">
                <div class="b-auth-form__description-after-form">
                  <button
                    class="b-button-main"
                    type="submit"
                    :disabled="!disabledBtn"
                  >
                    Sign In
                  </button>
                </div>
              </div><!--/.b-form-row -->
            </div>
          </div>
          <!--/ end form -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  name: 'TheLoginPage',

  data () {
    return {
      email: '',
      password: '',
      errorText: '',
      bg: 'bg_auth.svg'
    }
  },

  computed: {
    disabledBtn () {
      return this.email !== '' &&  this.password !== ''
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },

  methods: {
    ...mapActions('User', ['login']),

    submit () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.login({
          email: this.email,
          password: this.password
        })
          .then(() => {
            if (process.env.NODE_ENV === 'production') {
              window.location.href = process.env.VUE_APP_EDITOR_DOMAIN
            } else {
              this.$router.push('/')
            }
            this.errorText = ''
          })
          .catch(() => {
            this.errorText = 'Invalid username and password pair'
          })
      }
    },

    goToRestorePage () {
      this.$router.push({ path: `/restore` })
    },

    goToSignUp () {
      this.$router.push({ path: `/signup` })
    }
  }
}
</script>

<style lang="sass">
  @import '../../assets/sass/auth.sass'
</style>
