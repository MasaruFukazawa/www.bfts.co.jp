<template>
    <section class="access" :class="`${$route.name}`">
        <div class="access__in">
            <h2 class="access__title">
                <span class="ja">アクセス</span>
            </h2>

            <slot name="heading"></slot>

            <slot name="info">
                <!-- info -->
                <div class="access__info">
                    <div class="access__info__txt">住所</div>
                    <div class="access__info__txt">
                        〒460-0003 <br class="sp" />愛知県名古屋市中区錦2丁目4 -3　錦パークホテル2階
                    </div>
                    <div class="access__info__txt">電話</div>
                    <div class="access__info__txt">052-211-7710</div>
                    <div class="access__info__txt">E-mail</div>
                    <div class="access__info__txt">info@bfts.co.jp</div>
                </div>
            </slot>

            <div class="access__other">
                <slot name="other"></slot>
            </div>

            <iframe
                :src="queryUrl"
                frameborder="0"
                style="border: 0"
                allowfullscreen
                class="access__map"
            ></iframe>

            <slot name="heading_2"></slot>

            <slot name="info_2" v-if="query_2">
                <!-- info_2 -->
                <div class="access__info">
                    <div class="access__info__txt">住所</div>
                    <div class="access__info__txt">
                        〒460-0003 <br class="sp" />愛知県名古屋市中区錦2丁目4 -3　錦パークビル2階
                    </div>
                    <div class="access__info__txt">電話番号</div>
                    <div class="access__info__txt">052-211-7710</div>
                    <div class="access__info__txt">E-mail</div>
                    <div class="access__info__txt">info@bfts.co.jp</div>
                </div>
            </slot>

            <iframe
                v-if="query_2"
                :src="queryUrl_2"
                frameborder="0"
                style="border: 0"
                allowfullscreen
                class="access__map access__map-2"
            ></iframe>
        </div>
    </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        query: {
            type: String,
            required: true,
            default: '',
        },
        query_2: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            /** 検索文字列を入れたURL */
            queryUrl: '',
            queryUrl_2: '',
        };
    },
    mounted() {
        if (this.query)
            this.queryUrl = `https://www.google.com/maps?output=embed&q=${this.query}&t=m&hl=ja&z=17&iwloc=A`;
        if (this.query_2)
            this.queryUrl_2 = `https://www.google.com/maps?output=embed&q=${this.query_2}&t=m&hl=ja&z=17&iwloc=A`;
        // t=m : 表示モード
        // hl=ja : 言語
        // z : 縮尺
        // q : '緯度,経度' or 文字列
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/_access-map.scss';
</style>
