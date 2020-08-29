<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img
        class="swiper-lazy slider_image"
        alt="slide"
        loading="lazy"
        :data-srcset="`${image.large} 700w, ${image.small} 200w`"
        :data-src="image.large"
        sizes="(max-width: 768px) 200px, (min-width: 768px) 600px"
      />
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
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "SwiperImages",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    images: Array
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        preloadImages: false,
        lazy: true,
        watchSlidesVisibility: true,
        spaceBetween: 0,
        initialSlide: 1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            slidesOffsetBefore: 75,
            slidesOffsetAfter: 75,
            spaceBetween: 0
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

.swiper {
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 25vw;
    top: 0;
    left: 0;
    bottom: 0;
    background: $black-gray;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    width: 25vw;
    top: 0;
    right: 0;
    bottom: 0;
    background: $black-gray2;
  }
}

.swiper-slide {
  font-size: 0;
  line-height: 0;

  > img {
    width: 100%;
    height: 37vw;
    object-fit: cover;

    @media (max-width: $mobile) {
      height: 80vw;
    }
  }
}
</style>
