<template>
  <section class="features-desc">
    <div class="features-desc__inner">
      <div class="features-desc__title-container">
        <h1 class="features-desc__title">{{ title }}</h1>
      </div>
      <div class="features-desc__content">
        <div class="features-desc__text">
          <h2 class="features-desc__text-heading">{{ heading }}</h2>
          <p class="features-desc__text-content">{{ content }}</p>
        </div>
        <ul class="features-desc__list">
          <li
            class="features-desc__item"
            v-for="(item, index) in featuresList"
            :key="index"
          >
            <img
              :src="item.src"
              :alt="item.name"
              loading="lazy"
            />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeaturesDesc",
  props: {
    title: String,
    heading: String,
    content: String,
    featuresList: Array
  }
};
</script>

<style scoped lang="scss">
.features-desc {
  &__inner {
    max-width: 144rem;
    padding: 145px 40px 85px 140px;
    margin: 0 auto;

    @media (max-width: $mobile) {
      padding: 120px 35px 15px;
    }
  }

  &__title-container {
    text-align: left;
  }

  &__title {
    display: inline-block;
    vertical-align: middle;
    font-family: $font-secondary;
    text-align: left;
    font-size: 22px;
    line-height: 26px;
    font-weight: 800;
    text-transform: uppercase;
    background: $purple-pink;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__content {
    display: flex;
    justify-content: flex-start;

    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }

  &__text {
    width: 48%;
    padding: 30px 50px 0 0;
    text-align: left;

    @media (max-width: $mobile) {
      width: auto;
      padding: 25px 0 0;
      margin: 0 0 60px;
    }
  }

  &__text-heading {
    margin: 0 0 55px;
    font-family: $font-secondary;
    font-size: 54px;
    line-height: 1.05;

    @media (max-width: $tablet) {
      margin: 0 0 25px;
      font-size: 40px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 35px;
      font-size: 36px;
      font-weight: 500;
    }
  }

  &__text-content {
    padding: 0 10px 0 0;
    color: $black2;
    font-size: 22px;
    line-height: 1.48;

    @media (max-width: $tablet) {
      font-size: 20px;
    }

    @media (max-width: $mobile) {
      font-size: 15px;
      line-height: 1.4;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 48%;

    @media (max-width: $mobile) {
      width: auto;
    }
  }

  &__item {
    width: 50%;
    padding: 0 0 0 3.5vw;
    margin: 0 0 48px;
    text-align: left;
    font-family: $font-secondary;
    font-size: 20px;
    line-height: 1.34;

    @media (max-width: $mobile) {
      padding: 0;
    }

    &:nth-child(2n) {
      @media (max-width: $mobile) {
        padding: 0 0 0 5vw;
      }
    }

    > span {
      display: block;
      padding: 5px 0 0;
      font-size: 20px;
      line-height: 1.3;

      @media (max-width: $tablet) {
        font-size: 16px;
      }

      @media (max-width: $mobile) {
        padding: 10px 0 0;
      }
    }

    > img {
      @media (max-width: $mobile) {
        width: 90px;
        height: 75px;
      }
    }
  }
}
</style>
