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
            image: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/5873814f-6d5b-4e4d-a697-a6b5d3482452.png'
          },
          {
            title: 'No coding or designing',
            desc:
              'So you can build your website without writing a single line of code',
            image: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/27760126-b4ec-419d-9c76-f6d33efcf321.png'
          },
          {
            title: 'Numerous integrations',
            desc:
              'With third-party services for email marketing, social media reach, design, analytics, and much more',
            image: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/cc1e885b-98ad-4f87-b647-21317eee3955.png'
          },
          {
            title: 'Responsive design',
            desc:
              'And numerous features to create a powerful website in a single interface',
            image: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/37088955-7942-48ef-b43b-e266e7f7ee06.png'
          },
          {
            title: 'Tailored to your goals',
            desc: 'With a variety of tools to deliver top performance',
            image: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/1b518fae-d35d-4f8a-a1e5-4919c99f5f70.png'
          },
          {
            title: 'Fully customizable',
            desc:
              'Pick, create, launch. Or add your code and design for even deeper customization',
            image: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/e415da2b-758b-43f9-9868-053735125617.png'
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
          {
            large: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/8cc6c70b-952d-4517-a2c2-7f5daa6c0b17.jpg',
            small: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/4242064f-481b-4a2c-96d8-1ea2c9dda1ae.jpg'
          },
          {
            large: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/b0696ad8-8666-423d-8f0a-785c8b809248.jpg',
            small: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/b5ea44e6-332b-4f02-8a77-5c32c2638bca.jpg'
          },
          {
            large: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/ef13e30c-fae4-4d67-8599-c172afa3cbc7.jpg',
            small: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/f2a1305c-7528-450b-b84d-369071f1a818.jpg'
          },
          {
            large: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/2c6c09d8-d69d-4783-925e-3bc1e8456564.jpg',
            small: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/d8b02d94-f261-4fe4-a110-3a215ab6d77d.jpg'
          },
          {
            large: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/389f9b66-534d-43b0-a193-c0dddac598d1.jpg',
            small: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/11146dbe-1fc8-455a-a99e-2f3a8d699a41.jpg'
          },
          {
            large: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/f4fca071-8df5-448e-9eb7-d2c6e2c6802f.jpg',
            small: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/784ef867-5e30-408c-b12e-3083e4864da0.jpg'
          }
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
import { scrollEvent, fixTime, timeFormat, getTimeInterval, getScrollingInterval } from '../../trackEvents'

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
  },

  data () {
    return {
      current_max: 0,
      startLiveDoc: 0
    }
  },

  mounted () {
    this.startLiveDoc = fixTime()

    window.addEventListener('scroll', function () {
      this.current_max = scrollEvent(this.current_max)
    })
  },

  beforeDestroy () {
    let current_max_string = this.current_max.toString() + '%'
    let endLiveDoc = fixTime()
    let timeLiveDoc = timeFormat(endLiveDoc - this.startLiveDoc)
    let percent_of_scrolling_int = getScrollingInterval(this.current_max)
    let time_on_page_int = getTimeInterval(endLiveDoc - this.startLiveDoc)

    try {
      this.$gtm.trackEvent({
        'event': 'Scroll to',
        'percent_of_scrolling': current_max_string,
        'time_on_page': timeLiveDoc,
        'percent_of_scrolling_interval' : percent_of_scrolling_int,
        'time_on_page_interval' : time_on_page_int
      })
    } catch (e) {
      console.log(current_max_string)
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/styles/styles";
</style>
