<template>
  <section class="swiper-rounded-images">
    <div class="swiper-rounded-images__container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in slides" :key="slide + index">
          <div class="swiper-rounded-images__slide">
            <div class="swiper-rounded-images__image-wrapper">
              <template v-if=" slide.image.indexOf('http') !== -1">
                <a :href="slide.link" target="_blank" ref="noopener noreferrer nofollow">
                  <img
                    class="swiper-rounded-images__image"
                    :src="slide.image"
                    alt="slide"
                  />
                </a>
              </template>
              <template v-else>
                 <img
                  class="swiper-rounded-images__image"
                  :src="require(`@assets/images/${slide.image}`)"
                  alt="slide"
                />
              </template>
            </div>
            <span class="swiper-rounded-images__heading">{{ slide.name }}</span>
          </div>
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
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "SwiperRoundedImages",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slides: Array
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        watchOverflow: true,
        spaceBetween: 15,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          768: {
            spaceBetween: 35
          },
          1000: {
            slidesPerView: 3
          },
          1300: {
            slidesPerView: 4
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~swiper/swiper";
@import "../../assets/styles/slider";

.swiper-rounded-images {
  min-height: 675px;
  padding: 10px 0;
  background-image: url("../../assets/images/promo.png");
  background-repeat: no-repeat;
  background-position: 0 calc(100% + 2px);
  background-size: 100% auto;

  @media (max-width: $laptop) {
    background-size: auto;
  }

  @media (max-width: $mobile) {
    min-height: 490px;
    background-image: url("../../assets/images/promo_mobile.png");
    background-size: 100% auto;
  }

  &__image-wrapper {
    margin: 0 0 30px;
  }

  &__image {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__heading {
    font-family: $font-secondary;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    font-weight: 800;
    background: $purple-blue;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.swiper {
  position: relative;
  width: 65vw;
  padding: 55px 65px 10px 75px;
  margin: 0;

  @media (max-width: $desktop) {
    width: 74vw;
  }

  @media (max-width: $mobile) {
    width: auto;
    padding: 55px 0 75px 10px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 10px;
    height: 128px;
    background: $purple-blue;
    border-radius: 0 10px 10px 0;

    @media (max-width: $mobile) {
      right: 0;
      border-radius: 0;
    }
  }
}

.swiper-slide {
  height: 300px;
  padding: 30px 10px;
  background: $white;
  box-shadow: 0 2px 8px rgba($black, 0.15);
  border-radius: 10px;

  @media (max-width: $desktop) {
    height: 230px;
  }
}

.swiper-button {
  top: 78%;
  left: 22px;
  width: 32px;
  height: 32px;

  @media (max-width: $mobile) {
    top: 98%;
    left: 40%;
  }

  &::after {
    width: 9px;
    height: 9px;
  }

  &.swiper-button-next {
    left: calc(100% - 40px);

    @media (max-width: $mobile) {
      left: 55%;
    }
  }
}
</style>
