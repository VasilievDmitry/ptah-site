<template>
  <div class="b-change-password-form">
    <form action="" @submit.prevent="submit">
      <!-- form -->
      <div class="b-auth-form">
        <div class="b-form">
          <div class="b-form-row">
            <base-text-field-auth
              label="Current password"
              placeholder="Enter current password"
              :hasError="errors.currentPass || $v.currentPass.$error"
              :errorText="errorTexts.currentPass"
              v-model="$v.currentPass.$model"
              type="password"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row newPass">
            <base-text-field-auth
              label="New password"
              placeholder="Enter new password"
              type="password"
              :hasError="errors.newPass || $v.newPass.$error"
              :errorText="errorTexts.newPass"
              v-model="$v.newPass.$model"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row">
            <base-text-field-auth
              label="Re-enter new password"
              placeholder="Re-enter new password"
              :hasError="errors.rePass || $v.rePass.$error"
              :errorText="errorTexts.rePass"
              type="password"
              v-model="$v.rePass.$model"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row b-success-mess" v-if="isChangeSuccess">
            <div class="b-auth-form__description-after-form b-success-mess">
              <span class="b-auth-form__color-link b-success-mess">
                Password has been changed
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
                Change
              </button>
            </div>
          </div><!--/.b-form-row -->
        </div>
      </div>
      <!--/ end form -->
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'TheSignUpPage',

  data () {
    return {
      currentPass: '',
      newPass: '',
      rePass: '',
      errors: {
        currentPass: false,
        newPass: false,
        rePass: false
      },
      errorTexts: {
        currentPass: 'Enter old password',
        newPass: 'The password must be at least 8 characters long and include letters and numbers only',
        rePass: 'Passwords must match'
      },
      errorsArr: {
        'user_weak_password': {
          name: 'newPass',
          text: 'The password must be at least 8 characters long and include letters and numbers only'
        },
        'old_password_mismatch': {
          name: 'currentPass',
          text: 'Old password mismatch'
        }
      },
      isChangeSuccess: false
    }
  },

  validations: {
    currentPass: {
      required,
    },
    newPass: {
      required,
      minLength: minLength(8)
    },
    rePass: {
      sameAsPassword: sameAs('newPass')
    }
  },

  computed: {
    disabledBtn () {
      return this.currentPass !== '' && this.newPass !== '' &&  this.rePass !== '' && !this.$v.$invalid
    },

    dontMatchPass () {
      return this.newPass !== this.rePass
    }
  },

  methods: {
    ...mapActions('User', ['setUserPassword']),

    submit () {
      this.resetErrors()

      if (this.dontMatchPass) {
        this.errors['newPass'] = true
        this.errors['rePass'] = true

        this.errorTexts['newPass'] = ''
        this.errorTexts['rePass'] = 'Passwords must match'

        return
      }

      this.setUserPassword({
        oldPassword: this.currentPass,
        password: this.newPass
      })
        .then(() => {
          this.isChangeSuccess = true
          this.currentPass = ''
          this.newPass = ''
          this.rePass = ''
        })
        .catch((e) => {
          const mess = e.response.data.error.message
          const name = this.errorsArr[mess].name
          const text = this.errorsArr[mess].text

          this.errorTexts[name] = text
          this.errors[name] = true

          this.isChangeSuccess = false
        })
    },

    resetErrors () {
      this.$v.$reset()

      Object.keys(this.errors).forEach(key => {
        this.errors[key] = false
      })
    },
  }
}
</script>

<style lang="sass">
@import '../../assets/sass/auth.sass'
.b-change-password-form
  width: 100%
  @media only screen and (max-width: 768px)
    &
      max-width: 26rem
.newPass
  position: relative
  .b-base-error-text
    position: relative !important
    text-align: left

.b-success-mess
  margin: 0 auto
  padding: 0
  text-align: center
</style>
