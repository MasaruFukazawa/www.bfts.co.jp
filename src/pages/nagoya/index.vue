<template>
    <div class="page-nagoya">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            BFT名古屋支店
            <div class="heading__img"></div>
        </div>

        <div class="nagoya__desc">
            <h1 class="large-ja">
                <span class="ja">ＢＦＴ名古屋支店のモットー</span>
            </h1>

            <div class="desc__txt">
                <div class="txt-bg"></div>
                <h3>「挑戦・情熱・成長」</h3>
                <div class="desc__txt__txt">
                    私たちは機能軸だけでなく感情軸で応える組織を目指しています。<br />
                    今できることだけではなく、働く社員のこうありたい、お客様のこうしたいという思いを大切にし、新しいことにどんどんチャレンジしていくのが名古屋支店のスタイルです。
                </div>
            </div>
        </div>

        <div class="nagoya__about">
            <div class="side-red"></div>
            <div class="nagoya__about__service">
                <h2 class="nagoya__about__service__title">
                    <span class="ja">サービス内容</span>
                </h2>
                <div class="nagoya__about__service__txt">
                    名古屋支店では、「クラウド」「運用／構築／テストの自動化」「REST&nbsp;API開発」「ITインフラ基盤技術全般」に強みを持ち、東海地区／関西地区を中心にサービスを提供しています。<br />
                    <br />
                    お客様と一体となり、提案活動のご支援（無償のご支援含む）から、要件定義、基本設計～製造～リリース、運用支援まで幅広く対応しています。また、名古屋はもちろんのこと、東京本社の350名を超える人的リソース、ノウハウ等を活用することで大規模案件への対応も可能です。<br />
                    <br />
                    挑戦×情熱×成長のポリシーのもと、お客様と一緒になって新しい技術や方式、サービスにも積極的に取り組んで参ります。<br />
                </div>
            </div>
            <div class="nagoya__about__recruit">
                <h2 class="nagoya__about__recruit__title">
                    <span class="ja">名古屋採用</span>
                </h2>
                <div class="nagoya__about__recruit__txt">
                    弊社理念や名古屋支店のポリシー「挑戦×情熱×成長」に共感頂ける方、弊社の社員と一緒に働いてみたいと思って<br />
                    頂ける方一緒に会社を盛り上げてくれる方、アウトプットが好きな方のご応募をお待ちしています。<br />
                </div>
                <div class="nagoya__about__recruit__img"></div>
            </div>
            <div class="bg-left">
                <div class="bg-left__1"></div>
                <div class="bg-left__2"></div>
                <div class="bg-left__3"></div>
                <div class="bg-left__4"></div>
            </div>
        </div>

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
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_nagoya.scss';
</style>
