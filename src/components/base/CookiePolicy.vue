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
      Ptah uses cookies to ensure you get the best experience on our website.
      By staying on the page and continuing to use the site you are confirming
      that you agree to our <a href="https://cdn.ptah.pro/o_1ohKcv.pdf" target="_blank">Cookies Policy</a>. Thank you!
      <base-button
        tabindex="0"
        ref="ok"
        size="small"
        color="light-gray"
        @click="remove"
        class="cookies-policy__btn"
      >
        OK
      </base-button>
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

    @media only screen and (max-width: 800px)
      top: 20px

  &__description
    margin: 0

    font-size: 12px
    text-align: left
    line-height: 1.5

    a
      font-size: 12px
      color: #2089FF
      text-decoration: none

  &__btn
    @media only screen and (max-width: 800px)
      display: block
      margin-left: -8px

</style>
