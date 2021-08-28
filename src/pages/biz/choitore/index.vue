<template>
    <div class="page-choitore">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
            {{ page_data.en_title }}<br/>{{ page_data.title }}
            <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.thumbnail_image})` }]"></div>
        </div>
        <div v-html="page_data.content"></div>
        <!-- <a
			href="https://bft-dojo.resv.jp"
			target="_blank"
			rel="noopener noreferrer"
			class="reserve-link"
		>
			ご予約はこちらから
		</a> -->
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
                title: 'チョイトレ',
                description:
                    '基礎学習から段階的に学びたい方へ。1クラス3時間のクラスを段階的に受講することでエンジニアが確実にステップアップ。必要なクラスだけをチョイスして受講も可能。時間と予算をエンジニアのレベルに合わせて有効活用できる技術研修です。',
                url: 'choitore',
                titleTemplate: '｜強いエンジニアを育てる研修｜人とシステムをつくる会社｜BFT',
            },
        };
    },
    created: function () {},
    async asyncData(context) {

        const bizChildPageWpApi = new BizChildPageWpApi({
            baseUrl: context.env.apiBaseUrl,
        }, 249);

        const page_data = bizChildPageWpApi.getData();

        return page_data
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_choitore.scss';
</style>
