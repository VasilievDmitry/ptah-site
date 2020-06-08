<template>
  <section class="promo-short">
    <div class="promo-short__container">
      <h3 class="promo-short__title">
        {{ title }}
      </h3>
      <p class="promo-short__subtitle">{{ subtitle }}</p>
      <Button class="black" :text="button" />
    </div>
  </section>
</template>

<script>
import Button from "./Button";

export default {
  name: "PromoShort",
  components: { Button },
  props: {
    title: String,
    subtitle: String,
    button: String
  }
};
</script>

<style scoped lang="scss">
.promo-short {
  color: $white;
  background: $purple-pink2;

  &__container {
    max-width: 1000px;
    padding: 70px 0;
    margin: 0 auto;

    @media (max-width: $laptop) {
      max-width: 768px;
    }

    @media (max-width: $mobile) {
      padding: 70px 20px;
    }
  }

  &__title {
    margin: 0 0 20px;
    font-family: $font-secondary;
    font-size: 54px;
    line-height: 1.4;

    @media (max-width: $laptop) {
      font-size: 36px;
      line-height: 43px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 15px;
      font-size: 24px;
      line-height: 28px;
    }
  }

  &__subtitle {
    margin: 0 0 35px;
    font-size: 30px;
    line-height: 1.4;

    @media (max-width: $laptop) {
      font-size: 22px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 30px;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
