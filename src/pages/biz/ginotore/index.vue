<template>
    <div class="page-ginotore">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            {{ page_data.en_title }}<br/>{{ page_data.title }}
            <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.thumbnail_image})` }]"></div>
            <div class="heading__img"></div>
        </div>
        <div v-html="page_data.content"></div>
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
import { BizChildPageWpApi } from '~/assets/js/wp-api/';

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
    async asyncData(context) {

        const bizChildPageWpApi = new BizChildPageWpApi({
            baseUrl: context.env.apiBaseUrl,
        }, 253);

        const page_data = bizChildPageWpApi.getData();

        return page_data

    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_ginotore.scss';
</style>
