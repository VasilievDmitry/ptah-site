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
        <span class="b-auth-right__get-start _m-hide">
          <BaseGetStarted />
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
                  placeholder="Type your email"
                  type="email"
                  v-model="email"
                  :hasError="errorText.length > 0 || $v.email.$error"
                  :errorText="errorText.length > 0 ? '' : errorTexts.email"
                  v-model.trim="$v.email.$model"
                />
              </div><!--/.b-form-row -->
              <div class="b-form-row">
                <base-text-field-auth
                  label="Password"
                  placeholder="Type your password"
                  :hasError="errorText.length > 0"
                  :errorText="errorText"
                  type="password"
                  v-model="password"
                />
              </div><!--/.b-form-row -->
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
              <div class="b-form-row _d-hide">
                <div class="b-get-start">
                  <BaseGetStarted />
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
import {email, required} from "vuelidate/lib/validators";
import { mobileDetect } from '../../utils'

const errText = 'Invalid email and password pair'

export default {
  name: 'TheLoginPage',

  data () {
    return {
      email: '',
      password: '',
      errorText: '',
      bg: 'bg_auth.svg',
      errorTexts: {
        email: 'Enter a valid email'
      }
    }
  },

  validations: {
    email: {
      required,
      email
    }
  },

  computed: {
    disabledBtn () {
      return this.email !== '' &&  this.password !== '' && !this.$v.email.$error
    },

    isMobile () {
      return mobileDetect()
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
            if (!this.isMobile) {
              if (process.env.NODE_ENV === 'production') {
                window.location.href = process.env.VUE_APP_EDITOR_DOMAIN
              } else {
                this.$router.push('/')
              }
            } else {
              this.$router.push('/after-sign-up')
            }
            this.errorText = ''
          })
          .catch(() => {
            this.errorText = errText
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
.b-error
  .b-base-error-text
    position: relative
.b-get-start
  margin: 3.2rem 0 0
</style>
