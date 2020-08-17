<template>
  <div class="container">
    <Header />
    <main class="main">
      <PriceOptions
        title="Pricing"
        description="Choose a new plan to satisfy your needs."
        :optionsData="[
          {
            title: 'Free',
            price: {
              currency: '$',
              value: '0'
            },
            period: 'Only for one project',
            description: [
              'For inviduals or small team.',
              'Allows publish only three projects.'
            ],
            button: 'Start free',
            advantages: [
              {
                value: 'Landings: 3',
                active: true
              },
              {
                value: 'Team members: 1',
                active: true
              },
              {
                value: 'Library space: 50Mb',
                active: true
              },
              {
                value: 'Free hosting',
                active: true
              },
              {
                value: 'Integrations',
                active: true
              },
              {
                value: 'Custom domains',
                active: false
              },
              {
                value: 'Remove branding',
                active: false
              },
              {
                value: 'Export Source code',
                active: false
              }
            ]
          },
          {
            title: 'Startup',
            isActive: true,
            price: {
              currency: '$',
              value: '29',
              additional: 'per year 290$'
            },
            period: 'Per month, billing annually',
            description: [
              'For inviduals.',
              'Allows publishing up to 15 projects.'
            ],
            button: 'Start with startup',
            advantages: [
              {
                value: 'Landings: 15',
                active: true
              },
              {
                value: 'Team members: 1',
                active: true
              },
              {
                value: 'Library space: 300Mb',
                active: true
              },
              {
                value: 'Free hosting',
                active: true
              },
              {
                value: 'Integrations',
                active: true
              },
              {
                value: 'Custom domains',
                active: true
              },
              {
                value: 'Remove branding',
                active: true
              },
              {
                value: 'Export Source code',
                active: true
              }
            ]
          },
          /*
          {
            title: 'Team',
            price: {
              currency: '$',
              value: '49',
              additional: 'per year 490$'
            },
            period: 'Per month, billing monthly, up to 10 users',
            description: [
              'For companies with professional teams',
              'collaborationg arcoss several projects.'
            ],
            button: 'Start with team',
            advantages: [
              {
                value: 'Landings: 300',
                active: true
              },
              {
                value: 'Team members: 10',
                active: true
              },
              {
                value: 'Library space: 15Gb',
                active: true
              },
              {
                value: 'Free hosting',
                active: true
              },
              {
                value: 'Integrations',
                active: true
              },
              {
                value: 'Custom domains',
                active: true
              },
              {
                value: 'Remove branding',
                active: true
              },
              {
                value: 'Export Source code',
                active: true
              }
            ]
          }*/
        ]"
      />
      <Faq
        v-if="false"
        title="Faq"
        :categories="[
          'Builder',
          'Landing page',
          'Pricing',
          'Subscription',
          'Customization'
        ]"
        heading="Builder"
        :answersBuilder="[
          {
            name: 'Builder, question 1',
            text:
              '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Builder, question 2',
            text:
              '1221Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Builder, question 3',
            text:
              '33Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Builder, question 4',
            text:
              '44Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Builder, question 5',
            text:
              '55Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          }
        ]"
        :answersLanding="[
          {
            name: 'Landing, question 1',
            text:
              '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Landing, question 2',
            text:
              '1221Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Landing, question 3',
            text:
              '1221Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Landing, question 4',
            text:
              '1221Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          }
        ]"
        :answersPricing="[
          {
            name: 'Pricing, question 1',
            text:
              '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Pricing, question 2',
            text:
              '1221Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Pricing, question 3',
            text:
              '1221Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          }
        ]"
        :answersSubscription="[
          {
            name: 'Subscription, question 1',
            text:
              '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          },
          {
            name: 'Subscription, question 2',
            text:
              '1221Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          }
        ]"
        :answersCustomization="[
          {
            name: 'Customization, question 1',
            text:
              '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida est sociis quis quis metus. Nisl eu, gravida sollicitudin adipiscing accumsan integer scelerisque. Diam donec a, eu ridiculus urna enim id elit dictum.'
          }
        ]"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PriceOptions from "../layout/PriceOptions";
import Faq from "../layout/Faq";

import { FAQ_ANSWERS } from "../../mockData/FAQ_ANSWERS";

export default {
  name: "Pricing",
  components: {
    Faq,
    PriceOptions,
    Header,
    Footer
  },
  computed: {
    faqAnswers() {
      return FAQ_ANSWERS;
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/styles/styles";

  @media (min-width: $mobile) {
    .swiper-wrapper {
      justify-content: center;
    }
  }
</style>
