<template>
  <div class="container">
    <Header />
    <main class="main">
      <Origins
        title="Our story"
        :text="[
          'The core Ptah team is made up of employees of <a class=\'link--embeded\' href=\'https://protocol.one/\' target=\'_blank\'>Protocol One</a>, which is part of <a class=\'link--embeded\' href=\'https://super.com/\' target=\'_blank\'>Super.com</a>, a publishing company focused on making free and open-source solutions available both for internal use and to all game developers in the world. Our mission is to reinvent the industry on a fair and transparent basis.',
          'We’re focused on open source code, which allows our products to be used independently of Protocol One or Super.com, so Ptah can be used as an embedded page editor for any service that needs it.',
          'If you like our project, you can help us make it even better.'
        ]"
      />
      <SwiperRoundedImages
        :slides="[
          {
            name: 'PM, Frontend',
            image: 'https://s3.protocol.one/src/o_knAjw.jpg',
            link: 'https://github.com/Temarie'
          },
          {
            name: 'Frontend',
            image: 'https://s3.protocol.one/src/o_vIrF3.jpg',
            link: 'https://github.com/grebnev-av'
          },
          {
            name: 'Backend',
            image: 'https://s3.protocol.one/src/o_1sJxaX.jpg',
            link: 'https://github.com/EvgeniyStrigo'
          },
          {
            name: 'DevOps',
            image: 'https://s3.protocol.one/src/o_J2Bl9.jpg',
            link: 'https://github.com/vesvalo'
          },
          {
            name: 'DevOps',
            image: 'https://s3.protocol.one/src/o_1t3u9d.jpg',
            link: 'https://github.com/atlix'
          },
          {
            name: 'Full stack',
            image: 'https://s3.protocol.one/src/o_cImtM.jpg',
            link: 'https://github.com/sidmal'
          },
          {
            name: 'CTO',
            image: 'https://s3.protocol.one/src/o_YnxbC.jpg',
            link: 'https://github.com/misterion'
          }
        ]"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Origins from "../layout/Origins";
import SwiperRoundedImages from "../layout/SwiperRoundedImages";

export default {
  name: "Home",
  components: {
    SwiperRoundedImages,
    Origins,
    Footer,
    Header
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/styles";
</style>
