<template>
  <section class="swiper-circle">
    <div class="swiper-circle__heading-wrapper">
      <h2 class="swiper-circle__heading">{{ heading }}</h2>
    </div>
    <div class="swiper-circle__circle-container">
      <div class="swiper-circle__circle-wrapper">
        <button
          v-for="(item, index) in sliderBullets"
          :key="item + index + 'bullet'"
          :class="[
            { 'is-active': currentIndex >= index },
            'swiper-circle__circle-button'
          ]"
          @click="handleClick(index)"
        >
          <span>{{ item }}</span>
        </button>
      </div>
      <ul class="swiper-circle__image-list">
        <li
          v-for="(item, ind) in sliderData"
          :class="[
            { 'is-active': currentIndex === ind },
            'swiper-circle__image-item'
          ]"
          :key="ind + 'imageSlide'"
        >
          <img
            v-if="currentIndex === ind"
            class="swiper-circle__image swiper-lazy slider_image"
            :src="item.image"
            alt="slide"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
    <div class="swiper-circle__text-container">
      <h2 class="swiper-circle__heading">{{ heading }}</h2>
      <swiper
        class="swiper swiper-circle__swiper"
        ref="swiperCircle"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="(slide, idx) in sliderData"
          :key="idx + 'slideText'"
        >
          <h4 class="swiper-circle__text-title">{{ slide.title }}</h4>
          <p class="swiper-circle__text-desc">{{ slide.desc }}</p>
        </swiper-slide>
        <button
          class="swiper-button swiper-button-prev swiper-circle__button"
          type="button"
          slot="button-prev"
        />
        <button
          class="swiper-button swiper-button-next swiper-circle__button swiper-circle__button--next"
          type="button"
          slot="button-next"
        />
      </swiper>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";

  export default {
    name: "SwiperCircle",
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      heading: String,
      sliderData: Array
    },
    data() {
      return {
        currentIndex: 0,
        sliderBullets: [1, 2, 3, 4, 5, 6],
        swiperOption: {
          preloadImages: false,
          lazy: true,
          watchSlidesVisibility: true,
          spaceBetween: 0,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        }
      };
    },
    mounted() {
      this.swiper.on("slideChange", () => {
        this.currentIndex = this.swiper.activeIndex;
      });
    },
    beforeDestroy() {
      this.swiper.on("slideChange");
    },
    computed: {
      swiper() {
        return this.$refs.swiperCircle.$swiper;
      }
    },
    methods: {
      handleClick(index) {
        this.swiper.slideTo(index);
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~swiper/swiper";
  @import "../../assets/styles/slider";
  @import "../../assets/styles/mixins/circle";

  .swiper-circle {
    display: flex;
    justify-content: flex-end;
    max-width: 1920px;
    margin: 0 auto;
    padding: 90px 60px 20px;

    @media (max-width: $laptopSmall) {
      padding: 60px 20px 20px;
    }

    @media (max-width: $tablet) {
      justify-content: space-between;
      padding: 60px 40px 20px;
    }

    @media (max-width: $mobile) {
      flex-direction: column;
      padding: 65px 10px 25px;
      max-width: 375px;
      margin: 0 auto;
    }

    &__heading-wrapper {
      display: none;

      @media (max-width: $mobile) {
        display: block;
      }
    }

    &__heading {
      display: inline-block;
      vertical-align: middle;
      padding: 0 0 0 15px;
      margin: 0 0 25px;
      font-family: $font-secondary;
      text-align: left;
      font-size: 22px;
      line-height: 26px;
      font-weight: 800;
      text-transform: uppercase;
      background: $pink-purple;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: $mobile) {
        display: none;
      }

      .swiper-circle__heading-wrapper & {
        @media (max-width: $mobile) {
          display: inline-block;
          vertical-align: middle;
          margin: 0 0 45px;
        }
      }
    }

    &__text-container {
      width: 30vw;
      padding: 165px 10vw 165px 0;
      text-align: left;

      @media (max-width: $laptopSmall) {
        padding: 165px 5vw 165px 0;
      }

      @media (max-width: $tablet) {
        padding: 25px 10px;
      }

      @media (max-width: $mobile) {
        width: auto;
        padding: 0;
      }
    }

    &__swiper {
      padding: 0 0 60px;

      @media (max-width: $mobile) {
        padding: 0 0 78px;
      }
    }

    &__text-title {
      padding: 0 0 0 15px;
      margin: 0 0 15px;
      font-family: $font-secondary;
      font-weight: 900;
      font-size: 36px;
      line-height: 43px;

      @media (max-width: $tablet) {
        font-size: 24px;
        line-height: 25px;
      }

      @media (max-width: $mobile) {
        padding: 0 55px;
        margin: 0 0 28px;
        text-align: center;
        font-size: 28px;
        line-height: 33px;
      }
    }

    &__text-desc {
      padding: 0 0 20px 15px;
      font-size: 22px;
      line-height: 1.4;

      @media (max-width: $tablet) {
        font-size: 16px;
      }

      @media (max-width: $mobile) {
        padding: 0 42px;
        text-align: center;
        font-size: 14px;
      }
    }

    &__button {
      top: auto;
      left: 15px;
      bottom: 0;
      width: 32px;
      height: 32px;

      @media (max-width: $mobile) {
        left: 32%;
      }

      &::after {
        width: 8px;
        height: 8px;
        border-left: 3px solid $white;
        border-bottom: 3px solid $white;
        top: 0;
      }

      &--next.swiper-button {
        left: 90px;

        @media (max-width: $mobile) {
          left: 56%;
        }

        &::after {
          transform: rotate(-135deg);
        }
      }
    }

    &__circle-container {
      position: relative;
      width: 590px;
      height: 680px;
      padding: 35px 0;
      margin: 0 12vw 0 0;

      @media (max-width: $laptopSmall) {
        margin: 0 5vw 0 0;
      }

      @media (max-width: $tablet) {
        width: 400px;
        height: 480px;
      }

      @media (max-width: $mobile) {
        width: 100%;
        height: auto;
        padding: 50px 0 20px;
        margin: 0;
      }
    }

    &__circle-wrapper {
      width: 590px;
      height: 590px;
      border: 3px solid rgba(126, 126, 126, 0.05);
      @include on-circle($item-count: 6, $circle-size: 590px);

      @media (max-width: $tablet) {
        width: 400px;
        height: 400px;
        @include on-circle($item-count: 6, $circle-size: 400px);
      }

      @media (max-width: $mobile) {
        display: none;
      }
    }

    &__circle-button {
      font-size: 0;
      line-height: 0;
      // background: $purple-blue;
      padding: 2px;
      border: none;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      & span {
        width: 51px;
        height: 51px;
        display: inline-block;
        border-radius: 50%;

        text-indent: -9999px;
        overflow: hidden;

        background: $purple-blue;
      }

      &:hover::before {
        opacity: 0.3;
      }

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 46px;
        height: 46px;
        background: $white;
        margin: -23px 0 0 -23px;
        // transform: translate3d(-50%, -50%, 0);
        border-radius: 50%;
        opacity: 1;
        transition: opacity $ease-in;

        @media (max-width: $tablet) {
          // width: 28px;
          // height: 28px;
        }
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 8px solid $white;
        border-radius: 50%;
        box-shadow: 0 0 2px rgba(#fff,0.5);
      }

      &.is-active {
        background: $purple-pink2;

        & span {
          display: none;
        }

        &::before {
          display: none;
        }

        &::after {
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          border: 7px solid $white;
        }
      }
    }

    &__image-list {
      position: absolute;
      bottom: -15px;
      left: 50%;
      width: 420px;
      height: 360px;
      transform: translate3d(-50%, -50%, 0);

      @media (max-width: $tablet) {
        bottom: 0;
        width: 250px;
        height: 250px;
      }

      @media (max-width: $mobile) {
        position: static;
        width: 100%;
        max-width: 375px;
        transform: none;
      }
    }

    &__image-item {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate3d(-50%, -50%, 0);
      transition: opacity 0ms ease-in;

      @media (max-width: $mobile) {
        top: 0;
        left: 0;
        max-width: 100%;
        transform: none;
      }

      &.is-active {
        opacity: 1;
        transition: opacity $ease-in;
      }
    }

    &__image {
      width: 430px;
      height: auto;
      max-height: 430px;
      font-size: 0;
      line-height: 0;
      object-fit: cover;

      @media (max-width: $tablet) {
        width: 250px;
        max-height: 250px;
      }

      @media (max-width: $mobile) {
        width: auto;
        max-width: 100%;
        /*max-width: 360px;*/
        max-height: 320px;
      }
    }
  }
</style>
