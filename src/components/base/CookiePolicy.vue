<template>
  <div id="cookies-policy" class="cookies-policy" v-if="isShow">
    <span
      id="cookies-policy-close"
      class="cookies-policy__close"
      @click="remove"
    >
      &times;
    </span>
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
  padding: 1rem 2rem 1rem 4rem

  background-color: #404958
  color: #fff

  &__close
    position: absolute
    top: 50%
    margin-top: -18px
    left: 8px

    font-size: 30px
    cursor: pointer

  &__description
    margin: 0

    font-size: 12px
    text-align: left
    line-height: 1.5

    a
      font-size: 12px
      color: #2089FF
      text-decoration: none

</style>
