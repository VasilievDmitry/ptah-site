<template>
  <div class="b-confirm-overlay">
    <div class="b-confirm">
      <div class="b-confirm__chapter">
        {{ title }}
      </div>

      <div class="b-confirm__content">
        <slot>
        </slot>
      </div>

      <div class="b-confirm__footer">
        <base-button
          v-if="!isHideCancel"
          tabindex="0"
          ref="cancel"
          size="middle"
          color="transparent"
          @click.prevent="$emit('close')"
        >
          {{ $t('nav.cancel') }}
        </base-button>
        <base-button
          tabindex="1"
          size="middle"
          color="main-red"
          @click.prevent="$emit('confirm'), $emit('close')"
        >
          {{button}}
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseConfirm',
    data () {
      return {
        inputIsVisible: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      // confirm button text
      button: {
        type: String,
        default: 'OK'
      },
      isHideCancel: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.showInput()
    },

    methods: {
      showInput () {
        this.inputIsVisible = true

        this.$nextTick(() => this.focusInput())
      },
      focusInput () {
        if (this.isHideCancel) {
          return
        }

        this.$refs.cancel.$el.focus()
      }
    }
  }
</script>

<style lang="sass" scoped>
.b-confirm-overlay
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: flex
  align-items: center
  justify-content: center

  background: rgba(#000, 0.6)

  z-index: 1001

.b-confirm
  width: 37rem
  padding: 3.6rem 3.6rem 2.3rem
  position: relative

  margin-top: -9rem

  background: #ffffff
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2)
  border-radius: 10px

  text-align: center
  .is-expanded &
    margin-left: 41rem

  &__chapter
    font-style: normal
    font-weight: 600
    font-size: 1.8rem
    line-height: 2.6rem
    letter-spacing: -0.06em
    color: #575A5F
    margin-bottom: 3.3rem

  &__content
    font-size: 1.2rem
    line-height: 2rem
    color: #A2A5A5

  &__footer
    margin-top: 3rem
    display: flex
    justify-content: flex-end
</style>
