<template>
    <div class="page-system">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            System Development<br />Infrastructure Construction
            <div class="heading__img"></div>
        </div>

        <div class="system__desc">
            <h1 class="large-ja">
                <span class="ja">サービス内容</span>
            </h1>

            <div class="desc__txt">
                <div class="txt-bg"></div>
                <h3>ＢＦＴでは、主にインフラ基盤構築とシステム開発でサービスを提供しています。</h3>
                <div class="desc__txt__txt">
                    ＢＦＴはインフラ基盤技術に集中することで、それを自社の強みとして成長してきました。その成長過程において「テクノロジーをオープンにすること」の大切さを学びました。我々が得た知的な資産をオープンにし、それを多くのお客様へお届けすること、そこからさらにフルスタックに技術を追求していくこと、これが我々のテクノロジーに対する基本スタンスです。
                </div>
            </div>
        </div>

        <section class="system__sysdev">
            <div class="side-red"></div>
            <h2 class="system__sysdev__title">
                <span class="ja">システム開発</span>
            </h2>
            <div class="system__sysdev__desc">
                <div class="system__sysdev__desc__first">
                    これまでインフラ基盤に注力してきたこともあり、システム開発のケイパビリティはまだまだ微力です。ですが、ＢＦＴらしさを発揮したいという思いで、アプリケーションアーキテクトの仕事やAI関連の仕事に注力しています。
                </div>
                <h3 class="system__sysdev__desc__about">
                    「FIWARE」を活用した<br class="sp" />
                    スマートシティ向け<br class="sp" />
                    「データ利活用基盤サービス」の開発
                </h3>
                <div class="system__sysdev__desc__info">
                    <div class="system__sysdev__desc__info__img"></div>
                    <div class="system__sysdev__desc__info__txt">
                        IoT等の情報を集約するクラウドサービスの開発で、VPS環境にDockerコンテナを構築し、Rancherでコンテナを管理する機能の設計と製造。開発言語はJavaScript(Node.js)で、FIWAREを使用した。
                    </div>
                </div>
            </div>

            <div class="red-bg">
                <div class="red-bg__1"></div>
                <div class="red-bg__2"></div>
                <div class="red-bg__3"></div>
                <div class="red-bg__4"></div>
            </div>
        </section>

        <section class="system__infra">
            <div class="side-red"></div>
            <h2 class="system__infra__title">
                <span class="ja">インフラ基盤構築</span>
            </h2>
            <div class="system__infra__desc">
                <div class="system__sysdev__desc__first">
                    商談で「インフラ基盤が強みです」というと「どこが得意？」と聞かれて困るときがあります。というのは「インフラ基盤全体をデザインする」を大切にしているからです。オンプレもクラウドもベンダもこだわらず「インフラ基盤全体を相談できる会社」でありつづけます。
                </div>
                <h3 class="system__infra__desc__about">
                    ハイブリッドキャストサービスを提供するシステムの機能拡張
                </h3>
                <div class="system__infra__desc__info">
                    <div class="system__infra__desc__info__img"></div>
                    <div class="system__infra__desc__info__txt">
                        テレビをインターネットにつなぎ－IPTV、放送番組とウェブを連動させるサービスで、システムはパブリッククラウドのAmazon
                        Web
                        Services（AWS）に構築した。要件定義から構築・運用まで行い、AWSの運用費用を削減した。
                    </div>
                </div>
            </div>
        </section>
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
    data() {
        return {
            meta: {
                title: 'インフラ基盤 / システム開発',
                description:
                    '大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた、株式会社BFTのインフラ基盤 / システム開発についてご紹介します。多くの経験を経て、自社IT技術を基盤構築し、技術を蓄積。Windows以外にLinuxやSolaris、AIXなどに対応しております。',
                url: 'system',
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_system.scss';
</style>
