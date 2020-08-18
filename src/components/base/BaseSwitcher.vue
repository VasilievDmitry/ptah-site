<script>
export default {
  name: 'BaseSwitcher',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      default: false,
      required: true
    },
    disabled: {
      default: false
    }
  },
  methods: {
    emitChange (event) {
      this.$emit('change', event.target.checked)
    }
  },
  computed: {
    classObject () {
      const { value, disabled } = this
      return {
        'b-base-switcher_checked': value,
        'b-base-switcher_disabled': disabled
      }
    }
  }
}
</script>

<template>
  <div class="b-base-switcher" :class="classObject">
    <base-label v-if="$slots.label || label">
      {{ label }}
    </base-label>
    <div class="b-base-switcher-core" :class="classObject">
      <input class="b-base-switcher-core__checkbox"
        type="checkbox"
        :disabled="disabled"
        :checked="value"
        @change="emitChange"
      >

      <span class="b-base-switcher-core__body">
        <span class="b-base-switcher-core__thumb"></span>
      </span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../../assets/sass/_colors.sass'
@import '../../assets/sass/_variables.sass'

.b-base-switcher
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center

  margin: 0 2px 0 0
  // max-width: 24rem

  $this: &

  &_checked
    .b-base-switcher-core
      background: rgba($white, 0.5)
    #{$this}-core__thumb
      transform: translateX(1.6rem)
      &:after
        background: $white
      &:before
        content: ''
        height: 2rem
        width: 2rem
        position: absolute
        border-radius: 100%
        animation: ripples .8s ease-in-out

  &:hover
    .b-base-switcher-core
      box-shadow: 0 0 4px rgba($black, 0.4)

  &_disabled
    background: #fff
    cursor: default

    .b-base-switcher__label
      color: #CDCDCD

    .b-base-switcher-core__body:after
      background: transparent
      border: 1px solid #e2e2e2
      box-shadow: none

    .b-base-switcher-core-texts__on,
    .b-base-switcher-core-texts__off
      color: rgba(#CDCDCD, 0.5)

.b-base-switcher-core
  position: relative
  display: inline-block
  margin: 0
  height: 1.4rem
  min-height: 1.4rem
  width: 3.4rem
  min-width: 3.4rem
  border-radius: 1.4rem
  background: rgba($white, 0.5)
  transition: .4s cubic-bezier(.25,.8,.25,1)

  &__checkbox
    opacity: 0
    width: 100%
    height: 100%
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    margin: 0
    z-index: 1
    cursor: pointer

  &__body
    padding-right: 0.4rem
    display: flex
    align-items: center
    justify-content: flex-start
    position: relative
    cursor: pointer
    height: 100%
    width: 100%
    z-index: 0

  &__thumb
    position: relative
    height: 4.8rem
    width: 4.8rem
    display: flex
    align-items: center
    justify-content: center
    margin-left: -1rem
    transition: transform 0.2s ease, background-color 0.2s ease-in
    &:after
      content: ''
      height: 2rem
      width: 2rem
      border-radius: 100px
      display: block
      cursor: pointer
      background: #FAFAFA
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.14)
      margin: 0

@keyframes ripples
  0%
    background: adjust_color($white, $alpha: -0.5)
  100%
    width: 4.8rem
    height: 4.8rem
    opacity: 0
</style>
