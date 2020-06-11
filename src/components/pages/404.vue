<template>
  <div class="b-not-found">
    <h1>404</h1>

    <p>It appears the page you are looking for was moved, removed, renamed, unavailable or does not exist.</p>

    <Button class="alter" text="Go to main" @click="$router.push('/')" />
  </div>
</template>

<script>
import Button from "../layout/Button"

export default {
  name: '404',

  components: {
    Button
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/styles/styles"

.b-not-found
  width: 100vw
  height: 100vh
  background: url("../../assets/images/404bg.png") no-repeat
  background-size: cover
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  h1
    display: inline-block
    vertical-align: middle
    margin: 0 0 17px
    font-family: $font-secondary
    text-align: center
    font-size: 228px
    line-height: 341px
    font-weight: 800
    background: $purple-blue
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

  p
    font-family: $font-primary
    font-style: normal
    font-weight: 600
    font-size: 18px
    line-height: 144.41%
    color: #fff
    margin-bottom: 50px
    width: 40%
</style>
