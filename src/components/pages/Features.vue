<template>
  <div class="container">
    <Header />
    <main class="main">
      <FeaturesDesc
        title="Features"
        heading="Promote your game with a professional site builder"
        content="The Ptah makes editing pretty intuitive. Change and customize content right on the page in the real-time autosave preview area."
        :featuresList="[
          {
            name: '100+ Ready-to-Use Templates',
            src: 'pic_ready.png'
          },
          {
            name: 'No coding or designing',
            src: 'pic_coding.png'
          },
          {
            name: 'Numerous integration',
            src: 'pic_integration.png'
          },
          {
            name: 'Tailored to your goals',
            src: 'pic_goals.png'
          }
        ]"
      />
      <PromoImage
        title="Responsive design"
        description="Pick, create, launch. Or add your code and design for even deeper customization"
        icon="promo-icon.png"
        image="promo-image.png"
      />
      <PromoLarge
        title="Fully customizable"
        description="Pick, create, launch. Or add your code and design for even deeper customization"
        image="promo-large.png"
        icon="promo-large-icon.png"
        :heading="'Great tool<br/> for every ideas'"
        :swiperData="[
          [
            {
              heading: 'Mobile-ready landing',
              desc:
                'Ptah naturally creates responsive landing pages which perfectly perform on any mobile device.'
            },
            {
              heading: 'Custom CSS & JavaScript',
              desc:
                'You’re welcome to utilize all creative power of your design team to make your landing pages unique with custom CSS and JavaScript.'
            },
            {
              heading: 'Built-in Google Fonts',
              desc:
                'Ptah has a built-in Google Fonts library which offers about 1000 fonts to choose from.'
            }
          ],
          [
            {
              heading: 'Launch countdown timer',
              desc:
                'The launch countdown timer helps you to interact with your audience until the game is live can provide the motivation thus generate more leads and sales.'
            },
            {
              heading: 'MailChimp integration',
              desc:
                'Our MailChimp integration helps you reach out to your audience.'
            },
            {
              heading: 'AWS cloud hosting',
              desc:
                'Your Ptah-built landing pages are hosted on Amazon Web Services, one of the fastest and most reliable hosting providers on the internet.'
            }
          ],
          [
            {
              heading: 'Unlimited number of landing pages',
              desc:
                'You can build as many landing pages as you want to optimize for different audiences, sell games at different platforms'
            },
            {
              heading: 'Google Analytics',
              desc:
                'Your Ptah-built landing pages easily connect to Google Analytics & Google Tag Manager to help you optimize game sales performance.'
            },
            {
              heading: 'Custom domain name',
              desc:
                'The first thing that view visitors is a domain. Set up your beautiful brandable domain for the Ptah landing page.'
            }
          ]
        ]"
      />
      <Promo
        title="Create your own website"
        subtitle="and sell your game directly to consumers"
        button="Start for free"
        @clickBtnPromo="clickBtnPromo"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import FeaturesDesc from "../layout/FeaturesDesc";
import PromoImage from "../layout/PromoImage";
import PromoLarge from "../layout/PromoLarge";
import Promo from "../layout/Promo";

export default {
  name: "Home",
  components: {
    PromoLarge,
    PromoImage,
    FeaturesDesc,
    Footer,
    Header,
    Promo
  },
  methods: {
    clickBtnPromo () {
      this.$router.push({ path: `/signup` })
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/styles/styles";
</style>
