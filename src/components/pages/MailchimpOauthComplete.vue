<template>
  <div class="oauth-complete">
    <base-loading></base-loading>
  </div>
</template>

<script>
  import { getParameterByName } from '../../utils'

  export default {
    name: 'MailchimpOauthComplete',

    mounted () {
      let data = {
        code: getParameterByName('code', window.location.search),
        scope: getParameterByName('scope', window.location.search)
      }

      window.parent.postMessage(JSON.stringify(data), '*')
    }
  }
</script>

<style lang="sass" scoped>
  .oauth-complete
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    background: #fff
</style>
