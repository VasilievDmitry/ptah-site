<template>
  <div class="container">
    <Header />
    <Account />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Header from "../layout/Header";
  import Account from "../layout/Account";

  export default {
    name: "TheAccountPage",
    components: {
      Header,
      Account
    },
    computed: {
      ...mapState('User', ['isAuth'])
    }
  };
</script>
