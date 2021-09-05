<template>
    <div class="page-media">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">
          <span v-html="page_data.title"></span>
          <div class="heading__img" :style="[{ backgroundImage: `url(${page_data.thumbnail_image})` }]"></div>
	</div>
        <div v-html="page_data.content"></div>
        <TheSNS />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import TheSNS from '~/components/common/TheSNS.vue';
import { WpPageApi } from '~/assets/js/wp-api/';
 
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
    async asyncData(context) {

        const wpPageApi = new WpPageApi({
            baseUrl: context.env.apiBaseUrl,
        }, 299);

        const page_data = wpPageApi.getData();

        return page_data
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/media/_index.scss';
</style>
