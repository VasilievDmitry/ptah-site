<template>
  <div class="b-settings-form">
    <form action="" @submit.prevent="submit">
      <div class="b-auth-form">
        <div class="b-form">
          <div class="b-form-row">
            <base-text-field-auth
              label="Preferred name"
              placeholder="Enter your name"
              type="text"
              :hasError="$v.nameV.$error || errors.name"
              v-model="nameV"
              :errorText="errorTexts.name"
              v-model.trim="$v.nameV.$model"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row">
            <base-text-field-auth
              label=""
              placeholder=""
              type="text"
              v-model="email"
              :disabled="true"
            />
          </div><!--/.b-form-row -->
          <div class="b-form-row" v-if="!emailConfirmed && isSendConfirm">
            <div class="b-auth-form__description-after-form">
              <span class="b-auth-form__color-link">
                Please check your email and verify your account
              </span>
            </div>
          </div><!--/.b-form-row -->
          <div class="b-form-row" v-if="!emailConfirmed && !isSendConfirm">
            <div class="b-text-confirm">
              We’re sent you an email. Please, check it and verify your account.
              <a @click="clickSendConfirm">Didn’t get an email?</a>
            </div>
          </div><!--/.b-form-row -->
          <div class="b-form-row">
            <div class="b-auth-form__description-after-form">
              <button
                class="b-button-main"
                type="submit"
                :disabled="disabled"
              >
                Update
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
import {mapActions, mapState} from 'vuex'
import { required} from "vuelidate/lib/validators";

export default {
  name: 'SettingsForm',

  data () {
    return {
      nameV: '',
      errorText: {
        name: ''
      },
      errors: {
        name: false,
      },
      errorTexts: {
        name: 'Name is required'
      },
      errorsArr: {
        'user_name_is_required': {
          name: 'name',
          text: 'Name is required'
        }
      },
      disabled: false,
      isSendConfirm: false
    }
  },

  validations: {
    nameV: {
      required
    }
  },

  computed: {
    ...mapState('User', ['isAuth', 'user']),

    name () {
      return this.user ? this.user.name : ''
    },

    email () {
      return this.user ? this.user.email : ''
    },

    emailConfirmed () {
      return this.user ? this.user.emailConfirmed : false
    },

    disabledBtn () {
      return this.email !== '' &&  this.nameV !== ''
    }
  },

  methods: {
    ...mapActions('User', ['login', 'getUser', 'setUserName', 'sendConfirmation']),

    resetErrors () {
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = false
      })

      Object.keys(this.errorTexts).forEach(key => {
        this.errorTexts[key] = ''
      })
    },

    submit () {
      this.disabled = true
      this.resetErrors()

      this.setUserName(this.nameV)
        .then(() => {
          this.disabled = false
        })
        .catch((e) => {
          const mess = e.response.data.error.message
          const name = this.errorsArr[mess].name
          const text = this.errorsArr[mess].text

          this.errorTexts[name] = text
          this.errors[name] = true
          this.disabled = false
        })
    },

    clickSendConfirm () {
      this.sendConfirmation()
        .then(() => {
          this.disabled = false
          this.isSendConfirm = true
        })
        .catch(() => {
          this.disabled = false
          this.isSendConfirm = true
        })
    }
  },

  mounted () {
    this.getUser()
    setTimeout(() => {
      this.nameV = this.name
    }, 150)
  }
}
</script>

<style lang="sass">
  @import '../../assets/sass/auth.sass'

  .b-settings-form
    width: 100%
    @media only screen and (max-width: 768px)
      &
        max-width: 26rem

</style>
