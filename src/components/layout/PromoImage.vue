<template>
  <section class="promo-image">
    <div class="promo-image__container">
      <div class="promo-image__content">
        <img
          :src="icon"
          alt="icon"
          class="promo-image__icon"
          loading="lazy"
        />
        <h1 class="promo-image__title">{{ title }}</h1>
        <p class="promo-image__desc">{{ description }}</p>
      </div>
      <img
        :src="image"
        alt="image"
        class="promo-image__image"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "PromoImage",
  props: {
    title: String,
    description: String,
    image: String,
    icon: String
  }
};
</script>

<style scoped lang="scss">
.promo-image {
  position: relative;
  min-height: 490px;
  margin: 0 0 50px;
  background: $purple-pink3;

  @media (max-width: $tablet) {
    min-height: 400px;
  }

  @media (max-width: $mobile) {
    min-height: 550px;
    margin: 0 0 60px;
  }

  &__container {
    max-width: 78vw;
    margin: 0 auto;
    padding: 130px 38vw 100px 16vw;

    @media (min-width: $desktop) {
      max-width: 144rem;
      padding: 130px 0 100px 18rem;
      margin: 0 auto;
    }

    @media (max-width: $desktop) {
      max-width: 144rem;
      padding: 130px 0 100px 18rem;
      margin: 0 auto;
    }

    @media (max-width: $tablet) {
      padding: 80px 58vw 80px 16vw;
    }

    @media (max-width: $mobile) {
      padding: 60px 40px;
    }
  }

  &__content {
    max-width: 40rem;
    text-align: left;
    font-family: $font-secondary;
    color: $white;
  }

  &__icon {
    width: 118px;
    height: 100px;
    object-fit: cover;
    margin: 0 0 15px;

    @media (max-width: $tablet) {
      width: 100px;
      height: 80px;
    }

    @media (max-width: $mobile) {
      width: 90px;
      height: 70px;
    }
  }

  &__title {
    margin: 0 0 15px;
    font-size: 36px;
    line-height: 43px;
    font-weight: 900;

    @media (max-width: $tablet) {
      font-size: 32px;
      line-height: 38px;
    }

    @media (max-width: $mobile) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  &__desc {
    font-size: 18px;
    line-height: 1.4;

    @media (max-width: $tablet) {
      font-size: 16px;
    }
  }

  &__image {
    position: absolute;
    bottom: -52px;
    right: 8.5vw;
    width: 550px;
    height: auto;
    max-height: 475px;
    object-fit: cover;

    @media (min-width: $desktop) {
      bottom: -52px;
      width: 650px;
      right: 20.5vw;
    }

    @media (max-width: $desktop) {
      bottom: -52px;
      width: 550px;
      right: 12.5vw;
    }

    @media (max-width: $laptopSmall) {
      bottom: -44px;
      width: 450px;
    }

    @media (max-width: $tablet) {
      bottom: -34px;
      width: 350px;
    }

    @media (max-width: $tablet) {
      width: 100%;
      max-width: 350px;
    }
  }
}
</style>
