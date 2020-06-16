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
        <div class="b-auth-right-contain">
          <!-- form -->
          <div class="b-auth-form">
            <div class="b-auth-form__chapter">
              Forgot your password?
            </div>

            <div class="b-auth-form__description">
              Enter your email address below and we'll get you back on track.
            </div>

            <div class="b-auth-form__delimiter" />

            <div class="b-form">
              <div class="b-form-row">
                <base-text-field-auth
                  label="Email"
                  placeholder="Email or login"
                  type="text"
                  :hasError="$v.email.$error || errorText.length > 0"
                  :errorText="$v.email.$error ? errorTexts.email : errorText"
                  v-model.trim="$v.email.$model"
                />
              </div><!--/.b-form-row -->
              <div class="b-form-row" v-if="emailSendSuccess">
                <span class="b-text-confirm">
                  An email was sent to the specified email address. Please follow the link in it.
                </span>
              </div><!--/.b-form-row -->
              <div class="b-form-row">
                <div class="b-auth-form__description-after-form">
                  <button
                    class="b-button-main"
                    type="submit"
                    :disabled="!disabledBtn"
                  >
                    Request
                  </button>
                </div>
              </div><!--/.b-form-row -->
              <div class="b-form-row">
                <div class="b-auth-form__description-after-form">
                  <span class="b-auth-form__forgot-link" @click="goToSignIn">
                    Back to Sign in
                  </span>
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

export default {
  name: 'TheRestorePwdPage',

  data () {
    return {
      email: '',
      emailSendSuccess: false,
      errorText: '',
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
      return this.email !== ''
    }
  },


  methods: {
    ...mapActions('User', ['restorePwdFirst']),

    submit () {
      this.restorePwdFirst(this.email)
        .then(() => {
          this.emailSendSuccess = true
          this.errorText = ''
        })
        .catch((e) => {
          if (e.response.data.error.code === 404) {
            this.errorText = 'The specified email address was not found'
          } else {
            this.errorText = 'Something went wrong'
          }
        })
    },

    goToSignIn () {
      this.$router.push({ path: `/login` })
    },

    goToSignUp () {
      this.$router.push({ path: `/signup` })
    }
  }
}
</script>

<style scoped>

</style>
