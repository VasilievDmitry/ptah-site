<template>
  <section class="promo-large">
    <div class="promo-large__upper">
      <img
        :src="image"
        alt="Promo image"
        class="promo-large__upper-image"
        loading="lazy"
      />
      <div class="promo-large__upper-content">
        <img
          :src="icon"
          alt="Promo icon"
          class="promo-large__upper-icon"
          loading="lazy"
        />
        <h2 class="promo-large__title">{{ title }}</h2>
        <p class="promo-large__description">{{ description }}</p>
      </div>
    </div>
    <div class="promo-large__lower">
      <h3 class="promo-large__heading" v-html="heading" />
      <div class="promo-large__swiper">
        <div
          v-for="(column, index) in swiperData"
          :key="column + index"
        >
          <ul class="promo-large__list">
            <li
              class="promo-large__list-item"
              v-for="(item, index) in column"
              :key="item + index"
            >
              <h4 class="promo-large__item-heading">
                {{ item.heading }}
              </h4>
              <p class="promo-large__item-desc">
                {{ item.desc }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "PromoLarge",

  props: {
    image: String,
    icon: String,
    title: String,
    description: String,
    heading: String,
    swiperData: Array
  }
};
</script>

<style scoped lang="scss">
@import "~swiper/swiper";
@import "../../assets/styles/slider";

.promo-large {
  position: relative;
  max-width: 80vw;
  margin: 0 0 50px;

  @media (max-width: $desktop) {
    max-width: none;
  }

  &__upper {
    position: relative;
  }

  &__upper-content {
    min-height: 480px;
    padding: 100px 2vw 50px 50vw;
    text-align: left;

    @media (min-width: $desktop) {
      padding: 100px 3vw 50px 60vw;
    }

    @media (max-width: $desktop) {
      padding: 100px 12vw 50px 61.5vw;
    }

    @media (max-width: $tablet) {
      min-height: 410px;
      padding: 50px 8vw 50px 52vw;
    }

    @media (max-width: $mobile) {
      min-height: 500px;
      padding: 10px 35px;
    }
  }

  &__upper-image {
    position: absolute;
    top: 60px;
    left: 12.5vw;
    width: 550px;
    height: auto;
    max-height: 475px;
    object-fit: cover;

    @media (min-width: $desktop) {
      left: 27vw;
    }

    @media (max-width: $desktop) {
      left: 20vw;
    }

    @media (max-width: $laptopSmall) {
      top: 137px;
      width: 450px;
    }

    @media (max-width: $tablet) {
      top: 143px;
      left: 5vw;
      width: 350px;
    }

    @media (max-width: $mobile) {
      top: auto;
      left: 6.5vw;
      bottom: -35px;
      width: 100%;
      max-width: 350px;
    }
  }

  &__upper-icon {
    width: 118px;
    height: 100px;
    object-fit: cover;
    margin: 0 0 10px;

    @media (max-width: $tablet) {
      width: 100px;
      height: 80px;
    }

    @media (max-width: $mobile) {
      width: 90px;
      height: 70px;
      margin: 0 0 15px;
    }
  }

  &__title {
    margin: 0 0 15px;
    font-family: $font-secondary;
    font-size: 36px;
    line-height: 43px;
    font-weight: 900;

    @media (max-width: $tablet) {
      font-size: 32px;
      line-height: 36px;
    }

    @media (max-width: $mobile) {
      font-size: 30px;
    }
  }

  &__description {
    margin: 0 0 10px;
    font-size: 18px;
    line-height: 1.4;

    @media (max-width: $mobile) {
      font-size: 16px;
    }
  }

  &__lower {
    max-width: 79vw;
    border-radius: 0 10px 10px 0;
    padding: 92px 10px 30px 5.5vw;
    margin: 0 0 30px;
    color: $white;
    background: $purple-pink4;

    @media (min-width: $desktop) {
      padding: 60px 5vw 30px 23vw;
    }

    @media (max-width: $desktop) {
      padding: 60px 5vw 30px 14vw;
    }

    @media (max-width: $tablet) {
      max-width: 90vw;
      padding: 40px 5vw 30px 5vw;
    }

    @media (max-width: $mobile) {
      max-width: none;
      padding: 52px 8vw 10px 8vw;
      border-radius: 0;
    }
  }

  &__swiper {
    display: flex;

    & > div {
      &:last-child {
        .promo-large__list {
          padding-right: 0;
        }
      }
    }

    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }

  &__heading {
    margin: 0 0 65px;
    text-align: left;
    font-family: $font-secondary;
    font-size: 36px;
    line-height: 1.3;
    font-weight: 900;

    @media (max-width: $tablet) {
      margin: 0 0 30px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 45px;
      font-size: 30px;
      line-height: 36px;
    }
  }

  &__list {
    padding: 0 5vw 0 0;

    @media (max-width: $tablet) {
      padding: 0 30px 0 0;
    }

    @media (max-width: $mobile) {
      max-width: 450px;
      padding: 0 30px 40px 0;
    }
  }

  &__list-item {
    min-height: 225px;
    padding: 0 0 50px;
    text-align: left;

    @media (max-width: $mobile) {
      min-height: auto;
      padding: 0 0 12vw;
    }
  }

  &__item-heading {
    margin: 0 0 20px;
    font-family: $font-secondary;
    font-size: 20px;
    line-height: 1.34;
    font-weight: 900;

    @media (max-width: $tablet) {
      margin: 0 0 15px;
      font-size: 16px;
    }

    @media (max-width: $mobile) {
      font-size: 21px;
    }
  }

  &__item-desc {
    font-size: 18px;
    line-height: 1.35;

    @media (max-width: $tablet) {
      font-size: 14px;
    }

    @media (max-width: $mobile) {
      padding: 0 30px 0 0;
      font-size: 16px;
    }
  }
}
</style>
