<template>
  <div class="accordion" :isActive="isActive">
    <div class="accordion__toggle-wrapper">
      <button class="accordion__toggle" @click="onToggleClick">
        <span>{{ data.name }}</span>
        <SuperCom />
      </button>
      <p class="accordion__text">
        <span>
          {{ data.text }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import SuperCom from "../../assets/icons/arrow.svg";

export default {
  name: "Accordion",
  props: {
    data: Object
  },
  components: {
    SuperCom
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    onToggleClick() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped lang="scss">
.accordion {
  &__toggle-wrapper {
    margin: 0 0 10px;
  }

  &__toggle {
    position: relative;
    width: 100%;
    height: 58px;
    padding: 0 48px;
    text-align: left;
    background: $pink-purple3;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: box-shadow $ease-in;

    @media (max-width: $desktop) {
      height: 48px;
    }

    .accordion[isActive] & {
      box-shadow: 0 4px 4px rgba($black, 0.15);
    }

    > svg {
      position: absolute;
      top: 20px;
      right: 28px;
      width: 16px;
      height: 11px;
      transition: transform $ease-in;
      fill: $white;

      .accordion[isActive] & {
        transform: rotate(-180deg);
      }
    }

    > span {
      color: $white;
      font-weight: 600;
    }
  }

  &__text {
    max-height: 0;
    transition: max-height $ease-in, padding 0ms ease-in;
    overflow: hidden;

    .accordion[isActive] & {
      max-height: 500px;
    }

    > span {
      display: block;
      padding: 25px 25px 32px;
      margin: 0 20px 20px;
      box-shadow: 5px 5px 15px rgba($black, 0.15);
      border-radius: 0 0 10px 10px;
    }
  }
}
</style>
