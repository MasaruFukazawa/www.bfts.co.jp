<template>
    <div class="page-service">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">Education&amp;System Integration</div>

        <div class="service__desc">
            <h1 class="large-en">
                <span class="en">Our Service</span>
            </h1>

            <div class="desc__txt">
                <div class="txt-bg"></div>
                <div class="desc__txt__txt">
                    デジタル化が急速に進むいま、多くの企業が自社の競争力を維持・向上させるために事業の見直し＝デジタル変革を行っています。デジタル変革には最新のデジタル技術を適切に組み合わせることが重要です。ＢＦＴは独立系ベンダである強みを生かし、SIや教育のサービスをとおしてお客様のデジタル変革を支援しています。
                </div>
            </div>
        </div>

        <div class="service">
            <div class="side-red"></div>
            <h2 class="service__title">
                <span class="ja">ＢＦＴ道場</span>
            </h2>
            <div class="service__about">
                ＢＦＴ道場は年間100以上のプロジェクトノウハウから生まれた実践型IT技術研修です。全ての研修コンテンツはノウハウを基に自社で独自開発しています。現役のSE講師から生の知識を学び、現場で本当に必要とする能力を習得できる教育サービスです。
            </div>
            <div class="service__menu tyoitore">
                <div class="menu__img"></div>
                <div class="menu__info">
                    <h3 class="menu__title">チョイトレ</h3>
                    <p class="menu__about">
                        業界初！インフラ技術研修で99個のIT専門の技術研修をラインナップ<br />
                        月額定額制 or チケット制のフレキシブルな料金体系
                    </p>
                    <nuxt-link to="/biz/choitore" class="menu__link"> MORE </nuxt-link>
                </div>
            </div>
            <div class="service__menu torepura">
                <div class="menu__img"></div>
                <div class="menu__info">
                    <h3 class="menu__title">トレプラ</h3>
                    <p class="menu__about">
                        新入社員向けインフラ技術研修<br />
                        個人の能力に合わせてマンツーマン指導<br />
                        プロジェクト形式だから仕事で必要な能力が習得できる
                    </p>
                    <nuxt-link to="/biz/torepura" class="menu__link"> MORE </nuxt-link>
                </div>
            </div>
            <div class="service__menu ginotore">
                <div class="menu__img"></div>
                <div class="menu__info">
                    <h3 class="menu__title">ギノトレ</h3>
                    <p class="menu__about">
                        ハンズオン研修だから1日で確実に技術習得できる<br />
                        現役SEがマンツーマンで指導。1日中、講師に質問し放題<br />
                        研修内容は翌日から仕事で使えます！
                    </p>
                    <nuxt-link to="/biz/ginotore" class="menu__link"> MORE </nuxt-link>
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
                <span class="ja">システムインテグレーション事業</span>
            </h2>

            <div class="si-zigyou__about">
                ご要望に応じて、ベンダ製品、オープンソースソフトウェア、クラウドサービスなど、様々なデジタル技術を用いたシステムを構築してきました。また、プロジェクト開始前のシステム化の検討や提案のご支援も対応可能です。
            </div>

            <div class="si-zigyou__menu-wrap">
                <div class="si-zigyou__menu-wrap__menu menu-system">
                    <div class="menu__icon"></div>
                    <h3 class="menu__title">システム開発</h3>
                    <div class="menu__img">
                        <img src="~/assets/img/service/si.jpg" alt="BFT システム開発" />
                    </div>
                    <div class="menu__desc">
                        ITアーキテクトとしてシステム設計、サーバサイドのアプリケーション設計、プログラム製造、リリース後の保守を行います
                    </div>
                </div>
                <div class="si-zigyou__menu-wrap__menu menu-infra">
                    <div class="menu__icon"></div>
                    <h3 class="menu__title">インフラ構築</h3>
                    <div class="menu__img">
                        <img src="~/assets/img/service/infra.jpg" alt="BFT システム開発" />
                    </div>
                    <div class="menu__desc">
                        システム化の検討、非機能要件定義、サーバ・ネットワーク環境設計、OS・ミドルウェアの設計・構築、リリース後の運用保守を行います
                    </div>
                </div>
            </div>

            <nuxt-link to="/system" class="si-zigyou__more"> MORE </nuxt-link>
        </div>
    </div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';

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
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_biz.scss';
</style>
