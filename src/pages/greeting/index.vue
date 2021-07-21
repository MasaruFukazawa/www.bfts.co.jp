<template>
    <div class="page-greeting">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">Corporate&nbsp;Philosophy</div>

        <div class="greeting__desc">
            <h1 class="large-ja">
                <span class="ja">企業理念</span>
            </h1>

            <div class="desc__txt">
                <div class="txt-bg"></div>
                <h3>人とシステムをつくる会社</h3>
            </div>
        </div>

        <section class="greeting__greeting">
            <h2>代表あいさつ</h2>

            <div class="greeting__greeting__wrap">
                <div class="greeting__greeting__wrap__txt">
                    <h3 class="greeting__greeting__wrap__txt--head-mid">
                        人とシステムをつくる会社
                    </h3>
                    私たちが掲げる「システムをつくる」という言葉には、単にお客様から依頼された要件や機能を満たす以上の意味を含んでいます。なぜなら、システムの先には必ずお客様の「自社をこう変えたい」「社会に対してこんな変化を生みたい」という思いがあるからです。その思いを読み取り、システムに置き換えて実現へのプロセスをお手伝いするのが私たちＢＦＴの大切な役割です。
                    <br /><br />
                    また「人をつくる」という言葉には、自社で蓄積したシステム関連のナレッジを積極的に社会へ還元していく理念を込めています。自分たちが技術力や知識をつけて成長するのはもちろんのこと、さらにシステムにつながる他企業・他分野の皆さんにも教育や育成などの「人をつくる」の面から貢献したいと考えています。
                    <br /><br />
                    この二つがある「人とシステムをつくる」仕事はとてもクリエイティブで面白いものです。お客様は良質なシステムに加え社会に影響をもたらす力を得られます。私たちはシステムの構成や機能・情報の動線づくりだけでなく、それを超えた貢献－自己表現ができます。さらに双方の思いが噛み合ったときに生まれる成果はお互いの期待値をはるかに超え、その達成感と充足感は他に代えがたいものです。
                    <br /><br />
                    お客様に感動をお届けする。そんな幸せな体験ができるよう、私たちは「システムをつくる」で技術とニーズへの対応力を磨き、「人をつくる」でシステムをつくる仕事の楽しさや面白さ、未来に続く可能性をお伝えしていきます。
					<br /><br />
                    <h3 class="greeting__greeting__wrap__txt--head-mid">
                        デジタル技術で感動の連鎖を生む
                    </h3>
                    私たちはデジタル技術によってシステムを構築し、社会に貢献していく企業です。また経験や実績から得たナレッジを伝え、デジタル技術を理解し活用できる人材を育てるのも大事な使命です。どちらにも共通しているのは「自分だけの能力を高めるだけでなく、得られた成果をもっと多くの人に伝えていく」という考え方です。伝えた人々が社会をさらに良くしていくこと、私たちの提供したサービス以上に「感動」が遠くへ広がっていくこと、この「連鎖」が私たちの理想とする形です。
                    <br /><br />
                    そのために私たちはシステムに携わる方々との接点を大切にしています。システムつくりはその完成がゴールではありません。プロフェッショナルの立場からシステム化の本質的なニーズをつかみ、求められる方式や手段をお客様にわかりやすい言葉で説明するなど、そのプロセスが大切です。このようなシステムづくりを通して、私たちはその先にあるお客様のビジネスにつながり、さらにそれをより良い未来につなげていきます。
                    <br /><br />
                    システムを利用する人々のリテラシーやシステムによってサービスを提供する会社のリテラシーが上がれば、より高度なシステム構築ができます。同時にシステムをつくる私たちに要求される技術力や対応力も高まりますが、それは負荷ではなく成長に必要な課題です。私たちは2002年に創業した当初からこの課題に一貫して取り組んでいます。
                    <br /><br />
                    <p class="greeting__greeting__wrap__signature">
                        株式会社ＢＦＴ 代表取締役　小林 道寛
                    </p>
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
    data: function () {
        return {
            meta: {
                title: '企業理念',
                description:
                    '大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた、株式会社BFTの代表挨拶をご紹介しております。',
                url: 'greeting',
                titleTemplate: '｜人とシステムをつくる会社｜株式会社BFT',
            },
        };
    },
    created: function () {},
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_greeting.scss';
</style>
