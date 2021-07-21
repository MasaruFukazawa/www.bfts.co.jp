<template>
    <div class="page-com">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">Company&nbsp;Overview</div>

        <h1 class="com__title">
            <span class="ja">会社概要</span>
        </h1>

        <section class="com__info-table">
            <div class="info-name">会社名</div>
            <div class="info-value">株式会社ＢＦＴ</div>

            <div class="info-name">設立</div>
            <div class="info-value">2002年2月1日</div>

            <div class="info-name">資本金</div>
            <div class="info-value">9,990万円</div>

            <div class="info-name">役員</div>
            <div class="info-value multi-line">
                代表取締役　小林 道寛<br />
                取締役　　　古賀 彌奈子<br />
                取締役　　　恒川 欣也<br />
                取締役　　　宮下 竜太<br />
                監査役　　　漆山 伸一
                <span class="ta-right">（公認会計士）</span><br />
                会計参与　　金山 直貴 <span class="ta-right">（税理士）</span>
            </div>

            <div class="info-name">従業員</div>
            <div class="info-value">408名（2020年4月時点）</div>

            <div class="info-name">主要取引銀行</div>
            <div class="info-value multi-line">
                三菱UFJ銀行 <br class="sp" />
                <span class="txt-sm">渋谷中央支店</span><br />
                みずほ銀行 <br class="sp" />
                <span class="txt-sm">丸の内中央支店</span><br />
                りそな銀行 <br class="sp" />
                <span class="txt-sm">渋谷支店</span>
            </div>

            <div class="info-name">所在地</div>
            <div class="info-value multi-line">
                本社<br />
                〒100-0005<br class="sp" />
                東京都千代田区丸の内1-6-5<br />
                丸の内北口ビルディング22階<br />
                TEL:03-6810-0070<br class="sp" />（代表） <br class="sp" />FAX:03-3213-6655
                <br /><br />
                名古屋支店<br />
                〒460-0003<br class="sp" />
                愛知県名古屋市中区錦2-4-3<br />
                錦パークビル2階<br />
                TEL:052-211-7710
            </div>

            <div class="info-name">主要事業</div>
            <div class="info-value multi-line">
                インフラ基盤構築<br />
                <span class="pc">&nbsp;&nbsp;&nbsp;</span
                >サーバ・ネットワーク・クラウドの環境構築<br />
                システム開発<br />
                <span class="pc">&nbsp;&nbsp;&nbsp;</span>オープン系システム開発<br />
                教育サービス<br />
                <span class="pc">&nbsp;&nbsp;&nbsp;</span
                >「ＢＦＴ道場」&nbsp;トレプラ・ギノトレ・チョイトレ
            </div>

            <div class="info-name">認定・認証</div>
            <div class="info-value multi-line">
                プライバシーマーク付与事業社認定<br />
                JIS Q 9001：2008（IS O9001）認証<br />
                （顧客要求仕様に基づくソフトウェアの設計・開発および付帯サービス業務）
            </div>
        </section>

        <h2 class="com__his-title">
            <span class="ja">沿革</span>
        </h2>

        <section class="com__his-table">
            <div class="history">
                <div class="history__year">2002年</div>
                <div class="history__txt">
                    株式会社ビジネス・フロー・テクノロジーズ（旧社名）設立
                </div>
            </div>
            <div class="history">
                <div class="history__year">2004年</div>
                <div class="history__txt">本社オフィスを渋谷区桜丘町へ移転</div>
            </div>
            <div class="history">
                <div class="history__year">2005年</div>
                <div class="history__txt">株式会社ビジネスサポートと合併</div>
            </div>
            <div class="history">
                <div class="history__year">2006年</div>
                <div class="history__txt">資本金 5,000万円に増資</div>
            </div>
            <div class="history">
                <div class="history__year">2007年</div>
                <div class="history__txt">資本金 9,990万円に増資</div>
            </div>
            <div class="history">
                <div class="history__year">2008年</div>
                <div class="history__txt multi-line">
                    社名を株式会社ＢＦＴに変更<br />
                    本社オフィスを中央区銀座へ移転
                </div>
            </div>
            <div class="history">
                <div class="history__year">2010年</div>
                <div class="history__txt">本社オフィスを銀座から丸の内に移転</div>
            </div>
            <div class="history">
                <div class="history__year">2011年</div>
                <div class="history__txt">JIS Q 9001：2008（IS O9001）の認証を取得</div>
            </div>
            <div class="history">
                <div class="history__year">2012年</div>
                <div class="history__txt">プライバシーマーク付与事業社に認定</div>
            </div>
            <div class="history">
                <div class="history__year">2013年</div>
                <div class="history__txt">クラウド構築サービス開始</div>
            </div>
            <div class="history">
                <div class="history__year">2017年</div>
                <div class="history__txt">教育サービス『ＢＦＴ道場』開始</div>
            </div>
            <div class="history">
                <div class="history__year">2018年</div>
                <div class="history__txt">名古屋支店開設</div>
            </div>

            <div class="bg-red">
                <div class="bg-red__1"></div>
                <div class="bg-red__2"></div>
                <div class="bg-red__3"></div>
                <div class="bg-red__4"></div>
            </div>
        </section>

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
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_company.scss';
</style>
