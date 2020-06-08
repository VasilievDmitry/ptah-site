<template>
  <header class="header" :isActive="isActive">
    <div class="header__logo">
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
        <li class="header__menu-item">
          <Link
            href="/pricing"
            text="Pricing"
            class="header__menu-link linkHeader"
          />
        </li>
        <li class="header__menu-item">
          <Link href="#" text="Docs" class="header__menu-link linkHeader" />
        </li>
        <li class="header__menu-item">
          <a
            href="github.com"
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
    <div class="header__controls">
      <a href="#" class="header__controls-login">Sign in</a>
      <Button class="small header__controls-button" text="Start free" />
      <Button
        class="burger header__controls-toggle"
        @onBurgerClick="onBurgerClick"
      />
    </div>
  </header>
</template>

<script>
import Link from "./Link";
import Button from "./Button";
import IconLogo from "../../assets/icons/logo.svg";
import IconGithub from "../../assets/icons/github.svg";

export default {
  name: "Header",
  components: { Button, Link, IconLogo, IconGithub },
  data: () => ({
    isActive: false
  }),
  methods: {
    onBurgerClick() {
      this.isActive = !this.isActive;
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
  padding: 30px 2vw;
  justify-content: flex-start;
  align-items: center;
  background: $black2;
  box-shadow: 0 5px 15px rgba($black, 0.15);

  @media (max-width: $desktop) {
    padding: 17px 2vw;
  }

  @media (max-width: $mobile) {
    padding: 20px 3.5vw;
    background: transparent;
    box-shadow: none;
  }

  &__logo {
    position: relative;
    z-index: 1;
    padding: 0 3.5vw 0 1vw;
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
    width: 120px;
    height: 45px;

    @media (max-width: $desktop) {
      width: 100px;
      height: 34px;
    }

    @media (max-width: $mobile) {
      width: 90px;
      height: 30px;
    }
  }

  &__menu {
    @media (max-width: $mobile) {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
      background: url("../../assets/images/header_mobile.png");
      background-repeat: no-repeat;
      background-position: 50% 0;
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
        font-weight: 600;
      }
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
  }

  &__controls-login {
    display: block;
    margin: 0 3vw 0 1vw;
    font-size: 26px;
    line-height: 30px;
    font-weight: 800;
    color: $white;
    border: none;
    background: none;
    cursor: pointer;

    @media (max-width: $desktop) {
      font-size: 14px;
      line-height: 19px;
    }

    @media (max-width: $mobile) {
      display: none;
      position: fixed;
      top: 315px;
      left: 50%;
      margin: 0;
      font-size: 18px;
      line-height: 21px;
      font-weight: 600;
      transform: translateX(-50%);
    }

    &:hover {
      background: $purple-pink;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
    }

    .header[isActive] .header__menu ~ .header__controls & {
      display: inline-block;
      vertical-align: middle;
    }
  }

  &__controls-button {
    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__controls-toggle {
    display: none;

    @media (max-width: $mobile) {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
