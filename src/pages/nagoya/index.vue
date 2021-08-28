<template>
    <div class="page-nagoya">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            {{ page_data.title }}
            <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.thumbnail_image})` }]"></div>
        </div>
        <div v-html="page_data.content"></div>
        <AccessMap :query="'35.172847,136.900946'" class="nagoya__access">
            <div class="access__info" slot="info">
                <div class="access__info__txt">住所</div>
                <div class="access__info__txt">
                    〒460-0003<br class="sp" />&nbsp;愛知県名古屋市中区錦2-4-3&nbsp;錦パークビル2階
                    <br />
                    名古屋地下鉄 桜通線 丸の内駅 5番出口 徒歩約1分
                </div>
                <div class="access__info__txt">電話番号</div>
                <div class="access__info__txt">052-211-7710</div>
                <div class="access__info__txt">E-mail</div>
                <div class="access__info__txt">info@bfts.co.jp</div>
            </div>
            <AppSNSList slot="other" />
        </AccessMap>
    </div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import AccessMap from '~/components/common/TheAccessMap.vue';
import AppSNSList from '~/components/common/AppSNSList.vue';
import { WpPageApi } from '~/assets/js/wp-api/';

export default {
    mixins: [meta],
    components: {
        BgTop,
        AccessMap,
        AppSNSList,
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
