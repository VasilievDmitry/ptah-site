<template>
  <div class="container">
    <Header />
    <main class="main">
      <FeatureMain
        title="A website building tool tailored to game developers. Simple to master and powerful to use."
        subtitle="Create your own website and sell your game directly to consumers"
      />
      <SwiperCircle
        heading="Features"
        :sliderData="[
          {
            title: '100+ Ready to Use Templates',
            desc:
              'For a variety of purposes from setting up an informational website to boosting your game sales',
            image: 'swiper-circle-1.png'
          },
          {
            title: 'No coding or designing',
            desc:
              'So you can build your website without writing a single line of code',
            image: 'swiper-circle-2.png'
          },
          {
            title: 'Numerous integrations',
            desc:
              'With third-party services for email marketing, social media reach, design, analytics, and much more',
            image: 'swiper-circle-3.png'
          },
          {
            title: 'Responsive design',
            desc:
              'And numerous features to create a powerful website in a single interface',
            image: 'swiper-circle-4.png'
          },
          {
            title: 'Tailored to your goals',
            desc: 'With a variety of tools to deliver top performance',
            image: 'swiper-circle-5.png'
          },
          {
            title: 'Fully customizable',
            desc:
              'Pick, create, launch. Or add your code and design for even deeper customization',
            image: 'swiper-circle-6.png'
          }
        ]"
      />
      <Promo
        title="Create as much as you need -"
        subtitle="unlimited number of landing pages included"
        button="See full specs"
        isAlter
        @clickBtnPromo="$router.push({ path: '/features' })"
      />
      <SwiperImages
        :images="[
          'swiper-simple-1.jpg',
          'swiper-simple-2.jpg',
          'swiper-simple-3.jpg',
          'swiper-simple-4.jpg',
          'swiper-simple-1.jpg',
          'swiper-simple-2.jpg',
          'swiper-simple-3.jpg',
          'swiper-simple-4.jpg'
        ]"
      />
      <PromoShort
        title="Welcome to the family"
        subtitle="of game developers who entrust Ptah with game promotion"
        button="Join Ptah"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import FeatureMain from "../layout/FeatureMain";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Promo from "../layout/Promo";
import PromoShort from "../layout/PromoShort";
import SwiperImages from "../layout/SwiperImages";
import SwiperCircle from "../layout/SwiperCircle";

export default {
  name: "Home",
  components: {
    SwiperCircle,
    PromoShort,
    Promo,
    Footer,
    Header,
    FeatureMain,
    SwiperImages
  }
};
</script>

<style lang="scss">
  @import "../../assets/styles/styles";
</style>
