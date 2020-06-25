<template>
  <button
    @click="handleClick"
    class="button"
    :class="[
      { '_circle': type === 'circle' },
      { '_active': active }
    ]"
    :disabled="isDisabled"
  >
    <span class="button__text">
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    isDisabled: Boolean,
    defaultValue: Boolean,
    active: Boolean,
    type: {
      defaultValue: '',
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  },
  data: () => ({
    isActive: true
  }),
  mounted() {
    this.isActive = this.defaultValue;
  }
};
</script>

<style scoped lang="scss">
.button {
  position: relative;
  min-width: 395px;
  height: 92px;
  padding: 0 50px;
  color: $white;
  font-weight: 800;
  background: $pink-purple;
  border: none;
  box-shadow: 5px 5px 15px rgba($black, 0.15);
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow $ease-in;


  @media (max-width: $desktop) {
    min-width: 220px;
    height: 56px;
  }

  @media (max-width: $mobile) {
    min-width: 200px;
    height: 50px;
    padding: 0 45px;
  }

  &:hover {
    box-shadow: 0 1px 5px rgba($black, 0.1), 0 3px 4px rgba($black, 0.12),
      0 2px 4px rgba($black, 0.14);

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $purple-pink;
    opacity: 0;
    border-radius: 10px;
    transition: opacity $ease-in;

    &:hover {
      opacity: 1;
    }
  }

  &[disabled] {
    pointer-events: none;
    cursor: default;

    &.black {
      background: $gray;
    }
  }

  &.alter {
    background: $purple-blue;

    &::after {
      background: $blue-purple;
    }
  }

  &.submited {
    background: $green-blue;

    &::after {
      background: $green-blue;
    }
  }

  &.black {
    background: $black;

    &::after {
      background: $blue-purple;
    }
  }

  &.small {
    min-width: 255px;
    height: 70px;
    font-size: 26px;
    line-height: 30px;

    @media (max-width: $desktop) {
      font-size: 14px;
      min-width: 150px;
      height: 41px;
      padding: 0 20px;
    }

    @media (max-width: $mobile) {
      height: 44px;
      padding: 0 55px;
    }
  }


  &.small._circle {
    height: 70px;
    width: 70px;
    min-width: auto;
    border-radius: 100%;
    text-align: center;
    padding: 0;

    &:after {
      display: none;
    }

    @media (max-width: $desktop) {
      height: 41px;
      width: 41px;
    }

    @media (max-width: $mobile) {
      height: 44px;
      width: 44px;
    }

    &._active {
      color: $black;
      background: $white;
    }

    &:hover {
      color: $black;
      background: $white;
      &:after {
        border-radius: 100%;
        background: $white;
      }
    }
  }

  &__text {
    position: relative;
    z-index: 1;
    font-weight: 800;

    @media (max-width: $desktop) {
      line-height: 1;
    }

    [disabled] & {
      opacity: 0.5;
    }

    [disabled].black & {
      opacity: 1;
    }

    .alter & {
      @media (max-width: $mobile) {
        font-size: 16px;
      }
    }

    .small & {
      font-size: 26px;
      line-height: 32px;
      font-weight: 600;

      @media (max-width: $desktop) {
        font-size: 14px;
        line-height: 32px;
      }

      @media (max-width: $laptop) {
        font-size: 14px;
        line-height: 19px;
      }

      @media (max-width: $mobile) {
        font-size: 16px;
        line-height: 22px;
      }
    }

    .burger & {
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      top: 17px;
      left: 10px;
      width: 16px;
      height: 2px;
      background: $black;
      transition: width $ease-in;
    }

    .header[isActive] & {
      width: 0;
    }
  }

  &.burger {
    width: 36px;
    min-width: auto;
    height: 36px;
    padding: 0;
    background: $blue-purple2;
    border-radius: 50%;
    transition: box-shadow $ease-in;

    &:hover {
      box-shadow: 0px 1px 5px rgba($black, 0.1), 0px 3px 4px rgba($black, 0.12),
        0px 2px 4px rgba($black, 0.14);
    }

    &:active {
      box-shadow: 0px 8px 10px rgba($black, 0.14),
        0px 3px 14px rgba($black, 0.12);
    }

    &::before {
      content: "";
      position: absolute;
      top: 22px;
      left: 10px;
      width: 16px;
      height: 2px;
      background: $black;
      opacity: 1;
      transition: transform $ease-in;
    }

    &::after {
      position: absolute;
      top: 12px;
      left: 10px;
      width: 16px;
      height: 2px;
      background: $black;
      opacity: 1;
      transition: transform $ease-in;
    }

    .header[isActive] & {
      background: none;
      box-shadow: none;

      &::before {
        top: 17px;
        transform: rotate(-45deg);
      }

      &::after {
        top: 17px;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
