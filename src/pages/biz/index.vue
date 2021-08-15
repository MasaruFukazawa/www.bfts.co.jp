<template>
    <div class="page-service">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">Education&amp;System Integration</div>

        <div class="service__desc" v-html="biz_page_data.biz"></div>

        <div class="service">
            <div class="side-red"></div>
            <h2 class="service__title">
                <span class="ja" v-html="biz_page_data.bft_dojo.title"></span>
            </h2>
            <div class="service__about" v-html="biz_page_data.bft_dojo.biz_description"></div>
            <div v-for="service in biz_page_data.bft_dojo_children" class="service__menu">
                <div class="menu__img" :style="[{ backgroundImage: `url(${service.thumbnail_image})` }]"></div>
                <div class="menu__info">
                    <h3 class="menu__title" v-html="service.title" :style="[{ backgroundImage: `url(${service.biz_service_icon})` }]"></h3>
                    <p class="menu__about" v-html="service.description"></p>
                    <nuxt-link :to="service.permalink" class="menu__link"> MORE </nuxt-link>
                </div>
            </div>
            <div class="bg-right">
                <div class="bg-right__1"></div>
                <div class="bg-right__2"></div>
                <div class="bg-right__3"></div>
                <div class="bg-right__4"></div>
                <div class="bg-right__5"></div>
                <div class="bg-right__6"></div>
                <div class="bg-right__7"></div>
                <div class="bg-right__8"></div>
                <div class="bg-right__9"></div>
                <div class="bg-right__10"></div>
            </div>
        </div>

        <div class="si-zigyou" id="si-zigyou">
            <div class="side-red"></div>
            <h2 class="si-zigyou__title">
                <span class="ja" v-html="biz_page_data.si.title"></span>
            </h2>
            <div class="si-zigyou__about" v-html="biz_page_data.si.biz_description"></div>
            <div class="si-zigyou__menu-wrap">
                <div v-for="service in biz_page_data.si_children" class="si-zigyou__menu-wrap__menu menu-system">
                    <div class="menu__icon" :style="[{ backgroundImage: `url(${service.biz_service_icon})` }]"></div>
                    <h3 class="menu__title" v-html="service.title"></h3>
                    <div class="menu__img">
                        <img :src="service.thumbnail_image" :alt="service.title" />
                    </div>
                    <div class="menu__desc" v-html="service.description"></div>
                </div>
            </div>

            <nuxt-link to="/system" class="si-zigyou__more"> MORE </nuxt-link>
        </div>
    </div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import { BizPageWpApi } from '~/assets/js/wp-api/';

export default {
    mixins: [meta],
    components: {
        BgTop,
    },
    data: function () {
        return {
            meta: {
                title: '事業紹介',
                description:
                    '株式会社BFTが携わった、大規模な情報システム基盤環境を構築する社会インフラプロジェクトや、人を育てるためのBFT道場の事業を紹介します。',
                url: 'biz',
            },
        };
    },
    methods: {
        move_to_hash: function (hash) {
            // URLにアンカーが存在する場合
            if (hash) {
                // topに移動
                scrollTo(0, 0);
                // 対象要素画面左上からの位置取得
                let elTop = document.getElementById(hash.substr(1)).getBoundingClientRect().top;
                setTimeout(() => {
                    //ロード時の処理を待ち、時間差でスクロール実行
                    scrollTo(0, elTop - 100);
                }, 30);
            } else {
                scrollTo(0, 0);
            }
        },
    },
    watch: {
        '$route.hash': function (to, from) {
            this.move_to_hash(to);
        },
    },
    created: function () {},
    mounted: function () {
        this.move_to_hash(this.$route.hash);
    },
    async asyncData(context) {

        const bizPageWpApi = new BizPageWpApi({
            baseUrl: context.env.apiBaseUrl,
        });

        const biz_page_data = bizPageWpApi.getData();

        return biz_page_data

    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_biz.scss';
</style>
