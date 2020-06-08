<template>
  <router-link class="link" :to="href">{{ text }}</router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: String,
    text: String
  }
};
</script>

<style scoped lang="scss">
.link {
  position: relative;
  font-size: 22px;
  line-height: 24px;
  font-weight: 800;
  color: $white;
  text-decoration: none;

  @media (max-width: $desktop) {
    font-size: 14px;
    line-height: 19px;
  }

  &:hover {
    background: $purple-pink;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 1;
  }

  &.disabled {
    color: rgba($white, 0.5);
    pointer-events: none;
    cursor: default;
  }

  &.capital {
    text-transform: uppercase;
  }

  &.linkHeader {
    @media (max-width: $desktop) {
      font-size: 12px;
      line-height: 14px;
    }

    @media (max-width: $mobile) {
      color: $black;
      font-size: 18px;
      line-height: 21px;
      font-weight: 600;
      text-transform: none;
    }
  }
}
</style>
