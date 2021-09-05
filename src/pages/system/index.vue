<template>
    <div class="page-system">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
          <span v-html="page_data.system.en_title"></span>
          <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.system.thumbnail_image})` }]"></div>
        </div>
        <div v-html="page_data.system.content"></div>
        <div v-html="page_data.development.content"></div>
        <div v-html="page_data.infra.content"></div>
    </div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import { SystemPageApi } from '~/assets/js/wp-api/';
 
export default {
    mixins: [meta],
    components: {
        BgTop,
    },
    data() {
        return {
            meta: {
                title: 'インフラ基盤 / システム開発',
                description:
                    '大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた、株式会社BFTのインフラ基盤 / システム開発についてご紹介します。多くの経験を経て、自社IT技術を基盤構築し、技術を蓄積。Windows以外にLinuxやSolaris、AIXなどに対応しております。',
                url: 'system',
            },
        };
    },
    async asyncData(context) {

      const systemPageApi = new SystemPageApi({
          baseUrl: context.env.apiBaseUrl,
      });

      const page_data = systemPageApi.getData();

      return page_data
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_system.scss';
</style>
