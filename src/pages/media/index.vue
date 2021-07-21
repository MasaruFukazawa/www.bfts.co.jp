<template>
    <div class="page-media">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">メディア発信</div>

        <section class="description">
            <h1 class="large-ja">
                <span class="ja">最新のメディア発信</span>
            </h1>

            <div class="desc__txt">
                <div class="txt-bg"></div>
                <div class="desc__txt__txt">
                    私たちはオウンドメディアやブログ・ＳＮＳを通して、<br />
                    ＩＴ技術を活用した課題解決方法をはじめ、<br />
                    ＩＴ業界の話・働く社員が興味を持っていること・イベント情報などを発信しています。<br />
                </div>
            </div>
        </section>

        <section class="description">
            <h1 class="large-ja">
                <span class="ja">オウンドメディア</span>
            </h1>

            <div class="desc__txt">
                <div class="txt-bg"></div>
                <h3>テクノロジーで社会を豊かに。<br />ＩＴ活用ノウハウを無料公開！</h3>
                <div class="desc__txt__txt">
                    ・最新のトレンドについていけない。<br />
                    ・ＩＴと言われると難しそう。ためらってしまう。<br />
                    ・ネット上は情報にあふれていて自分に合う情報をうまく見つけられない。<br />
                    そんな課題解決の一助となるべく、<br />
                    ＩＴ技術をより身近なものにして、日本の社会のIT活用をさらに加速させることを旨に<br />
                    ブログやSNSでの情報発信にとどまらず、自らのメディアも活用してまいります。<br />
                    IT業界の方々にも、IT業界でない方々にも、わかりやすく、利用する場面に合わせた<br />
                    活きたＩＴ活用ノウハウをお届けしてまいります。<br />
                    テクノロジーをユーザの手に<br />

                    <a
                        href="https://www.users-digital.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >https://www.users-digital.com/
                    </a>
                </div>
            </div>
        </section>

        <TheSNS />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import TheSNS from '~/components/common/TheSNS.vue';

export default Vue.extend({
    mixins: [meta],
    components: {
        BgTop,
        TheSNS,
    },
    data() {
        return {
            meta: {
                title: 'メディア発信',
                description: '私たちはオウンドメディアやブログ・ＳＮＳを通して、ＩＴ技術を活用した課題解決方法をはじめ、ＩＴ業界の話・働く社員が興味を持っていること・イベント情報などを発信しています。',
                url: 'media',
            },
        };
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/media/_index.scss';
</style>
