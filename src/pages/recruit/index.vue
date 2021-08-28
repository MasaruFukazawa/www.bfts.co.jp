<template>
    <div class="page-recruit">
        <BgTop></BgTop>
        <h1 class="heading-en under-en-title">
            <span class="en" v-html="page_data.en_title"></span>
            <span class="ja" v-html="page_data.title"></span>
        </h1>
         <div v-html="page_data.content"></div>
    </div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import { WpPageApi } from '~/assets/js/wp-api/';
 
export default {
    mixins: [meta],
    components: {
        BgTop,
    },
    data: function () {
        return {
            meta: {
                title: '採用情報',
                description:
                    '大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた株式会社BFTの採用情報を掲載。多くの経験を経て、自社IT技術を基盤構築し、技術を蓄積。Windows以外にLinuxやSolaris、AIXなどに対応しております。',
                url: 'recruit',
                titleTemplate: '｜人とシステムをつくる会社｜株式会社BFT',
            },
            isSelectEngineer: true,
        };
    },
    async asyncData(context) {

      const wpPageApi = new WpPageApi({
          baseUrl: context.env.apiBaseUrl,
      }, 297);

      const page_data = wpPageApi.getData();

      return page_data
    },
};
</script>
<style lang="scss" scoped>
@import '~/assets/scss/page/_recruit.scss';
</style>
