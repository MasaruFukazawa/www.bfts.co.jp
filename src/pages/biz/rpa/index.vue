<template>
    <div class="page-rpa">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            <span v-html="page_data.title"></span>
            <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.thumbnail_image})` }]"></div>
        </div>
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
        BgTop
    },
    data: function() {
        return {
            meta: {
                title: 'ＲＰＡ',
                    description:
                        'RPA（ロボティック・プロセス・オートメーション）は日々の業務を効率化します。業務改善のための診断や効率化を図るためのシステムの提案、簡単に扱えるツールの紹介など、社内やプロジェクト内のご要望に応じたご支援が可能です。',
                url: 'rpa',
                titleTemplate: '｜強いエンジニアを育てる研修｜人とシステムをつくる会社｜BFT'
            }
        };
    },
    created: function() {},
    async asyncData(context) {

        const wpPageApi = new WpPageApi({
            baseUrl: context.env.apiBaseUrl,
        }, 324);

        const page_data = wpPageApi.getData();

        return page_data
    },
};
</script>

<style lang="scss">
@import '~/assets/scss/page/_rpa.scss';
</style>
