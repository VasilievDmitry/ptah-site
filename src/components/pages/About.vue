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
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/070d38d9-b473-4eae-b047-412939c3f99b.png',
            link: 'https://github.com/Temarie'
          },
          {
            name: 'Frontend',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/d1239229-9ccf-4319-a962-a07bd82068b0.png',
            link: 'https://github.com/grebnev-av'
          },
          {
            name: 'Designer',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/4fd2237c-d548-4371-af99-7b243af58690.png',
            link: 'https://www.behance.net/anastasiianastasiia'
          },
          {
            name: 'Backend',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/55d51119-736a-449a-b2e4-9681b659c5bf.png',
            link: 'https://github.com/EvgeniyStrigo'
          },
          {
            name: 'Tech Writer',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/25d88db1-5cff-4435-8061-1e42eee2a44a.png',
            link: 'https://github.com/snezhana-dorogova'
          },
          {
            name: 'QA',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/f63e9fe2-fcc7-4097-8414-85b94eee3517.png',
            link: 'https://github.com/mike-kirpa/'
          },
          {
            name: 'QA',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/d7e6f95b-6c3d-4a42-8171-813d33c39b15.png',
            link: 'https://github.com/Win32agent'
          },
           {
            name: 'CTO',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/68388782-0bcb-4891-9859-bd6d2312bebb.png',
            link: 'https://github.com/misterion'
          },
          {
            name: 'DevOps',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/13c6cbe0-e487-498c-b116-a61584fe3d87.png',
            link: 'https://github.com/vesvalo'
          },
          {
            name: 'DevOps',
             image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/13d4b659-3b4f-4630-a3c6-67a43cb58fb7.png',
            link: 'https://github.com/atlix'
          },
          {
            name: 'Frontend',
            image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/a8ab5558-65d7-41f1-8191-494b18d41d37.jpg',
            link: 'https://github.com/fullfs'
          },
          {
            name: 'Full stack',
             image: 'https://cdn.ptah.pro/prod/5ee8d62d480c4e00018c404d/adfe7e99-392f-473a-b179-efe9e323e9f7.png',
            link: 'https://github.com/sidmal'
          },
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
