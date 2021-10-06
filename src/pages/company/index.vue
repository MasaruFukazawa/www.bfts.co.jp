<template>
    <div class="page-com">
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
                title: '会社概要',
                description:
                    '大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた、株式会社BFTをご紹介します。多くの経験を経て、自社IT技術を基盤構築し、技術を蓄積。Windows以外にLinuxやSolaris、AIXなどに対応しております。',
                url: 'company',
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

        const wpPageApi = new WpPageApi({
            baseUrl: context.env.apiBaseUrl,
        }, 295);

        const page_data = wpPageApi.getData();

        return page_data
    },
};
</script>

<style lang="scss">
@import '~/assets/scss/page/_company.scss';
</style>

<style lang="scss">
@import '~/assets/scss/components/_access-map.scss';
</style>
