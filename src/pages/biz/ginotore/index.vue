<template>
    <div class="page-ginotore">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            Ginotore<br />ギノトレ
            <div class="heading__img"></div>
        </div>

        <div class="ginotore__desc">
            <h1 class="large-ja">
                <span class="ja">サービス内容</span>
            </h1>

            <div class="desc__txt">
                <div class="txt-bg"></div>
                <h3>ハンズオン形式の1日集中技術習得研修</h3>
                <div class="desc__txt__txt">
                    自社システムに特定の技術を導入したい時、技術ノウハウが必要になります。<br />
                    しかし、短期間でそのような技術を持つエンジニアを育成することは難しいのが現実です。<br />
                    ギノトレは実際に大型プロジェクトで導入したノウハウを基に、現場で使うために何をどこまで学習する必要があるのかを考え開発された技術研修です。さらに、1日で学習成果を出すために、チューター制度を導入しています。メインの講師に加え、サポートをするチューターが配置されます。そうすることで受講者は待つことなく1日中、講師に質問をしながら研修を進めることができます。
                </div>
            </div>
        </div>
        <section class="sec-why">
            <div class="side-red"></div>
            <h2 class="sec-why__title">
                <span class="ja">誰のためにやるの？</span>
            </h2>

            <div class="sec-why__in">
                <h3 class="sec-why__about">
                    実際に技術を活用したいエンジニア・情報システム部門をサポート
                </h3>

                <div class="sec-why__desc">
                    もし、来期からパブリッククラウドを導入する予定があるとき、1日で自社のシステム部門に10人のパブリッククラウドエンジニアを育成出来たらどうでしょうか？<br />
                    大型プロジェクトから培った特別なノウハウが詰まった技術研修だからこそ、不可能を可能にさせることができます。ＢＦＴ道場の技術メニューから選択してお客様オリジナルの研修メニューを作成します。
                </div>

                <div class="sec-why__img"></div>
            </div>

            <div class="red-bg">
                <div class="red-bg__1"></div>
                <div class="red-bg__2"></div>
                <div class="red-bg__3"></div>
                <div class="red-bg__4"></div>
            </div>
        </section>

<!--
        <section class="sec-price">
            <h2 class="sec-price__title">
                <span class="ja">費用</span>
            </h2>

            <div class="sec-price__in">
                <div class="line-black two">
                    <p>1DAYハンズオン研修</p>
                    <p>1人 30,000円～</p>
                </div>

                <div class="line-white fs12">
                    ※カスタマイズが発生した場合はカスタマイズ費用が別途発生します。
                </div>
            </div>

            <div class="notice">
                ※詳しくは<nuxt-link to="/contact">こちら</nuxt-link>
                からご連絡ください。
            </div>
        </section>
-->
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
                title: 'ギノトレ',
                description:
                    'ギノトレは実際に大型プロジェクトで導入したノウハウを基に、現場で使うために何をどこまで学習する必要があるのかを考え開発された技術研修です。さらに、1日で学習成果を出すために、チューター制度を導入しています。',
                url: 'ginotore',
                titleTemplate: '｜強いエンジニアを育てる研修｜人とシステムをつくる会社｜BFT',
            },
        };
    },
    created: function () {},
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_ginotore.scss';
</style>
