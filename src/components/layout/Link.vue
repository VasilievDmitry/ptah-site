<template>
  <span>
    <template v-if="!externalRef">
      <router-link class="link" :to="href">
        {{ text }}
      </router-link>
    </template>
    <template v-else>
      <a class="link" :href="href" target="_blank" rel="noopener noreferrer">
        {{ text }}
      </a>
    </template>
  </span>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: String,
    text: String,
    externalRef: {
      default: false,
      type: Boolean
    }
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

  &.active {
    background: $white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.capital {
    text-transform: uppercase;
  }
}

.linkHeader * {
  @media (max-width: $desktop) {
    font-size: 12px;
    line-height: 14px;
  }

  @media (max-width: $mobile) {
    color: $black;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    text-transform: none;
    font-family: 'Rubik', sans-serif;
  }
}
</style>
