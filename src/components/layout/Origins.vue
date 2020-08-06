<template>
  <section class="origins">
    <h1 class="origins__title">{{ title }}</h1>
    <div class="origins__columns">
      <div class="origins__column">
        <p class="origins__paragraph">Ptah is a game dev focused website building tool.</p>
        <p class="origins__paragraph">Our mission - We reinvent the industry on a fair and transparent basis.</p>
        <p class="origins__paragraph">Our team - The core Ptah team is made up of employees of
          <a href="https://protocol.one/" target="_blank" rel="noopener noreferrer" class="link--embeded">Protocol
            One</a>. It is part of
          <a href="https://super.com/" target="_blank" rel="noopener noreferrer" class="link--embeded">Super.com</a>
          company which is focused on making free and open-source solutions available both for internal use and to all
          game developers in the
          world.</p>
      </div>
      <div class="origins__column">
        <p class="origins__paragraph">Available to all - We’re focused on open source code. Thus our products can be
          used independently. Ptah can be like an embedded page editor for any service that needs it.
          If you like our project, you can help us make it even better on
          <a href="https://github.com/ProtocolONE/ptah-editor" class="link--embeded">GitHub</a>.</p>
      </div>
    </div>
    <div class="origins__logos">
      <a href="https://super.com/" class="origins__logo">
        <SuperCom />
      </a>
      <a
        href="https://protocol.one/"
        class="origins__logo origins__logo--protocol"
      >
        <ProtocolOne />
      </a>
    </div>
  </section>
</template>

<script>
import ProtocolOne from "../../assets/icons/protocol_one.svg";
import SuperCom from "../../assets/icons/super_com.svg";

export default {
  name: "Origins",
  props: {
    title: String,
    text: Array
  },
  components: {
    ProtocolOne,
    SuperCom
  }
};
</script>

<style scoped lang="scss">
.origins {
  max-width: 1400px;
  padding: 150px 40px 10px;
  margin: 0 auto;

  @media (max-width: $laptop) {
    max-width: 990px;
  }

  @media (max-width: $mobile) {
    padding: 125px 40px 25px;
  }

  &__columns {
    display: flex;
    justify-content: space-between;

    @media (max-width: $mobile) {
      max-width: 450px;
      flex-wrap: wrap;
    }
  }

  &__column {
    width: calc(50% - 20px);

    @media (max-width: $mobile) {
      width: 100%;
      margin: 0 0 20px;
    }
  }

  &__title {
    margin: 0 0 20px;
    font-family: $font-secondary;
    text-align: left;
    font-size: 36px;
    line-height: 46px;
    color: $purple;
    text-transform: uppercase;

    @media (max-width: $laptop) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  &__paragraph {
    margin: 0 0 30px;
    color: $black2;
    font-size: 26px;
    line-height: 36px;
    text-align: left;


    @media (max-width: $desktop) {
      font-size: 22px;
      line-height: 30px;
    }

    @media (max-width: $laptop) {
      font-size: 22px;
      line-height: 30px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 20px;
      font-size: 15px;
      line-height: 20px;
    }
  }

  &__logos {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 60px 10px 0;

    @media (max-width: $mobile) {
      flex-direction: column;
      padding: 40px 0;
    }
  }

  &__logo {
    &:first-of-type {
      margin: 0 40px 0 0;

      @media (max-width: $mobile) {
        margin: 0 0 25px;
      }
    }

    > svg {
      width: 275px;
      height: 52px;

      @media (max-width: $mobile) {
        width: 180px;
        height: 34px;
      }
    }

    &--protocol {
      > svg {
        width: 217px;
        height: 69px;

        @media (max-width: $mobile) {
          width: 180px;
          height: 58px;
        }
      }
    }
  }
}
</style>
