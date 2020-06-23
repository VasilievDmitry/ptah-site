<template>
  <section class="feature">
    <div class="feature__container">
      <h1 class="feature__title">
        {{ title }}
      </h1>
      <h2 class="feature__subtitle">
        {{ subtitle }}
      </h2>
      <Button @click="goToEditor" v-if="isAuth" text="Create landing page"></Button>
      <Button
        v-else
        @click="onStartFreeClick"
        text="Try for free"
      />
      <div class="feature__icon">
        <div class="feature__icon-gif-wrapper">
          <video class="feature__icon-gif"  preload="auto" autoplay="true" loop="true" muted="muted">
           <source src="../../assets/video/pc-screen.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button";
import { mapState } from 'vuex'

export default {
  name: "FeatureMain",
  components: {
    Button
  },
  props: {
    title: String,
    subtitle: String
  },

  computed: {
    ...mapState('User', ['isAuth'])
  },

  methods: {
    onStartFreeClick () {
      try {
        this.$gtag('FirstScreen_button_click', { 'event_category': 'CTA' })
      } catch (e) {
        console.log(e)
      }

      this.$router.push({ path: `/signup` })
    },

    goToEditor () {
      window.location.href = 'https://editor.ptah.pro'
    }
  }
};
</script>

<style scoped lang="scss">
.feature {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 0 26rem;
  color: $white;
  background-position: 50% 50%;
  background-size: auto;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/feature_bg.jpg");

  @media (max-width: $desktop) {
    min-height: 94rem;
    margin: 0 0 12rem;
    background-size: 100% auto;
    background-image: url("../../assets/images/feature_bg_desktop.jpg");
  }

  @media (max-width: $laptop) {
    background-size: auto;
  }

  @media (max-width: $tablet) {
    margin: 0 0 80px;
  }

  @media (max-width: $mobile) {
    min-height: 710px;
    margin: 0 0 65px;
    background-image: url("../../assets/images/feature_bg_mobile.jpg");
    background-position: 50% 0;
  }

  &__container {
    flex-grow: 1;
    max-width: 144rem;
    padding: 55rem 0;
    margin: 0 auto;

    @media (min-width: $desktop) {
      padding: 34rem 0 55rem;
    }

    @media (max-width: $desktop) {
      max-width: 800px;
      padding: 30rem 0;
    }

    @media (max-width: $laptopSmall) {
      padding: 20rem 0 30rem;
    }

    @media (max-width: $tablet) {
      max-width: 500px;
      padding: 25rem 0 30rem;
    }

    @media (max-width: $mobile) {
      padding: 225px 20px;
    }
  }

  &__title {
    margin: 0 0 60px;
    font-size: 54px;
    line-height: 64px;
    font-family: $font-secondary;

    @media (max-width: $desktop) {
      margin: 0 0 30px;
      font-size: 30px;
      line-height: 36px;
    }

    @media (max-width: $mobile) {
      margin: 0 0 35px;
      font-size: 21px;
      line-height: 25px;
    }
  }

  &__subtitle {
    margin: 0 0 60px;
    font-size: 32px;
    line-height: 38px;
    font-weight: 600;

    @media (max-width: $desktop) {
      margin: 0 0 40px;
      font-size: 22px;
      line-height: 28px;
    }

    @media (max-width: $mobile) {
      padding: 0 40px;
      margin: 0 0 30px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__icon {
    position: absolute;
    left: 50%;
    bottom: -230px;
    width: 530px;
    height: 770px;
    background-image: url("../../assets/images/pc_user.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    transform: translateX(-50%);

    @media (max-width: $desktop) {
      bottom: -115px;
      width: 310px;
      height: 410px;
    }

    @media (max-width: $mobile) {
      bottom: -70px;
      width: 220px;
      height: 280px;
    }
  }

  &__icon-gif-wrapper {
    position: absolute;
    top: 108px;
    left: 58px;
    width: 399px;
    height: 186px;
    transform: perspective(120px) rotateX(-17deg);
    overflow: hidden;
    border-radius: 2px 2px 4px 4px;

    @media (max-width: $desktop) {
      top: 31px;
      left: 50px;
      width: 202px;
      height: 86px;
      border-radius: 3px;
      transform: perspective(130px) rotateX(-28deg);
    }

    @media (max-width: $mobile) {
      top: 17px;
      left: 35px;
      width: 144px;
      height: 60px;
      border-radius: 1px 1px 3px 3px;
      transform: perspective(90px) rotateX(-27deg);
    }
  }

  &__icon-gif {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;

    width: 312px;
    height: 111px;

    width: 104%;
    height: 104%;
    border-radius: 2px 2px 4px 4px;

    @media (max-width: $desktop) {
      // width: 202px;
      // height: 86px;
      border-radius: 3px;
    }

    @media (max-width: $mobile) {
      // width: 144px;
      // height: 61px;
      border-radius: 1px 1px 3px 3px;
    }
  }
}
</style>
