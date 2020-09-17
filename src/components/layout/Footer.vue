<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__upper">
        <div class="footer__upper-left">
          <h4 class="footer__upper-title">
            Subscribe to our newsletter
          </h4>
          <p class="footer__upper-description">
            Take the advantages to be informed
          </p>
        </div>
        <div class="footer__upper-right">
          <form
            class="footer__form ptah-form"
            data-action="https://one.us3.list-manage.com/subscribe/post?u=55f00c05234d901bda453f466&id=78db8b8c67"
            method="post"
            @submit="submitForm"
          >
            <input
              class="footer__input ptah-input"
              aria-label="Paste your email"
              type="email"
              name="EMAIL"
              required="required"
              placeholder="Paste your email"
            />
            <input
              style="position: fixed; left: -9999px;"
              type="text"
              name="b_55f00c05234d901bda453f466_78db8b8c67"
              tabindex="-1"
              class="ptah-valid"
              value=""
            >
            <Button
              class="footer__submit alter ptah-submit "
              type="submit"
              text="Subscribe"
            />
          </form>
        </div>
      </div>
      <div class="footer__lower">
        <div class="footer__menu-container">
          <ul class="footer__menu" v-if="false">
            <li class="footer__menu-header">
              <span>Product</span>
            </li>
            <li class="footer__menu-item">
              <Link href="/" text="Overview" />
            </li>
            <li class="footer__menu-item">
              <Link href="/pricing" text="Pricing" />
            </li>
          </ul>
          <ul class="footer__menu" v-if="false">
            <li class="footer__menu-header">
              <span>Resources</span>
            </li>
            <li class="footer__menu-item">
              <Link href="#" text="Blog" />
            </li>
            <li class="footer__menu-item">
              <Link href="/pricing" text="FAQ" />
            </li>
          </ul>
          <ul class="footer__menu">
            <li class="footer__menu-header">
              <span>Company</span>
            </li>
            <li class="footer__menu-item">
              <Link href="/about" text="About us" />
            </li>
            <li class="footer__menu-item footer__menu-item--icon">
              <a :href="linkToGithub" rel="noopener" class="footer__menu-link" target="_blank">
                <span>GitHub</span>
                <IconGithub />
              </a>
            </li>
          </ul>
          <ul class="footer__social">
            <li class="footer__social-item">
              <a href="https://www.facebook.com/ptah.pro" rel="noopener" class="footer__social-link" target="_blank">
                <IconFb />
              </a>
            </li>
            <li class="footer__social-item">
              <a href="https://twitter.com/Ptahpro" rel="noopener" class="footer__social-link" target="_blank">
                <IconTwit />
              </a>
            </li>
          </ul>
        </div>
        <!--a href="#" class="footer__blog">
          <h5 class="footer__blog-title">
            From the blog
          </h5>
          <img src="https://cdn.ptah.pro/prod/5ee8df25480c4e00018c407e/66877932-0e20-488a-8f1c-7b163d56f98f.png" alt="Blog image" />
          <span class="footer__blog-description"
            >How to promote your landing page?</span
          >
        </a-->
      </div>
      <p class="footer__copyright">© 2018 - 2020, Protocol.One LTD. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import Link from "./Link";
import Button from "./Button";
import IconGithub from "../../assets/icons/github.svg";
import IconFb from "../../assets/icons/fb.svg";
import IconTwit from "../../assets/icons/twit.svg";

export default {
  name: "Footer",
  components: { Button, Link, IconGithub, IconFb, IconTwit },
  data: () => ({
    linkToGithub: process.env.VUE_APP_GITHUB
  }),

  methods: {
    submitForm () {
      try {
        window.gtag('event', 'Subscribed to the newsletter')
      } catch (e) {
        console.log(e)
      }
    },

    submitFormPost (form) {
      let url = form.dataset.action
      let email = form.querySelector('.ptah-input').value
      let control = [form.querySelector('.ptah-valid').value, form.querySelector('.ptah-valid').getAttribute('name')]
      let body = `EMAIL=${encodeURIComponent(email)}&${control[1]}=${control[0]}`

      let req = new XMLHttpRequest()
      req.open('POST', url, true)
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

      req.onreadystatechange = function () {
        let button = form.getElementsByClassName('ptah-submit')[0]
        button.classList.add('submited')

        setTimeout(() => {
          button.classList.remove('submited')
        }, 1000)
      }

      req.send(body)
    }
  },

  mounted() {
    Array.from(document.querySelectorAll('.ptah-form')).forEach((element) => {

      element.addEventListener('submit', (e) => {
        e.preventDefault()
        this.submitFormPost(element)
      })
    })
  }
};
</script>

