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
              :hasError="errors.currentPass"
              :errorText="errorTexts.currentPass"
              v-model="currentPass"
              type="password"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row">
            <base-text-field-auth
              label="New password"
              placeholder="Enter new password"
              type="password"
              :hasError="errors.newPass"
              :errorText="errorTexts.newPass"
              v-model="newPass"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row">
            <base-text-field-auth
              label="Re-enter new password"
              placeholder="Re-enter new password"
              :hasError="errors.rePass"
              :errorText="errorTexts.rePass"
              type="password"
              v-model="rePass"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row" v-if="isChangeSuccess">
            <div class="b-auth-form__description-after-form">
              <span class="b-auth-form__color-link">
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
        currentPass: '',
        newPass: '',
        rePass: ''
      },
      errorsArr: {
        'user_weak_password': {
          name: 'newPass',
          text: 'Your password must be at least 8 characters'
        }
      },
      isChangeSuccess: false
    }
  },

  computed: {
    disabledBtn () {
      return this.currentPass !== '' && this.newPass !== '' &&  this.rePass !== ''
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
        return;
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
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = false
      })

      Object.keys(this.errorTexts).forEach(key => {
        this.errorTexts[key] = ''
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
</style>
