<template>
  <button @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped>
button {
  padding: 5px 10px;
  font-size: 16px;
}
</style>
