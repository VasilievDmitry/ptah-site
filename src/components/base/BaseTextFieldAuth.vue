﻿<template>
  <div
    class="b-base-text-field"
    :class="{
      'b-base-text-field_error': hasError,
      'b-base-text-field_focus': hasFocus,
      'b-base-text-field_filled': innerValue.length > 0
    }"
  >
    <base-label
      class="b-base-text-field__label"
      :class="{
        'b-base-text-field__label_focus': hasFocus,
      }"
      v-if="label || $slots.label"
      :hasError="hasError"
      :hasFocus="hasFocus"
    >
      {{label}}
      <slot name="label" />
    </base-label>

    <span
      class="input"
      :class="{
        'input_focus': hasFocus,
        'input_error': hasError
      }"
    >
      <input class="b-base-text-field__input"
        :type="inputType"
        ref="inputText"
        v-bind="$attrs"
        v-model="innerValue"
        :placeholder="placeholder"
        @input="$emit('input', innerValue)"
        @focus="$emit('focus', $event), hasFocus = true"
        @blur="$emit('blur', $event), hasFocus = false"
      />
      <span />
    </span>

    <base-error-text-auth v-if="hasError">
      {{errorText}}
      <slot name="error"></slot>
    </base-error-text-auth>

    <span
      class="b-base-text-field__eye"
      :class="{
        'b-base-text-field__eye_focus': hasFocus
      }"
      v-if="type === 'password'"
      @click="clickEye"
    >
      <BaseIcon width="24" height="21" name="eye" v-if="showPass" />
      <BaseIcon width="24" height="21" name="eyeHide" v-else />
    </span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  watch: {
    value (value) {
      this.innerValue = value
    }
  },

  data () {
    return {
      innerValue: this.value,
      hasFocus: false,
      inputType: 'text',
      showPass: false
    }
  },

  mounted () {
    this.inputType = this.type
  },

  methods: {
    clickEye () {
      this.showPass = !this.showPass

      this.$refs.inputText.focus()

      this.showPass
        ? this.inputType = 'text'
        : this.inputType = this.type
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../assets/sass/variables.sass'
  .b-base-text-field
    $this: &

    font-family: 'Open Sans', sans-serif
    font-size: 1.6rem
    line-height: 1.6rem
    width: 100%
    position: relative

    &_error
      color: #F9005B
      #{$this}__input
        // border-color: #F9005B#F9005B

    &_focus
      color: #9E00FB
      #{$this}__input
        // border: 2px solid #9E00FB
      #{$this} .input
        // border: 2px solid #9E00FB

    &__label
      color: #0D0D0C
      font-size: 1.4rem
      line-height: 1.4rem
      margin-bottom: .9rem
      display: block
      position: relative
      &_focus
        color: rgba(13, 13, 12, 0.5)

    &__eye
      position: absolute
      right: 1.4rem
      top: 3.5rem

      cursor: pointer
      & svg
        fill: rgba(13, 13, 12, 0.5)
      &_focus
        & svg
          fill: #0D0D0C

  .input
    display: block
    position: relative
    width: 100%
    height: 5rem
    padding: 0.2rem
    text-decoration: none
    font-weight: 300
    overflow: hidden
    border-radius: .8rem
    transition: all .2s linear
    background: linear-gradient(0deg, #F3F6F6 0%, #F3F6F6 100%)

    &_focus
      background: linear-gradient(270deg, #9E00FB 0%, #F9005B 100%)
    &_error
      background: linear-gradient(270deg, #F9005B 0%, #F9005B 100%)

    & input
      width: 100%
      height: 100%
      display: block
      border-radius: .6rem
      background: rgba(#fff, 1)
      text-align: left
      padding: 1rem 1.6rem
      font-size: 1.4rem
      color: rgba(#0D0D0C, 1)
      outline: none
      border: none
      &::placeholder
        font-size: 1.4rem
        color: rgba(#0D0D0C, 0.54)

        &:focus
          outline: none

        &:disabled
          border-color: transparent
          color: #888888
          cursor: pointer
</style>
