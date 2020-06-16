<template>
  <div>
    <span>
      Don`t have an account?
    </span>
    <span class="b-get-link" @click="goToSignUp">
      Get started
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goToSignUp () {
      this.$router.push({ path: `/signup` })
    }
  }
}
</script>

