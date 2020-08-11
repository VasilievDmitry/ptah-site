<script>
export default {
  props: {
    /* variant button */
    color: {
      default: 'default',
      type: String,
      validator (value) {
        const values = [
          'default',
          'black',
          'blue',
          'gray',
          'gray-full',
          'light-gray',
          'orange',
          'transparent',
          'white',
          'main-green',
          'main-green-transparent',
          'main-red',
          'yellow-transparent',
          'main-red-transparent',
          'gradient'
        ]
        return values.indexOf(value) !== -1
      }
    },
    /* size button */
    size: {
      default: 'default',
      type: String,
      validator (value) {
        const values = [
          'default',
          'middle',
          'small',
          'circle'
        ]
        return values.indexOf(value) !== -1
      }
    },
    /* transparent button */
    transparent: {
      default: false,
      type: Boolean
    },
    /* type button */
    type: {
      default: 'button',
      type: String,
      validator (value) {
        const values = ['button', 'submit', 'reset']
        return values.indexOf(value) !== -1
      }
    },
    /* is presset button */
    pressed: {
      default: false,
      type: Boolean
    },
    /* is disabled */
    disabled: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    btnClasses () {
      const name = 'b-base-button'
      const classes = [`${name}_${this.color}`, `${name}_${this.size}`]
      if (this.pressed) {
        classes.push(name + '_pressed')
      }
      if (this.transparent) {
        classes.push(name + '_transparent')
      }
      return classes
    }
  }
}
</script>

<template>
  <button class="b-base-button"
    :class="btnClasses"
    :type="type"
    :disabled="disabled"
    :transparent="transparent"
    @click="$emit('click', $event)"
    >
    <slot></slot>
  </button>
</template>

<style lang="sass">
@import '../../assets/sass/_colors.sass'
@import '../../assets/sass/_variables.sass'

.b-base-button
  font-size: 1.6rem
  text-transform: uppercase
  font-weight: 800
  line-height: 1
  padding: .8rem 0
  letter-spacing: 0.1em

  margin: 0.5rem
  border-radius: 10px

  transition: all .3s cubic-bezier(.2,.85,.4,1.275)
  outline: none
  border: none
  =active
    background-color: $main-green
    color: $white
  > svg
    position: relative
    top: .15rem
  &[disabled]
    cursor: not-allowed
    background-color: rgba($black, 0.2)
    color: rgba($white, 0.1)
    > svg
      fill: rgba($white, 0.1)
  &:hover:not([disabled])
    cursor: pointer
  &_default
    width: 20.8rem
  &_middle
    width: 18rem
    font-size: 1.2rem
    padding: 1.4rem 0
  &_small
    font-size: 1.2rem
    padding: 1.2rem
    min-width: 8.8rem
    height: auto
  &_circle
    width: 4rem
    height: 4rem
    border-radius: 100%
  &_pressed
    +active
  &_black
    color: #eee
    background-color: $dark-grey
  &_blue
   +active
  &_gray
    background: $white
    color: $main-green
  &_gray-full
    color: rgba($black, 0.1)
    & svg
      fill: rgba($black, 0.1) !important
    &:hover,
    &:active
      color: $main-green
      & svg
        fill: $main-green !important
  &_light-gray
    color: $white
    background-color: rgba($white, 0.1)
  &_orange
    color: #fff
    background-color: $orange-down500
    border-radius: .4rem
    &:hover
      background-color: $orange-down200 !important
      opacity: .8
  &_transparent
    color: #A2A5A5
    font-weight: 600
    background: none transparent
    &:hover
      background: rgba(#A2A5A5, 0.12)
    &:active
      background: rgba(#A2A5A5, 0.4)
  &_white
    color: $main-green
    background: $white
    box-shadow: 0px 4px 16px rgba($black, 0.25)

  /* new color main green */
  &_main-green
    color: $white
    background: $main-green
    text-transform: uppercase
    font-weight: 800
    &:hover
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.12)
    &:active
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2), 0 3px 14px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.14)
    &[disabled]
      cursor: not-allowed
      background-color: rgba($black, 0.12)
      color: $white

  /* new color main red */
  &_main-red
    color: $white
    background: $main-red
    text-transform: uppercase
    font-weight: 800
    &:hover
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.12)
    &:active
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2), 0 3px 14px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.14)
    &[disabled]
      cursor: not-allowed
      background-color: rgba($black, 0.12)
      color: $white
  /* new color main red transparent */
  &_main-red-transparent
    color: $main-red
    background: transparent
    text-transform: uppercase
    font-weight: 600
    &:hover
      background: rgba($main-red, 0.12)
    &:active
      background: rgba($main-red, 0.4)
    &[disabled]
      cursor: not-allowed
      background-color: transparent
      color: #A2A5A5
  /* new color main green transparent */
  &_main-green-transparent
    color: $main-green
    background: transparent
    text-transform: uppercase
    font-weight: 600
    &:hover
      background: rgba($main-green, 0.12)
    &:active
      background: rgba($main-green, 0.4)
    &[disabled]
      cursor: not-allowed
      background-color: transparent
      color: #A2A5A5
  /* new color main green transparent */
  &_yellow-transparent
    color: $yellow
    background: transparent
    text-transform: uppercase
    font-weight: 600
    &:hover
      background: rgba($yellow, 0.12)
    &:active
      background: rgba($yellow, 0.4)
    &[disabled]
      cursor: not-allowed
      background-color: transparent
      color: $yellow
    & svg
      fill: $yellow
  &_gradient
    color: $white
    background: linear-gradient(270deg, #9E00FB 0%, #F9005B 100%)
    text-transform: uppercase
    font-weight: 800
    &:hover
      background: linear-gradient(270deg, #F9005B 0%, #9E00FB 100%)
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.12)
    &:active
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2), 0 3px 14px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.14)
    &[disabled]
      cursor: not-allowed
      background-color: rgba($black, 0.12)
      color: $white
  @media only screen and (max-width: 1100px)
    width: auto
    padding: 1rem 1.4rem

</style>
