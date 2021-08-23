<template>
    <div class="page-torepura">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            {{ page_data.en_title }}<br/>{{ page_data.title }}
            <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.thumbnail_image})` }]"></div>
        </div>
        <div v-html="page_data.content"></div>
<!--
        <section class="sec-price">
            <h2 class="sec-price__title">
                <span class="ja">費用</span>
            </h2>

            <div class="sec-price__in">
                <div class="line-black three">
                    <p>スタートアップ研修</p>
                    <p>1回5名様まで</p>
                    <p>50,000円</p>
                </div>
                <div class="line-black three">
                    <p>システム構築研修</p>
                    <p>1週間</p>
                    <p>75,000円/人</p>
                </div>
                <div class="line-black three">
                    <p>Linux研修</p>
                    <p>4週間</p>
                    <p>300,000円/人</p>
                </div>
                <div class="line-black three">
                    <p>Windows研修</p>
                    <p>3週間</p>
                    <p>225,000円/人</p>
                </div>
                <div class="line-black three">
                    <p>ネットワーク研修</p>
                    <p>2週間</p>
                    <p>150,000円/人</p>
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
                title: 'トレプラ',
                description:
                    '「実践的なプロジェクト形式の技術研修」全ての研修コンテンツで本番相当の１Ｕサーバやネットワーク機器を使用し、物理的なシステム構成の理解からスタート。現役SEの講師が個人の能力に合わせて、マンツーマンで指導します。',
                url: 'torepura',
                titleTemplate: '｜強いエンジニアを育てる研修｜人とシステムをつくる会社｜BFT',
            },
        };
    },
    created: function () {},
    async asyncData(context) {

        const bizChildPageWpApi = new BizChildPageWpApi({
            baseUrl: context.env.apiBaseUrl,
        }, 251);

        const page_data = bizChildPageWpApi.getData();

        return page_data

    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_torepura.scss';
</style>
