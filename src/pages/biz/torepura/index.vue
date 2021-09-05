<template>
    <div class="page-torepura">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            {{ page_data.en_title }}<br/>{{ page_data.title }}
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
        BgTop,
    },
    data: function () {
        return {
            meta: {
                title: 'トレプラ',
                description:
                    '「実践的なプロジェクト形式の技術研修」全ての研修コンテンツで本番相当の１Ｕサーバやネットワーク機器を使用し、物理的なシステム構成の理解からスタート。現役SEの講師が個人の能力に合わせて、マンツーマンで指導します。',
                url: 'torepura',
                titleTemplate: '｜強いエンジニアを育てる研修｜人とシステムをつくる会社｜BFT',
            },
        };
    },
    created: function () {},
    async asyncData(context) {

        const wpPageApi = new WpPageApi({
            baseUrl: context.env.apiBaseUrl,
        }, 251);

        const page_data = wpPageApi.getData();

        return page_data
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_torepura.scss';
</style>
