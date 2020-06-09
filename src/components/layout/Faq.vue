<template>
  <section class="faq">
    <div class="faq__container">
      <h2 class="faq__title">{{ title }}</h2>
      <div class="faq__button-container">
        <button
          :class="[{ 'is-active': activeTab === item }, 'faq__button']"
          class="faq__button"
          v-on:click="activeTab = item"
          v-for="(item, index) in categories"
          :isActive="item.isActive"
          :key="index"
        >
          <span>{{ item }}</span>
        </button>
      </div>
      <div class="faq__heading-wrapper">
        <div class="faq__answers-container">
          <div class="faq__heading-container">
            <h3 class="faq__heading">{{ activeTab }}</h3>
          </div>
          <div v-if="activeTab === 'Builder'">
            <Accordion
              v-for="(item, index) in answersBuilder"
              :key="index + 'AccordionBuilder'"
              :data="item"
            />
          </div>
          <div v-if="activeTab === 'Landing page'">
            <Accordion
              v-for="(item, index) in answersLanding"
              :key="index + 'AccordionLanding'"
              :data="item"
            />
          </div>
          <div v-if="activeTab === 'Pricing'">
            <Accordion
              v-for="(item, index) in answersPricing"
              :key="index + 'AccordionPricing'"
              :data="item"
            />
          </div>
          <div v-if="activeTab === 'Subscription'">
            <Accordion
              v-for="(item, index) in answersSubscription"
              :key="index + 'AccordionSubvscription'"
              :data="item"
            />
          </div>
          <div v-if="activeTab === 'Customization'">
            <Accordion
              v-for="(item, index) in answersCustomization"
              :key="index + 'AccordionCusctomization'"
              :data="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from "./Accordion";

export default {
  name: "Faq",
  components: { Accordion },
  data() {
    return {
      activeTab: "Builder"
    };
  },
  props: {
    title: String,
    heading: String,
    categories: Array,
    answersBuilder: Array,
    answersLanding: Array,
    answersPricing: Array,
    answersSubscription: Array,
    answersCustomization: Array
  }
};
</script>

<style scoped lang="scss">
.faq {
  padding: 10px 0 115px;

  @media (max-width: $mobile) {
    display: none;
  }

  &__container {
    max-width: 680px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__title {
    margin: 0 0 48px;
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

  &__button-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__button {
    position: relative;
    min-width: 162px;
    height: 43px;
    line-height: 1;
    margin: 0 25px 40px;
    background: $pink-purple;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba($black, 0.15);
    cursor: pointer;

    &.is-active {
      color: $white;
      cursor: default;
      pointer-events: none;

      &::before {
        display: none;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background: $white;
      border-radius: 8px;
    }

    > span {
      position: relative;
      font-size: 14px;
      font-weight: 800;
    }
  }

  &__heading-wrapper {
    padding: 0 40px;
  }

  &__heading-container {
    text-align: left;
  }

  &__heading {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 20px;
    font-family: $font-secondary;
    text-align: left;
    font-size: 22px;
    line-height: 26px;
    font-weight: 800;
    text-transform: uppercase;
    background: $pink-purple;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
