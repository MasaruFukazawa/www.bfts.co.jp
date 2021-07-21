<template>
    <footer class="footer" v-bind:class="$route.name">
        <div class="footer__inner footer__inner">
            <div class="footer__head">
                <div class="footer__links">
                    <nuxt-link class="footer__links__link" to="/company">会社概要</nuxt-link>
                    <nuxt-link class="footer__links__link" to="/contact">お問い合わせ</nuxt-link>
                </div>
                <div class="footer__icon-list">
                    <a
                        class="footer__icon-link"
                        href="https://www.facebook.com/%EF%BC%A2%EF%BC%A6%EF%BC%B4-%E5%90%8D%E5%8F%A4%E5%B1%8B%E6%94%AF%E5%BA%97-112767063975711/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="~/assets/img/common/icon/facebook.jpg" alt="facebook" />
                    </a>
                    <a
                        class="footer__icon-link"
                        href="https://www.instagram.com/bft.nagoya.kouhou"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="~/assets/img/common/icon/instagram.jpg" alt="instagram" />
                    </a>
                </div>
            </div>
            <div class="footer__under">
                <div class="footer__under__links">
                    <nuxt-link to="/privacy">個人情報保護方針</nuxt-link>
                    <nuxt-link to="/policy">ソーシャルメディアポリシー</nuxt-link>
                    <a href="/pdf/margin.pdf" target="_blank">マージン率の公開資料</a>
                </div>

                <div class="footer__under__cr">Copyright © ＢＦＴ inc. All Rights Reserved.</div>
            </div>
        </div>
        <div class="footer__inner footer__inner--top">
            <div class="footer__links">
                <nuxt-link class="footer__links__link" to="/company">会社概要</nuxt-link>
                <nuxt-link class="footer__links__link" to="/contact">お問い合わせ</nuxt-link>
            </div>
            <div class="footer__under">
                <div class="footer__under__links">
                    <nuxt-link to="/privacy">個人情報保護方針</nuxt-link>
                    <nuxt-link to="/policy">ソーシャルメディアポリシー</nuxt-link>
                    <a href="/pdf/margin.pdf" target="_blank">マージン率の公開資料</a>
                </div>

                <div class="footer__under__cr">Copyright © ＢＦＴ inc. All Rights Reserved.</div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data: function () {
        return {};
    },
    components: {},
    methods: {
        init: function () {},
    },
    mounted: function () {
        this.init();
    },
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/components/_footer.scss';
</style>
