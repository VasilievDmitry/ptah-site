<template>
  <aside class="price-option">
    <h3 class="price-option__title">{{ data.title }}</h3>
    <div class="price-option__price-container">
      <span class="price-option__price-currency">
        {{ data.price.currency }}
      </span>
      <span class="price-option__price-value">
        {{ data.price.value }}
      </span>
      <span class="price-option__price-additional">
        {{ data.price.additional }}
      </span>
    </div>
    <p class="price-option__period">
      {{ data.period }}
    </p>
    <div class="price-option__description">
      <p class="price-option__description-value">{{ data.description[0] }}</p>
      <p class="price-option__description-value">{{ data.description[1] }}</p>
    </div>
    <Button
      :class="[{ alter: data.isActive }, 'small']"
      :text="`${data.button}`"
    />
    <ul class="price-option__pro-list">
      <li
        v-for="(item, index) in data.advantages"
        class="price-option__pro-item"
        :class="{ '_active': item.active }"
        :key="index"
      >
        {{ item.value }}
      </li>
    </ul>
  </aside>
</template>

<script>
import Button from "./Button";

export default {
  name: "PriceOption",
  components: { Button },
  props: {
    data: Object,
    isActive: Boolean
  }
};
</script>

<style scoped lang="scss">
.price-option {
  flex-grow: 1;
  padding: 60px 20px 25px;
  box-shadow: 0 2px 8px rgba($black, 0.15);
  border-radius: 10px;

  @media (max-width: $mobile) {
    padding: 38px 20px 30px;
    margin: 0;
  }

  .swiper-slide:nth-child(2n) & {
    background: $pink-purple2;
    color: $white;
  }

  &__title {
    font-size: 22px;
    line-height: 26px;
    font-family: $font-secondary;
    font-weight: 900;
    text-transform: uppercase;
  }

  &__price-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 55px 0 35px;
    font-family: "Roboto", serif;
    font-weight: 900;

    @media (max-width: $mobile) {
      padding: 40px 0 32px;
    }
  }

  &__price-currency {
    height: 50px;
    margin: 0 0 -5px;
    font-size: 50px;
    line-height: 50px;
  }

  &__price-value {
    height: 110px;
    line-height: 110px;
    font-size: 145px;

    @media (max-width: $tablet) {
      height: 75px;
      font-size: 100px;
      line-height: 80px;
    }

    @media (max-width: $mobile) {
      height: 110px;
      line-height: 110px;
      font-size: 145px;
    }
  }

  &__price-additional {
    font-size: 16px;
  }

  &__period {
    margin: 0 0 40px;
    color: $gray5;
    font-size: 14px;
    line-height: 19px;

    @media (max-width: $mobile) {
      margin: 0 0 45px;
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
    }

    .swiper-slide:nth-child(2n) & {
      color: $white;
    }
  }

  &__description {
    margin: 0 0 25px;
    color: $black2;
    font-weight: 600;

    @media (max-width: $mobile) {
      margin: 0 0 28px;
    }

    .swiper-slide:nth-child(2n) & {
      color: $white;
    }
  }

  &__description-value {
    font-size: 18px;
    line-height: 24px;

    @media (max-width: $laptop) {
      font-size: 16px;
      line-height: 22px;
    }

    @media (max-width: $tablet) {
      font-size: 14px;
      line-height: 18px;
    }

    @media (max-width: $mobile) {
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
    }
  }

  &__pro-list {
    padding: 45px 0 0;

    @media (max-width: $mobile) {
      padding: 35px 0 0;
    }
  }

  &__pro-item {
    position: relative;
    padding: 0 0 0 70px;
    text-align: left;
    color: $gray5;

    @media (max-width: $tablet) {
      padding: 0 0 0 30px;
      font-size: 14px;
      line-height: 18px;
    }

    @media (max-width: $mobile) {
      padding: 0 0 0 35px;
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
    }

    .swiper-slide:nth-child(2n) & {
      color: $white;
    }

    &:not(:last-of-type) {
      margin: 0 0 25px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 5px;
      left: 32px;
      width: 14px;
      height: 5px;
      border-left: 2px solid $gray5;
      border-bottom: 2px solid $gray5;
      transform: rotate(-45deg);

      @media (max-width: $tablet) {
        left: 5px;
      }

      @media (max-width: $mobile) {
        top: 6px;
        left: 1px;
      }
    }

    &._active {
      color: $black;
      &::before {
        border-left: 2px solid $purple3;
        border-bottom: 2px solid $purple3;
      }
    }
  }
}
</style>