<style scoped lang="scss">
.footer {
  padding: 45px 2vw 45px 3vw;
  background: $black2;

  @media (max-width: $mobile) {
    padding: 65px 0 25px;
  }

  &__inner {
    max-width: 78vw;
    padding: 0 2vw 0 3vw;
    margin: 0 auto;

    @media (max-width: $desktop) {
      max-width: 1030px;
      padding: 0 15px 0 0;
    }

    @media (max-width: $mobile) {
      padding: 0;
    }
  }

  &__upper {
    display: flex;
    justify-content: space-between;
    padding: 0 0 45px;
    border-bottom: 1px solid rgba($gray2, .3);

    @media (max-width: $mobile) {
      flex-direction: column;
      align-items: stretch;
      padding: 0 25px 70px;
    }
  }

  &__upper-left {
    margin: 0 15px 0 0;

    @media (max-width: $mobile) {
      margin: 0 0 30px;
    }
  }

  &__upper-right {
    @media (max-width: $mobile) {
      padding: 0 20px;
    }
  }

  &__upper-title {
    margin: 0 0 5px;
    text-align: left;
    color: $white;
    font-weight: 800;
    text-transform: capitalize;

    @media (max-width: $mobile) {
      margin: 0 0 15px;
      text-align: center;
      font-size: 20px;
      line-height: 29px;
    }
  }

  &__upper-description {
    font-weight: 600;
    color: $gray3;

    @media (max-width: $mobile) {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__form {
    display: flex;
    align-items: center;

    @media (max-width: $mobile) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__input {
    width: 31vw;
    max-width: 450px;
    height: 68px;
    padding: 0 50px;
    background: $gray4;
    border: none;
    box-shadow: inset 4px 4px 8px rgba($black, 0.1);
    border-radius: 10px 0 0 10px;

    @media (max-width: $desktop) {
      height: 48px;
    }

    @media (max-width: $mobile) {
      width: 100%;
      border-radius: 10px;
      max-width: 350px;
      padding: 0 20px;
      margin: 0 auto 35px;
    }

    &::placeholder {
      color: $gray;

      @media (max-width: $mobile) {
        font-size: 14px;
      }
    }
  }

  &__submit {
    min-width: 215px;
    height: 68px;
    padding: 0 10px;
    border-radius: 0 10px 10px 0;

    @media (max-width: $desktop) {
      min-width: 165px;
      height: 48px;
    }

    @media (max-width: $mobile) {
      min-width: 200px;
      border-radius: 10px;
    }

    &::after {
      border-radius: 0 10px 10px 0;

      @media (max-width: $mobile) {
        border-radius: 10px;
      }
    }
  }

  &__lower {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 35px 0 10px;

    @media (max-width: $mobile) {
      padding: 50px 12vw 25px;
    }
  }

  &__menu-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media (max-width: $mobile) {
      width: 100%;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 7.5vw 0 0;

    @media (max-width: $mobile) {
      width: 100%;
      margin: 0 0 25px;
    }

    &:first-child {
      @media (max-width: $mobile) {
        order: 1;
      }
    }

    &:nth-child(2) {
      @media (max-width: $mobile) {
        order: 3;
      }
    }

    &:nth-child(3) {
      @media (max-width: $mobile) {
        order: 2;
      }
    }
  }

  &__menu-header {
    margin: 0 0 25px;
    color: $white;
    text-transform: capitalize;
    font-weight: 800;
  }

  &__menu-item {
    margin: 0 0 15px;

    &--icon {
      .footer__menu-link:hover {
        background: $purple-pink;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        opacity: 1;
      }
    }

    > a {
      text-transform: capitalize;
      font-weight: 400;
    }
  }

  &__menu-link {
    font-family: 'Rubik', sans-serif;
    position: relative;
    display: block;
    align-items: center;
    color: $white;
    text-decoration: none;
    cursor: pointer;

    > svg {
      width: 38px;
      height: 38px;
      vertical-align: middle;
      margin: -5px 0 0 15px;

      @media (max-width: $desktop) {
        width: 21px;
        height: 21px;
      }
    }
  }

  &__social {
    display: flex;
    width: 100%;
    padding: 35px 10px 0 0;

    @media (max-width: $mobile) {
      order: 4;
      justify-content: center;
      padding: 0;
      margin: 0 10px;
    }
  }

  &__social-item {
    margin: 0 20px 0 0;

    &:last-child {
      margin: 0;
    }
  }

  &__social-link {
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;

    @media (max-width: $desktop) {
      width: 25px;
      height: 25px;
    }

    @media (max-width: $mobile) {
      width: 32px;
      height: 32px;
    }
  }

  &__blog {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: $white;
    text-decoration: none;

    @media (max-width: $mobile) {
      display: none;
    }

    > img {
      width: 235px;
      height: 100%;
      margin: 0 0 10px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &__blog-title {
    margin: 0 0 5px;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    text-transform: capitalize;
  }

  &__blog-description {
    font-size: 13px;
    line-height: 18px;
    font-weight: 600;
    text-align: left;
  }

  &__copyright {
    font-size: 18px;
    line-height: 20px;
    color: $gray3;

    @media (max-width: $desktop) {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
