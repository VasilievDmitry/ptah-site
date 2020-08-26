<template>
  <div class="container">
    <Header />
    <main class="main">
      <FeaturesDesc
        title="Features"
        heading="Promote your game with a professional site builder"
        content="Ptah makes editing pretty intuitive. Change and customize content right on the page in the real-time autosave preview area."
        :featuresList="[
          {
            name: '100+ Ready-to-Use Templates',
            src: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/29a177bd-f807-4b8f-8a00-3c5409dfd184.png'
          },
          {
            name: 'No coding or designing',
            src: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/c50ebead-054f-464c-a637-7ca147003c04.png'
          },
          {
            name: 'Numerous integration',
            src: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/bee708bd-b200-4721-b189-73ad76a79b7a.png'
          },
          {
            name: 'Tailored to your goals',
            src: 'https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/97be3363-cb81-472b-8fe3-909d1aa07b37.png'
          }
        ]"
      />
      <PromoImage
        title="Responsive design"
        description="Pick, create, launch. Or add your code and design for even deeper customization"
        icon="https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/859cb5a4-f88a-4741-b173-bc6a3a51938c.png"
        image="https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/e240db31-2094-43fb-9795-e471916ec2a4.png"
      />
      <PromoLarge
        title="Fully customizable"
        description="Pick, create, launch. Or add your code and design for even deeper customization"
        image="https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/24908393-94d3-41a6-9afe-0713e5c050af.png"
        icon="https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/2716ebe4-1588-4e4e-af90-e3029aaca60b.png"
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
