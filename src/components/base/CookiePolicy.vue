<template>
  <div id="cookies-policy" class="cookies-policy" v-if="isShow">
    <span
      id="cookies-policy-close"
      class="cookies-policy__close"
      @click="remove"
    >
      &times;
    </span>
    <h2 class="cookies-policy__title">
      Cookies policy
    </h2>
    <p class="cookies-policy__description">
      This website uses cookies.
      If you do not wish us to set cookies on your device, please do not use the website.
      Please read the <a href="https://cdn.ptah.pro/o_1ohKcv.pdf" target="_blank">Cookies Policy</a> for more information.
    </p>
  </div>
</template>

<script>
  import { setCookie, getCookie } from '../../utils'

  const POLICY_NAME = 'cookiePolicyPtahPro'

  export default {
    name: "CookiePolicy",

    data: () => ({
      isShow: false
    }),

    mounted() {
      let policyViewed = getCookie(POLICY_NAME)

      if (policyViewed) {
        this.remove()
      } else {
        this.isShow = true
      }
    },

    methods: {
      remove () {
        this.isShow = false
        void setCookie(POLICY_NAME, 'true', { expires: 60 })
      }
    }
  };
</script>

<style lang="sass">
.cookies-policy
  position: fixed
  left: 0
  bottom: 0
  z-index: 99999

  width: 100%
  padding: 1.7rem 2vw

  background-color: #404958
  color: #fff

  &__close
    position: absolute
    top: 8px
    left: 8px

    font-size: 18px
    cursor: pointer

  &__title
    margin: 0
    margin-bottom: 15px

    font-size: 20px
    font-weight: normal
    text-align: left

  &__description
    margin: 0

    font-size: 14px
    text-align: left
    line-height: 1.5

    a
      color: #1a79ac
      text-decoration: none

</style>
