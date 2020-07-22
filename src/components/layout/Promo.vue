<template>
  <section class="promo">
    <div class="promo__container">
      <h3 class="promo__title">{{ title }}</h3>
      <p class="promo__subtitle">{{ subtitle }}</p>
      <Button v-if="isAuth && !isAlter" @click="goToEditor" :class="{ alter: isAlter }" text="Create landing page"></Button>
      <Button
        v-else
        :class="{ alter: isAlter }"
        :text="button"
        @click="handleClick"
      />
    </div>
  </section>
</template>

<script>
import Button from "./Button";
import { mapState } from 'vuex'

export default {
  name: "Promo",
  components: { Button },
  props: {
    title: String,
    subtitle: String,
    button: String,
    isAlter: Boolean
  },

  computed: {
    ...mapState('User', ['isAuth'])
  },

  methods: {
    handleClick() {
      try {
        this.$gtag.event('Features_button_click', { 'event_category': 'CTA' })
      } catch (e) {
        console.log(e)
      }

      this.$emit("clickBtnPromo");
    },

    goToEditor () {
      window.location.href = 'https://editor.ptah.pro'
    }
  }
};
</script>

<style scoped lang="scss">
.promo {
  min-height: 630px;
  background-image: url("../../assets/images/promo.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top right;

  @media (min-width: $desktop) {
    min-height: 80vh;
  }

  @media (max-width: $laptop) {
    background-size: auto;
  }

  @media (max-width: $mobile) {
    min-height: 350px;
    background-image: url("../../assets/images/promo_mobile.png");
    background-size: 100% auto;
    background-position: 0 calc(100% + 2px);
  }

  &__container {
    max-width: 1000px;
    padding: 90px 20px;
    margin: 0 auto;

    @media (min-width: $desktop) {
      padding: 150px 20px;
    }

    @media (max-width: $mobile) {
      padding: 35px 20px;
    }
  }

  &__title {
    margin: 0 0 20px;
    font-size: 54px;
    line-height: 1.4;

    @media (max-width: $laptop) {
      font-size: 36px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 10px;
      font-size: 24px;
    }
  }

  &__subtitle {
    margin: 0 0 45px;
    font-size: 30px;
    line-height: 1.4;

    @media (max-width: $laptop) {
      font-size: 22px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 40px;
      font-size: 12px;
    }
  }
}
</style>
