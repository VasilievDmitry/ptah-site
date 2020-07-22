<template>
  <div class="b-user-menu__controls" :isActive="isActive">
    <template v-if="!isAuth">
      <a href="/login" class="b-user-menu__controls-login">
        Sign in
      </a>
      <Button
        class="small b-user-menu__controls-button"
        text="Start for Free"
        @click="onStartFreeClick"
      />
      <Button
        class="burger b-user-menu__controls-toggle"
        @click="onBurgerClick"
      />
    </template>
    <template v-else>
      <a :href="goToPtah" target="_blank" class="b-user-menu__controls-login">
        Go to Ptah
      </a>
      <template v-if="isActive">
        <div class="b-list">
          <a class="b-link" @click="clickOnSettings"
             :class="[
               { 'active' : $route.fullPath === `/account` }
             ]"
          >
            Account settings
          </a>
          <a class="b-link" @click="clickSignOut">
            Sign out
          </a>
        </div>
      </template>
      <Button
        class="small b-user-menu__controls-button"
        :text="getShortName(name)"
        type="circle"
        :active="isShow"
        @click="onIconUserClick"
      />
      <DropdownMenu
        @clickOnSetting="clickOnSettingsInDropMenu"
        v-if="isShow"
      />
      <Button
        class="burger b-user-menu__controls-toggle"
        @click="onBurgerClick"
      />
    </template>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import DropdownMenu from "./DropdownMenu";
  import Button from "./Button";

  export default {
    name: "UserMenu",
    components: {
      DropdownMenu,
      Button
    },
    data: () => ({
      isActive: false,
      isShow: false,
      goToPtah: process.env.VUE_APP_EDITOR_DOMAIN
    }),
    computed: {
      ...mapState('User', ['isAuth', 'user']),

      name () {
        return this.user ? this.user.name : ''
      }
    },
    methods: {
      ...mapActions('User', ['logout']),

      clickOnSettings () {
        if (this.$route.path === '/account') {
          this.onBurgerClick()
          return
        }

        this.$router.push({ path: `/account` })
      },

      clickOnSettingsInDropMenu () {
        this.isShow = !this.isShow;
      },

      clickSignOut () {
        this.logout()
          .then(() => {
            try {
              this.$gtag.event('logout')
            } catch (e) {
              console.log('event | logout')
            }
          })
      },
      onBurgerClick () {
        this.isActive = !this.isActive;

        this.$emit('setActive', this.isActive)
      },
      onIconUserClick () {
        this.isShow = !this.isShow;
      },
      onStartFreeClick () {
        try {
          this.$gtag.event('Header_button_click', { 'event_category': 'CTA' })
        } catch (e) {
          console.log(e)
        }

        this.$router.push({ path: `/signup` })
      },
      getShortName (name) {
        if (!name || name === '') {
          return
        }

        const matches = name.match(/[^aeiouy]/gi)

        return matches.slice(0, 2).join('')
      }
    }
  };
</script>

<style scoped lang="scss">
  .b-user-menu {
    &__controls {
      display: flex;
      align-items: center;
      margin: 0 0 0 auto;

      position: relative;
    }

    &__controls-login {
      display: block;
      margin: 0 3vw 0 1vw;
      font-size: 26px;
      line-height: 30px;
      font-weight: 600;
      color: $white;
      // background: $purple-pink;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      cursor: pointer;

      @media (max-width: $desktop) {
        font-size: 14px;
        line-height: 19px;
      }

      @media (max-width: $mobile) {
        display: none;
        position: fixed;
        top: 260px;
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
      }

      .header[isActive] .header__menu ~ .b-user-menu__controls & {
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

  .b-list {
    @media (max-width: $mobile) {
      position: fixed;
      top: 330px;
      left: 50%;
      margin: 0;
      font-size: 18px;
      font-family: "Rubik", sans-serif;
      line-height: 21px;
      font-weight: 500;
      transform: translateX(-50%);

      display: flex;
      flex-direction: column;

      & a {
        font-size: 18px;
        color: $black;
        margin: 1rem 0;
        &:last-child {
          color: $black2;
        }

        &.active {
          color: $white;
        }
      }
    }
  }
</style>
