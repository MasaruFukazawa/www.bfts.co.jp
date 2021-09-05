<template>
    <div class="page-pd">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
          <span v-html="page_data.title"></span>
          <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.thumbnail_image})` }]"></div>
	</div>
        <div v-html="page_data.content"></div>
    </div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import { WpPageApi } from '~/assets/js/wp-api/';

export default {
    mixins: [meta],
    components: {
        BgTop,
    },
    data: function () {
        return {
            meta: {
                title: '人材育成制度',
                description:
                    'ＢＦＴの人材育成はエンジニアとして能力や素質を直接育てるのではなく、失敗してもよい場をつくり、そこでの挑戦の過程から「自分の能力を伸ばす」を教えています。そのため技術に限定しておらず、実践や、より実践に近い体験を大切にしています。',
                url: 'peopledevelopment',
                titleTemplate: '｜人とシステムをつくる会社｜BFT',
            },
        };
    },
    created: function () {},
    async asyncData(context) {

        const wpPageApi = new WpPageApi({
            baseUrl: context.env.apiBaseUrl,
        }, 290);

        const page_data = wpPageApi.getData();

        return page_data
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_peopledevelopment.scss';
</style>
