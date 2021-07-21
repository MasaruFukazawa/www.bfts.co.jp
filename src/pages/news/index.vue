<template>
    <div class="page-news">
        <BgTop></BgTop>
        <div class="heading-en under-en-title">News</div>

        <section
            v-for="(posts, index) in postsList"
            :key="index"
            class="news-list"
            v-show="currentId === index + 1"
        >
            <div
                v-for="(post, index) in posts"
                class="news"
                :class="{
                    'has-img': post.featured_image.src.indexOf('default.png') === -1,
                }"
                :key="index"
            >
                <div class="news__info">
                    <div v-show="post.date" class="news__info__day">
                        {{ change_date_format(post.date) }}
                    </div>
                    <div
                        v-show="post.terms.post_tag"
                        class="news__info__tag"
                        v-html="(post.terms.post_tag && post.terms.post_tag[0].name) || '#お知らせ'"
                    ></div>
                </div>
                <div class="news__title" v-html="post.title.rendered"></div>
                <div class="news__text" v-html="str_trim(post.content.rendered)"></div>
                <div
                    class="news__img"
                    v-show="post.featured_image.src.indexOf('default.png') === -1"
                >
                    <img :src="post.featured_image.src" :alt="post.title.rendered" />
                </div>
                <div
                    v-show="post.content.rendered.length > display_str_length"
                    @click="open_news"
                    class="news__more"
                >
                    MORE
                </div>
            </div>
        </section>

        <div class="pager">
            <div class="pager__btn prev-btn" @click="goToPrev">&lt;&lt;</div>
            <div
                v-for="(id, index) in maxId"
                :key="index"
                class="pager__btn page-btn"
                :class="{ current: currentId === id }"
                @click="goToTarget(id)"
            >
                {{ id }}
            </div>
            <div class="pager__btn next-btn" @click="goToNext">&gt;&gt;</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';
import { WpApi } from '~/assets/js/wp-api/';

export default {
    mixins: [meta],
    components: {
        BgTop,
    },
    data: function () {
        return {
            meta: {
                title: 'お知らせ',
                description:
                    '大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた、株式会社BFTの最新情報をご紹介します。',
                url: 'news',
            },
            postsList: new Array(), // 分割後のpostリスト
            currentId: 1, // 現在のタブ
            maxId: 1, // タブのマックス値
            posts_per_page: 5,
            display_str_length: 80, // 初期表示文字列の長さ
        };
    },
    methods: {
        init: function () {
            // maxページ数の計算
            this.maxId = Math.ceil(this.posts.length / this.posts_per_page);
            // postsを分割する
            this.split_posts();
        },
        split_posts: function () {
            // postsの分割
            for (let i = 0; i < this.posts.length; i += this.posts_per_page) {
                let split_posts = this.posts.slice(i, i + this.posts_per_page);
                this.postsList.push(split_posts);
            }
        },
        goToPrev: function () {
            if (this.currentId === 1) return;
            this.currentId--;
            scrollTo(0, 0);
        },
        goToNext: function () {
            if (this.currentId >= this.maxId) return;
            this.currentId++;
            scrollTo(0, 0);
        },
        goToTarget: function (targetId) {
            if (this.currentId === targetId) return;
            this.currentId = targetId;
            scrollTo(0, 0);
        },
        str_trim: function (txt) {
            // 初期表示length以下であればそのまま返却
            if (txt.length <= this.display_str_length) return txt;
            // タグ存在確認用の正規表現
            const regax = /<(".*?"|'.*?'|[^'"])*?>/;
            /** タグの存在位置 */
            let num = txt.search(regax);
            if (num !== -1 && num < this.display_str_length) {
                // タグが存在且つタグが#{display_str_length}番目内に存在
                return (
                    txt.substr(0, num) +
                    '<span class="toggle">...</span> <span class="toggle disnone">' +
                    txt.substr(num) +
                    '</span>'
                );
            } else {
                return (
                    txt.substr(0, this.display_str_length) +
                    '<span class="toggle">...</span> <span class="toggle disnone">' +
                    txt.substr(this.display_str_length) +
                    '</span>'
                );
            }
        },
        // NEWSオープン処理
        open_news: function (e) {
            e.target.innerHTML = /MORE/.test(e.target.innerHTML) ? 'CLOSE' : 'MORE';
            let spans = e.target.parentElement.querySelectorAll('.news__text span.toggle');
            spans.forEach((span) => {
                span.classList.toggle('disnone');
            });
        },
        change_date_format: function (str) {
            // 日付のフォーマット変更
            const date = new Date(str);
            return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        },
    },
    mounted: function () {
        this.init();
    },
    async asyncData(context) {
        const newsWpApi = new WpApi({ baseUrl: context.env.apiBaseUrl });
        const posts = newsWpApi.getPosts();
        return posts;
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_news.scss';
</style>
