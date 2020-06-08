<template>
  <div class="price-options">
    <h1 class="price-options__title">
      {{ title }}
    </h1>
    <p class="price-options__description">
      <span>{{ description }}</span>
      <button class="link--embeded" type="button">{{ currency }}</button>
    </p>
    <div class="price-options__container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in optionsData" :key="index">
          <PriceOption :data="item" />
        </swiper-slide>
        <button
          class="swiper-button swiper-button-prev"
          type="button"
          slot="button-prev"
        />
        <button
          class="swiper-button swiper-button-next"
          type="button"
          slot="button-next"
        />
      </swiper>
    </div>
  </div>
</template>

<script>
import PriceOption from "./PriceOption";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "PriceOptions",
  components: {
    PriceOption,
    Swiper,
    SwiperSlide
  },
  props: {
    title: String,
    description: String,
    currency: String,
    optionsData: Array
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        watchOverflow: true,
        spaceBetween: 15,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import "~swiper/swiper";
@import "../../assets/styles/slider";

.price-options {
  padding: 150px 20px 125px;

  @media (max-width: $mobile) {
    padding: 120px 0 40px;
  }

  &__title {
    margin: 0 0 22px;
    font-family: $font-secondary;
    text-align: center;
    font-size: 36px;
    line-height: 46px;
    color: $purple;
    text-transform: uppercase;

    @media (max-width: $laptop) {
      font-size: 22px;
      line-height: 26px;
    }

    @media (max-width: $mobile) {
      text-align: left;
      padding: 0 0 0 58px;
    }
  }

  &__description {
    margin: 0 0 15px;

    @media (max-width: $mobile) {
      padding: 0 40px;
      margin: 0 0 25px;
    }

    > span {
      color: $black2;
    }

    > button {
      margin: 0 0 0 8px;
      font-size: 16px;
      line-height: 22px;
    }
  }

  &__container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: $mobile) {
      flex-wrap: wrap;
      margin: 0 5vw;
    }
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
  }

  .swiper-container {
    width: 100%;
    padding: 10px;

    @media (max-width: $mobile) {
      padding: 10px 10px 90px;
    }
  }

  .swiper-button {
    top: auto;
    bottom: 0;
    left: 37%;
  }

  .swiper-button-next {
    left: 56%;
  }
}
</style>
