<template>
    <div class="page-com">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">{{ page_data.en_title }}</div>
        <div v-html="page_data.content"></div>
        <AccessMap :query="'株式会社BFT'" :query_2="'35.172847,136.900946'" id="access">
            <h3 slot="heading">本社</h3>
            <div class="access__info" slot="info">
                <div class="access__info__txt">会社名</div>
                <div class="access__info__txt">株式会社ＢＦＴ</div>
                <div class="access__info__txt">所在地</div>
                <div class="access__info__txt">
                    〒100-0005<br />
                    東京都千代田区丸の内1-6-5 丸の内北口ビルディング22階
                </div>
                <div class="access__info__txt">電話番号</div>
                <div class="access__info__txt">03-6810-0070</div>
                <div class="access__info__txt">アクセス</div>
                <div class="access__info__txt multi-line">
                    ●JR 東京駅　丸の内北口から 徒歩2分<br />
                    ●東京メトロ丸の内線 東京駅<br />
                    改札を出て地下道を1番出口方面へ　徒歩3分<br />
                    ●東京メトロ東西線 大手町駅<br />
                    改札を出てB2c番出口へ 徒歩1分<br />
                    <br />
                    【丸の内北口ビルディング 入口について】<br />
                    北口ビル入口は、オアゾ内にあります。<br />
                    1F・B1共に北口ビルに入れます。<br />
                    1F正面エントランスからオアゾに入る場合、右手に丸善がありますので、その先が北口ビルになります。<br />
                    エレベーターにて22階までお越しください。
                </div>
            </div>
            <h3 slot="heading_2" class="heading_2">名古屋支店</h3>
            <div class="access__info" slot="info_2">
                <div class="access__info__txt">住所</div>
                <div class="access__info__txt">
                    〒460-0003 <br class="sp" />愛知県名古屋市中区錦2-4-3&nbsp;錦パークビル2階
                </div>
                <div class="access__info__txt">電話番号</div>
                <div class="access__info__txt">052-211-7710</div>
                <div class="access__info__txt">E-mail</div>
                <div class="access__info__txt">info@bfts.co.jp</div>
            </div>
        </AccessMap>
    </div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import AccessMap from '~/components/common/TheAccessMap.vue';
import { WpPageApi } from '~/assets/js/wp-api/';

export default {
    mixins: [meta],
    components: {
        BgTop,
        AccessMap,
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

<style lang="scss" scoped>
@import '~/assets/scss/page/_company.scss';
</style>
