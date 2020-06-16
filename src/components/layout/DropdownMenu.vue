<template>
  <transition name="fade" :isActive="isActive">
    <div class="b-dropdown-menu">
      <div class="b-user">
        <div class="b-user__avatar">
          {{ getShortName(name) }}
        </div>
        <div class="b-user__data">
          <div class="b-user__login">
            {{ name }}
          </div>
          <div class="b-user__email">
            {{ email }}
          </div>
        </div>

      </div>

      <div class="b-list">
        <a class="b-link" @click="clickOnSettings">
          Account settings
        </a>
        <a class="b-link" @click="clickSignOut">
          Sign out
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: "DropdownMenu",
    props: {
      isActive: Boolean,
    },
    computed: {
      ...mapState('User', ['isAuth', 'user']),

      name () {
        return this.user ? this.user.name : ''
      },

      email () {
        return this.user ? this.user.email : ''
      }
    },
    methods: {
      ...mapActions('User', ['getUser', 'logout']),

      clickOnSettings () {
        if (this.$route.path === '/account') {
          return
        }

        this.$router.push({ path: `/account` })
      },

      clickSignOut () {
        this.logout()
      },

      getShortName (name) {
        if (!name || name === '') {
          return
        }

        const matches = name.match(/[^aeiouy]/gi)

        return matches.slice(0, 2).join('')
      }
    },

    mounted () {
      this.getUser()
    }
  };
</script>

<style scoped lang="scss">
  .b-dropdown-menu {
    padding: 2.5rem 4.6rem 0rem;
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    position: absolute;
    top: 5rem;
    right: 0;
    min-width: 30rem;

    letter-spacing: 0.065em;

    .header[isActive] & {
      position: relative;
    }
  }
  .b-user {
    display: flex;
    justify-content: flex-start;

    &__avatar {
      width: 3.7rem;
      height: 3.7rem;

      margin: 0 2.2rem 0 0;

      color: $white;
      font-size: 1.6rem;
      line-height: 1.9rem;
      text-transform: uppercase;
      background: $black;

      border-radius: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__data {
      text-align: left;
    }

    &__login {
      color: $black2;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin: 0 0 0.3rem;
    }

    &__email {
      color: $gray;
      font-size: 1.2rem;
      line-height: 1.36;

      max-width: 16rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .b-list {
    margin: 3rem 0 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .b-link {
    display: block;
    margin: 0 0 2.5rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 600;
    color: $black2;
    cursor: pointer;

    @media (max-width: $desktop) {
      font-size: 1.4rem;
      line-height: 1.9rem;
    }

    &:hover {
      background: $pink-purple;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
