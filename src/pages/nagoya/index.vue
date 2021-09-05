<template>
    <div class="page-nagoya">
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
        BgTop,
    },
    data: function () {
        return {
            meta: {
                title: '名古屋',
                description:
                    '大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた、株式会社BFTが立ち上げた、名古屋支店についてご紹介しております。',
                url: 'nagoya',
                titleTemplate: '｜人とシステムをつくる会社｜株式会社BFT',
            },
        };
    },
    created: function () {},
    async asyncData(context) {

        const wpPageApi = new WpPageApi({
            baseUrl: context.env.apiBaseUrl,
        }, 292);

        const page_data = wpPageApi.getData();

        return page_data
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_nagoya.scss';
</style>

<style lang="scss">
@import '~/assets/scss/components/_access-map.scss';
@import '~/assets/scss/components/_sns-list.scss';
</style>
