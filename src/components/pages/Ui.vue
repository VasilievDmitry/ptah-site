<template>
  <div class="ui">
    <h1>This is a UI-kit</h1>
    <h2>Buttons</h2>
    <div>
      <Button
        @burgerClick="burgerClick"
        text="Try for free"
        :defaultValue="true"
      />
    </div>
    <br />
    <div><Button isDisabled text="Try for free" /></div>
    <br />
    <div><Button class="alter" text="See all specs" /></div>
    <br />
    <div><Button class="alter" isDisabled text="See all specs" /></div>
    <br />
    <div><Button class="black" text="Join Ptah" /></div>
    <br />
    <div><Button class="black" isDisabled text="Join Ptah" /></div>
    <br />
    <div><Button class="small" text="Start free" /></div>
    <br />
    <div><Button class="small" isDisabled text="Start free" /></div>
    <div class="blackBg">
      <div><Link href="#" text="Sign in" /></div>
      <br />
      <div><Link href="#" class="disabled" text="Sign in" /></div>
      <br />
      <div><Link href="#" class="capital" text="Features" /></div>
      <br />
    </div>
    <br />
    <div><Button class="burger" /></div>
    <br />
    <div><Button class="burger isActive" /></div>
  </div>
</template>

<script>
import Button from "../layout/Button";
import Link from "../layout/Link";

export default {
  name: "UI-kit",
  components: {
    Button,
    Link
  },
  methods: {
    burgerClick() {}
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/styles";

.blackBg {
  padding: 20px;
  background: $black2;
}
</style>
