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
                title: '',
                description: '',
                url: '',
                titleTemplate: '',
            },
        };
    },
    created: function () {},
    async asyncData( context ) {

        const wpPageApi = new WpPageApi({
            baseUrl: context.env.apiBaseUrl,
        }, context.payload.page_data.id);

        const page_data = wpPageApi.getData();

        return page_data
    },
};
</script>

<style lang="scss">
@import '~/assets/scss/page/_peopledevelopment.scss';
</style>
