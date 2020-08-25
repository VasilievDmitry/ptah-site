<template>
  <div>
    <form action="" @submit.prevent="submit" class="b-auth">
      <div class="b-auth-right">
        <span class="b-auth-right__logo-ptah">
          <BasePtahLogo />
        </span>
        <div class="b-auth-right-contain">
          <!-- form -->
          <div class="b-auth-form">
            <div class="b-auth-form__chapter">
              <img
                src="https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/1d61eb5e-d347-4fae-8101-53610239f319.jpg"
                class="b-auth-right__img"
                loading="lazy"
              />
            </div>

            <div class="b-auth-form__description">
              A verification link to confirm the account was sent to your email. Please, check the email on your PC and
              click the link to go to Ptah Builder. Trust me, that is the best advice for today. It's not very
              comfortable to edit a landing page right from the phone ;)
            </div>

            <div class="b-auth-form__delimiter" />

            <div class="b-form">
              <div class="b-form-row">
                <div class="b-auth-form__description-after-form">
                  <button
                    class="b-button-main"
                    type="submit"
                  >
                    Got it!
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
  export default {
    name: 'TheMessageAfterSignUp',

    methods: {
      submit () {
        this.$router.push({ path: `/` })
      }
    }
  }
</script>

<style scoped>
.b-auth-right__img {
  width: 89px;
  height: 82px;
}
.b-auth-form__description {
  width: 25rem;
  margin: 0 auto;
  font-size: 12px;
  line-height: 18px;
  padding: 1.6rem 0 0;
  color: #000;
}
</style>
