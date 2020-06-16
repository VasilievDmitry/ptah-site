<template>
  <div class="b-base-button-tabs"
    :class="{'_buttons' : type === 'buttons'}"
  >
    <div class="b-base-button-tabs__label" v-if="label != ''">
      <base-label>
        {{ label }}
      </base-label>
    </div>
    <div class="b-base-button-tabs__row">
      <button class="b-base-button-tabs__button"
        type="button"
        v-for="(item, index) in list"
        :key="index"
        :class="{'_selected': isSelected(item.value)}"
        :title="item.tooltipText"
        @click="selectItem(item.value)">

        <IconBase
          width="12"
          height="12"
          class="b-base-button-tabs-button__icon"
          v-if="item.iconName"
          :name="item.iconName"
          :color="color"
          :strokeColor="strokeColor"
        />
        <span
          class="b-base-button-tabs-button__text"
          v-if="item.text"
          v-html="item.text"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    /**
     * Items list
     * list item should containt either text or iconName property
     *
     * @type {{value: string, ?text: string, ?iconName: string, ?tooltipText: string }[]}
     */
    list: {
      required: true,
      type: Array
    },

    /**
     * Selected value
     * Depending on its type (string or array) the component behaves differently
     * If string is passed - only single item can be selected
     * If array of strings is passed - multiple items can be selected
     *
     * @type {string | string[]}
     */
    value: {
      required: true
    },

    label: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: '#575A5F'
    },

    strokeColor: {
      type: String,
      default: 'transparent'
    }
  },

  computed: {
    isMultiple () {
      return Array.isArray(this.value)
    }
  },

  methods: {
    isSelected (itemValue) {
      if (this.isMultiple) {
        return this.value.indexOf(itemValue) !== -1
      }
      return this.value === itemValue
    },

    selectItem (itemValue) {
      let value
      if (this.isMultiple) {
        value = this.value.slice()
        const index = this.value.indexOf(itemValue)
        if (index === -1) {
          value.push(itemValue)
        } else {
          value.splice(index, 1)
        }
      } else {
        value = itemValue
      }
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="sass" scoped>
@mixin button-style-reset()
  border: 0
  margin: 0
  padding: 0
  background: transparent
  display: inline
  font-size: inherit
  font-family: inherit
  overflow: visible

.b-base-button-tabs
  width: 100%
  border-bottom: solid rgba(#0D0D0C, 0.05) 1px
  padding: 0
  &__label
    margin-bottom: 1.6rem
  &__row
    display: flex
    justify-content: stretch

  &__button
    @include button-style-reset
    cursor: pointer
    transition: all .2s ease-out

    display: flex
    flex-basis: 0
    flex-grow: 1
    flex-shrink: 0
    justify-content: center
    align-items: center
    position: relative
    height: 3.7rem


    padding: 0
    margin: 0
    font-size: 1.4rem
    font-weight: 600
    color: rgba(13, 13, 12, 0.3)
    white-space: nowrap
    text-transform: uppercase

    outline: none
    @media only screen and (max-width: 768px)
      & span
        font-size: 1.2rem
    &:hover
      color: #000
    &._selected,
    &._selected:hover
      background: linear-gradient(270deg, #9E00FB 0%, #F9005B 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
    &._selected:after,
    &._selected:before
      content: ''
      position: absolute
      width: .5rem
      height: 3.7rem
      z-index: 1
      top: 0
      display: none

</style>
