<template>
  <header class="header" :isActive="isActive">
    <div class="header__container">
      <div class="header__logo" ref="logo" v-scroll="handleScroll">
        <router-link to="/" class="header__logo-link">
          <IconLogo class="header__logo-icon" />
        </router-link>
      </div>
      <nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <Link
              href="/features"
              text="Features"
              class="header__menu-link linkHeader"
            />
          </li>
          <li class="header__menu-item">
            <Link
              href="/about"
              text="About us"
              class="header__menu-link linkHeader"
            />
          </li>
          <li class="header__menu-item" v-if="false">
            <Link
              href="/pricing"
              text="Pricing"
              class="header__menu-link linkHeader"
            />
          </li>
          <li class="header__menu-item">
            <Link
              :href="linkToHelp"
              :externalRef="true"
              text="Docs"
              class="header__menu-link linkHeader"
            />
          </li>
          <li class="header__menu-item">
            <a
              :href="linkToGithub"
              target="_blank"
              class="header__menu-link linkHeader header__menu-link--icon"
            >
              <span class="header__menu-link header__menu-link--mobile"
                >GitHub</span
              >
              <IconGithub />
            </a>
          </li>
        </ul>
      </nav>

      <UserMenu @setActive="setActive" />
    </div>
  </header>
</template>

<script>
import Link from "./Link";
import IconLogo from "../../assets/icons/logo.svg";
import IconGithub from "../../assets/icons/github.svg";
import UserMenu from "./UserMenu";

export default {
  name: "Header",
  components: {
    Link,
    IconLogo,
    IconGithub,
    UserMenu
  },

  data: () => ({
    isActive: false,
    linkToHelp: process.env.VUE_APP_HELP,
    linkToGithub: process.env.VUE_APP_GITHUB
  }),

  watch: {
    isActive (value) {

      if (value && window.scrollY > 400) {
        this.$refs.logo.classList.remove('_hide')
      }

      if (!value && window.scrollY > 400) {
        this.$refs.logo.classList.add('_hide')
      }
    }
  },

  methods: {
    setActive (value) {
      this.isActive = value
    },

    handleScroll: function (evt, el) {
      if (window.scrollY > 400 && !this.isActive) {
        el.classList.add('_hide')
      } else {
        el.classList.remove('_hide')
      }
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: $black2;
  box-shadow: 0 5px 15px rgba($black, 0.15);

  @media (max-width: $desktop) {
    // padding: 1.7rem 2vw;
  }

  @media (max-width: $mobile) {
    background: transparent;
    box-shadow: none;
  }

  &__container {
    width: 100%;
    max-width: 78vw;
    margin: 0 auto;
    display: flex;
    padding: 3rem 2vw;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: $desktop) {
      min-width: 144rem;
      padding: 1.7rem 2vw;
    }

    @media (max-width: $mobile) {
      padding: 2rem 3.5vw;
    }

    @media (max-width: $mobile) {
      min-width: 100%;
    }
  }

  &__logo {
    position: relative;
    z-index: 1;
    padding: 0 3.5vw 0 1vw;

    &._hide {
      @media (max-width: $mobile) {
        display: none;
      }
    }
  }

  &__logo-link {
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
    fill: $white;

    @media (max-width: $mobile) {
      fill: $black;
    }

    > svg {
      vertical-align: middle;
    }
  }

  &__logo-icon {
    width: 12rem;
    height: 4.5rem;

    @media (max-width: $desktop) {
      width: 10rem;
      height: 3.4rem;
    }

    @media (max-width: $mobile) {
      width: 9rem;
      height: 3rem;
    }
  }

  &__menu {
    @media (max-width: $mobile) {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      // bottom: 0;
      z-index: -1;
      background: url("../../assets/images/header_mobile.png");
      background-repeat: no-repeat;
      background-position: 55% bottom;
      opacity: 0;
      transition: opacity 0ms ease-in;
    }

    .header[isActive] & {
      @media (max-width: $mobile) {
        z-index: 0;
        pointer-events: auto;
        opacity: 1;
        transition: opacity $ease-in;
      }
    }
  }

  &__menu-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;

    @media (max-width: $mobile) {
      flex-direction: column;
      padding: 65px 0 200px;
    }
  }

  &__menu-item {
    margin: 0 2.35vw 0 2.5vw;

    @media (max-width: $tablet) {
      margin: 0 1.5vw;
    }

    @media (max-width: $mobile) {
      margin: 0 1.75vw 28px;
    }
  }

  &__menu-link {
    display: inline-block;
    vertical-align: middle;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;

    &--icon {
      margin: 10px 0 0;

      @media (max-width: $mobile) {
        display: flex;
        text-decoration: none;
        align-items: center;
        margin: 0;
      }

      &:hover .header__menu-link--mobile {
        background: $purple-pink;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        opacity: 1;
      }
    }

    > svg {
      width: 38px;
      height: 38px;

      @media (max-width: $desktop) {
        width: 21px;
        height: 21px;
      }
    }

    &--mobile {
      display: none;

      @media (max-width: $mobile) {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding: 0 10px 0 30px;
        color: $black;
        text-decoration: none;
        text-transform: none;
        font-weight: 500;
        font-size: 18px;
        font-family: 'Rubik', sans-serif;
      }
    }
  }
}
</style>
