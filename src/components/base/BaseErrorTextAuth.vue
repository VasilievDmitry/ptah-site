﻿<template>
  <div class="b-base-error-text">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
  .b-base-error-text
    position: absolute
    // bottom: -1.4rem
    font-size: 1.2rem
    line-height: 1.2rem
    color: #F9005B
    margin-top: 0.3rem
    opacity: 0.87

    transition: all .3s cubic-bezier(.2,.85,.4,1.275)
</style>
