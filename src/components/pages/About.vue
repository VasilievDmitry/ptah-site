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
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/1ba68504-0e98-46ee-bfac-720e7bfbe1a9.jpg',
            link: 'https://github.com/Temarie'
          },
          {
            name: 'Frontend',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/dfc63873-5981-47f4-beac-632b52ae27cc.jpg',
            link: 'https://github.com/grebnev-av'
          },
          {
            name: 'Designer',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/2b2d032a-1350-4566-82d2-b94c140f989f.jpg',
            link: 'https://www.behance.net/anastasiianastasiia'
          },
          {
            name: 'Backend',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/088399fb-91d7-48ef-85eb-44e6470f7eed.jpg',
            link: 'https://github.com/EvgeniyStrigo'
          },
          {
            name: 'Tech Writer',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/446b1b2b-2b37-4ce8-9b7b-305c15daf490.jpg',
            link: 'https://github.com/snezhana-dorogova'
          },
          {
            name: 'QA',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/c027aedb-302b-4d32-98f7-e6741e67f24d.jpg',
            link: 'https://github.com/mike-kirpa/'
          },
          {
            name: 'QA',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/bd1fd85b-9b6f-41df-a92c-c179cf0f5d6a.jpg',
            link: 'https://github.com/Win32agent'
          },
           {
            name: 'CTO',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/7907264f-214f-42ea-a1a4-fe708de88749.jpg',
            link: 'https://github.com/misterion'
          },
          {
            name: 'DevOps',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/06bb76f8-7d0e-41bf-b6d7-2ff5bf3326a7.jpg',
            link: 'https://github.com/vesvalo'
          },
          {
            name: 'DevOps',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/ffa37765-fe88-49b1-b492-20b2cac2cf7b.jpg',
            link: 'https://github.com/atlix'
          },
          {
            name: 'Frontend',
            image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/bb29cb1b-e7e7-4ddb-b882-9401a05a72a8.jpg',
            link: 'https://github.com/fullfs'
          },
          {
            name: 'Full stack',
             image: 'https://cdn.ptah.pro/prod/5f4785b2cedc5f000141fe68/9106e780-17b1-41ee-afca-c577e024abe5.jpg',
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
