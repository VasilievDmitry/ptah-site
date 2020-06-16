<template>
  <div class="b-account">
    <div class="b-account__content">
      <div class="b-account__chapter">
        Account settings
      </div>

      <base-button-tabs
        :list="tabs"
        v-model="activeTab"
        class="b-tabs"
      />

      <template  v-if="activeTab === 'settings'">
        <div class="b-user">
          <div class="b-user__avatar">
            {{ getShortName(name) }}
          </div>
          <div class="b-user__data">
            <div class="b-user__login">
              {{ name }}
            </div>
            <div class="b-user__links" v-if="false">
              <span>
                Add photo
              </span>
              <span>
                Delete photo
              </span>
            </div>
          </div>
        </div>

        <SettingsForm />
      </template>

      <template v-else>
        <ChangePasswordForm />
      </template>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SettingsForm from '../layout/SettingsForm'
  import ChangePasswordForm from '../layout/ChangePasswordForm'

  export default {
    name: "Account",
    components: {
      SettingsForm,
      ChangePasswordForm
    },
    data () {
      return {
        tabs: [
          { value: 'settings', text: 'Profile settings' },
          { value: 'password', text: 'Change password' },
        ],
        activeTab: 'settings',
      }
    },
    computed: {
      ...mapState('User', ['isAuth', 'user']),

      name () {
        return this.user ? this.user.name : ''
      }
    },
    methods: {
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
  .b-account {
    min-height: 100vh;
    background: $white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__content {
      width: 100%;
      max-width: 42.4rem;
      min-height: 60rem;
      padding: 15rem 0 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      @media only screen and (max-width: 768px) {
        padding: 8rem 0 0;
      }
    }

    &__chapter {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.3rem;
      display: flex;
      align-items: center;
      text-align: center;
      margin: 0 0 8rem;

      color: $black2;
      @media only screen and (max-width: 768px) {
        margin: 0 0 2rem;
      }
    }
  }
  .b-tabs {
    margin: 0 0 4.7rem;
  }
  .b-user {
    width: 100%;
    padding: 0 4.7rem;
    margin: 0 0 3.5rem;
    display: flex;
    justify-content: flex-start;

    &__avatar {
      width: 8rem;
      height: 8rem;

      margin: 0 2.2rem 0 0;

      color: $white;
      font-size: 2.8rem;
      line-height: 3.3rem;
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
      font-size: 2rem;
      line-height: 8rem;
      margin: 0;
    }

    &__links {
      display: flex;
      & span {
        display: inline-block;
        color: $gray;
        font-size: 1.4rem;
        line-height: 1.36;
        font-weight: 500;
        margin: 0 1.8rem 0 0;
        cursor: pointer;
        &:hover {
          color: $black2;
        }
      }
    }
  }
</style>
