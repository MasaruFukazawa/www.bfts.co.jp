<template>
    <div class="page-index js-fullscreen-wrap" :class="{ is_loading: is_loading }">
        <Loading></Loading>
        <div class="white-bg"></div>
        <div class="js-bg-wrapper">
            <div class="js-section-bg bg-section-01">
                <!-- left side -->
                <div class="under left-main"></div>
                <div class="left-main"></div>
                <div class="left delay9-main"></div>
                <div class="delay30 right left-topside1"></div>
                <div class="top left-topside1"></div>
                <div class="top left-topside2"></div>
                <div class="left-topside2"></div>
                <div class="top left-topside3"></div>
                <div class="top delay2 left-topside3__right"></div>
                <div class="left-topside3__right"></div>
                <div class="top left-topside4"></div>
                <div class="delay15 right left-topside4"></div>
                <div class="top left-topside4__right"></div>
                <div class="right delay7 left-topside4__right"></div>
                <div class="top left-topside5"></div>
                <div class="delay7 right top left-topside5"></div>
                <div class="left left-topside6"></div>

                <div class="top left-rightside1"></div>
                <div class="top left-rightside1"></div>
                <div class="right delay14 left-rightside1"></div>
                <div class="top left-rightside2"></div>
                <div class="top left-rightside3"></div>
                <div class="right delay19 left-rightside3"></div>

                <div class="top left-leftside1"></div>
                <div class="top left-leftside1"></div>
                <div class="top left-leftside1__under"></div>
                <div class="top left-leftside1__under"></div>
                <div class="under delay3 left-leftside1__under"></div>
                <div class="top left-leftside2"></div>
                <div class="top left-leftside3"></div>
                <div class="under left-leftside3"></div>
                <div class="top left-leftside4"></div>
                <div class="left delay2 left-leftside4"></div>
                <div class="left-leftside4"></div>
                <div class="top left-leftside5"></div>
                <div class="top left-leftside6"></div>

                <div class="under left-underside1"></div>
                <div class="left-underside1"></div>
                <div class="under left-underside2"></div>
                <div class="left left-underside2"></div>
                <div class="under left-underside3"></div>
                <div class="under left-underside4"></div>
                <div class="right left-underside4"></div>
                <div class="under left-underside5"></div>
                <div class="under left-underside6"></div>
                <div class="top left-underside6"></div>
                <div class="right delay2 left-underside6"></div>
                <div class="under left-underside6__right"></div>
                <div class="under left-underside7"></div>
                <div class="left-underside7"></div>
                <div class="left left-underside7"></div>
                <div class="under left-underside7__right"></div>
                <div class="under left-underside8"></div>
                <div class="under left-underside9"></div>
                <div class="left-underside9"></div>
                <div class="left left-underside9"></div>

                <!-- right side -->
                <div class="delay10 right-main"></div>
                <div class="delay6 top right-leftside1"></div>
                <div class="delay3 top right-leftside2"></div>
                <div class="delay21 under right-leftside2"></div>
                <div class="delay12 top right-leftside3"></div>
                <div class="delay12 under right-leftside3"></div>
                <div class="delay10 top right-rightside"></div>
                <div class="delay15 top right-rightside2"></div>
                <div class="delay15 right right-rightside2"></div>
                <div class="delay10 under right-rightside3"></div>
                <div class="delay15 right right-rightside3"></div>
                <div class="delay12 under right-rightside4"></div>
                <div class="delay1 under right-rightside5"></div>
                <div class="delay10 under right-rightside6"></div>
                <div class="delay2 under right-rightside7"></div>
                <div class="delay16 under right-rightside8"></div>
                <div class="delay21 under right-rightside9"></div>
            </div>
            <div class="js-section-bg bg-section-02">
                <div class="top main"></div>
                <div class="top main-topside1"></div>
                <div class="top main-topside1__middle"></div>
                <div class="right delay2 main-topside1__middle"></div>
                <div class="top main-topside1__right"></div>
                <div class="top main-topside2"></div>
                <div class="right main-topside2"></div>
                <div class="top delay10 main-topside3"></div>
                <div class="top delay4 main-topside4"></div>
                <div class="left delay6 main-topside4"></div>
                <div class="right delay19 main-topside4"></div>
                <!-- right -->
                <div class="delay1 top main-rightside1"></div>
                <div class="delay5 right main-rightside1"></div>
                <div class="delay4 top main-rightside2"></div>
                <div class="delay1 top main-rightside3"></div>
                <div class="delay5 right main-rightside3"></div>
                <div class="delay1 top main-rightside4"></div>
                <div class="delay7 top main-rightside5"></div>
                <div class="delay19 top main-rightside5"></div>
                <div class="delay1 right main-rightside6"></div>
                <div class="delay29 top main-rightside6"></div>
                <div class="delay15 right main-rightside7"></div>
                <div class="delay3 top main-rightside8"></div>
                <div class="delay1 top main-rightside9"></div>
                <!-- under -->
                <div class="delay2 top main-underside1"></div>
                <div class="main-underside1"></div>
                <div class="delay3 top main-underside2"></div>
                <div class="main-underside2"></div>
                <div class="delay7 top main-underside3"></div>
                <div class="top main-underside3"></div>
                <div class="delay20 right main-underside3"></div>
                <div class="right main-underside3"></div>
                <div class="delay1 top main-underside4"></div>
                <div class="main-underside4"></div>
                <div class="delay1 left main-underside4"></div>
                <div class="delay4 top main-underside4__right"></div>
                <!-- left -->
                <div class="top delay9 main-leftside1"></div>
                <div class="under delay2 main-leftside1"></div>
                <div class="main-leftside1"></div>
                <div class="top main-leftside2"></div>
                <div class="top main-leftside3"></div>
                <div class="top main-leftside4"></div>
                <div class="under main-leftside4"></div>
                <div class="left delay29 main-leftside4"></div>
                <div class="top main-leftside5"></div>
                <div class="left main-leftside5"></div>
                <div class="top main-leftside6"></div>
            </div>
            <div class="js-section-bg bg-section-03">
                <!-- left -->
                <div class="left-main"></div>
                <!-- top side -->
                <div class="top left-topside1"></div>
                <div class="left-topside1"></div>
                <div class="right left-topside1"></div>
                <div class="delay2 top left-topside2"></div>
                <div class="left-topside2"></div>
                <div class="delay2 top left-topside2__right"></div>
                <div class="left-topside2__right"></div>
                <div class="top left-topside3"></div>
                <div class="left delay2 left-topside3"></div>
                <div class="right delay10 left-topside3"></div>
                <div class="delay2 top left-topside3__right"></div>
                <div class="delay25 top left-topside4"></div>
                <div class="left-topside4"></div>
                <div class="delay10 top left-topside5"></div>
                <div class="left-topside5"></div>
                <div class="delay6 top left-topside6"></div>
                <div class="delay7 left left-topside6"></div>
                <!-- right side -->
                <div class="delay7 top left-rightside1"></div>
                <div class="delay3 top left-rightside1__under"></div>
                <div class="delay6 top left-rightside2"></div>
                <div class="delay12 left-rightside2"></div>
                <div class="delay19 top left-rightside2__under"></div>
                <div class="delay1 right left-rightside2__under"></div>
                <div class="delay28 left left-rightside2__under"></div>
                <!-- under side -->
                <div class="top left-underside1"></div>
                <div class="left left-underside1"></div>
                <div class="top left-underside2"></div>
                <div class="top left-underside3"></div>
                <div class="top left-underside3__middle"></div>
                <div class="left-underside3__middle"></div>
                <div class="left left-underside3__middle"></div>
                <div class="top left-underside3__right"></div>
                <div class="left-underside3__right"></div>
                <div class="left delay9 left-underside3__right"></div>
                <div class="top left-underside4"></div>
                <div class="top left-underside4__right"></div>
                <div class="left-underside4__right"></div>
                <div class="left delay8 left-underside4__right"></div>
                <!-- left side -->
                <div class="delay2 top left-leftside1"></div>
                <div class="delay12 top left-leftside1"></div>
                <div class="delay2 top left-leftside2"></div>
                <div class="delay21 top left-leftside3"></div>
                <div class="delay2 top left-leftside3__under"></div>
                <div class="delay2 top left-leftside4"></div>
                <div class="delay25 top left-leftside4__under"></div>
                <div class="left-leftside4__under"></div>
                <div class="delay2 left left-leftside4__under"></div>
                <div class="top left-leftside5"></div>
                <div class="delay7 top left-leftside6"></div>

                <!-- right -->
                <div class="delay30 top right-main"></div>
                <div class="right-main"></div>
                <div class="delay23 top right-topside1"></div>
                <div class="right-topside1"></div>
                <div class="delay30 top right-topside2"></div>
                <div class="right-topside2"></div>
                <div class="delay30 top right-topside3"></div>
                <div class="right-topside3"></div>
                <div class="delay3 left right-topside3"></div>
                <div class="right-topside3"></div>
                <div class="delay30 top right-topside3__left"></div>
                <div class="right-topside3__left"></div>
                <div class="delay4 top right-topside4"></div>
                <div class="right-topside4"></div>
                <div class="delay17 top right-topside5"></div>
                <div class="right-topside5"></div>
                <div class="delay5 right right-topside5"></div>
                <div class="right-topside5"></div>
                <div class="delay12 left right-topside5"></div>
                <div class="right-topside5"></div>
                <!-- right side -->
                <div class="delay30 top right-rightside1"></div>
                <div class="delay30 top right-rightside2"></div>
                <!-- under side -->
                <div class="delay3 top right-underside1"></div>
                <div class="right-underside1"></div>
                <div class="delay5 top right-underside2"></div>
                <div class="right-underside2"></div>
                <div class="delay12 top right-underside3"></div>
                <div class="right-underside3"></div>
                <div class="delay29 left right-underside3"></div>
                <div class="right-underside3"></div>
                <div class="delay21 top right-underside4"></div>
                <div class="delay21 left right-underside4"></div>
                <div class="delay21 right right-underside4"></div>
                <div class="right-underside4"></div>
                <!-- left side -->
                <div class="delay30 top right-leftside1"></div>
                <div class="delay30 top right-leftside2"></div>
            </div>
            <div class="js-section-bg bg-section-04">
                <div class="main"></div>
                <div class="top topside1_big"></div>
                <div class="topside1_big"></div>
                <div class="top topside2"></div>
                <div class="top topside3"></div>
                <div class="right delay18 topside3"></div>
                <div class="delay7 top topside4"></div>
                <div class="topside4"></div>
                <div class="delay6 right topside4"></div>
                <!-- right side -->
                <div class="delay7 top rightside1"></div>
                <div class="delay17 top rightside2"></div>
                <div class="delay4 top rightside3"></div>
                <div class="delay21 top rightside4"></div>
                <div class="delay19 top rightside5"></div>
                <div class="right delay18 rightside5"></div>
                <div class="delay1 top rightside6"></div>
                <div class="delay10 top rightside7"></div>
                <div class="delay17 top rightside8"></div>
                <div class="delay29 top rightside9"></div>
                <div class="under delay9 rightside9"></div>
                <div class="top delay7 rightside10"></div>
                <!-- under side -->
                <div class="underside1"></div>
                <div class="delay7 left underside1"></div>
                <div class="underside1__right"></div>
                <div class="delay5 left underside1__right"></div>
                <div class="underside2"></div>
                <div class="delay2 left underside2"></div>
                <div class="underside2__right"></div>
                <div class="delay17 right underside2__right"></div>
                <div class="underside3"></div>
                <div class="delay21 left underside3"></div>
                <div class="underside3__right"></div>
                <div class="delay14 right underside3__right"></div>
                <div class="underside4"></div>
                <div class="delay17 left underside4"></div>
                <div class="underside4__right"></div>
                <div class="delay4 left underside4__right"></div>
                <div class="underside5"></div>
                <div class="delay8 right underside5"></div>
                <div class="underside5__right"></div>
                <div class="delay12 left underside5__right"></div>
                <div class="underside5__right"></div>
                <div class="delay17 right underside5__right"></div>

                <!-- left side -->
                <div class="delay2 top leftside1"></div>
                <div class="delay4 top leftside1__under"></div>
                <div class="delay30 top leftside2"></div>
                <div class="delay3 top leftside2__under"></div>
                <div class="under delay9 leftside2__under"></div>
                <div class="delay1 top leftside3"></div>
                <div class="delay12 top leftside4"></div>
                <div class="left delay9 leftside4"></div>
                <div class="delay6 top leftside5"></div>
                <div class="delay16 top leftside6"></div>
                <div class="left delay9 leftside6"></div>
            </div>
        </div>
        <section class="index__top index-section js-fullscreen-section initial">
            <div class="index__top__left">
                <div class="sp-line1">
                    <div class="index__top__left__line line-1">
                        <p class="line__block line__block__hito">人</p>
                        <p class="line__block line__block__to">と</p>
                        <p class="line__block line__block__system">システム</p>
                    </div>
                    <div class="index__top__left__line line-2">
                        <p class="line__block line__block__wo pc">を</p>
                        <p class="line__block line__block__tukuru pc">つくる会社</p>
                        <p class="line__block line__block__wotukuru sp kaisya">をつくる会社</p>
                    </div>
                </div>
                <div class="index__top__left__line line-3">
                    <p class="line__block line__block__jouho lh-20">情報インフラで社会を元気に</p>
                </div>

                <div class="index__top__left__line link">
                    <a class="line__block line__abotus link-gonext" href="#">
                        <span class="en">ABOUT US</span>
                        <span class="ja">私たちについて</span>
                        <ArrowRight />
                    </a>
                </div>
                <div class="index__top__left__line link">
                    <a class="line__block line__news link-goprev" href="#">
                        <ArrowLeft />
                        <span class="en">NEWS</span>
                        <span class="ja">お知らせ</span>
                    </a>
                </div>
            </div>
            <div class="index__top__right">
                <a class="service-link link-to-id" data-target_id="2" href="#">
                    <span class="en">SERVICE</span>
                    <span class="ja">サービス紹介</span>
                    <ArrowRight />
                </a>
                <div class="service-wrapper" id="service-wrapper">
                    <div class="service dummy-block dummy-block-top"></div>
                    <div class="service dummy-block dummy-block-top"></div>

                    <nuxt-link
                        v-for="service in top_page_data.top_services"
                        :key="service.id"
                        :class="service.top_service_class"
                        :to="service.top_service_url"
                        :style="[{ backgroundImage: `url(${service.thumbnail_image})` }, { backgroundPosition: '27% 50%' }]">
                        <p class="bg-white"></p>
                        <h3>{{ service.title }}</h3>
                        <div class="service__icon" v-html="service.service_icon"></div>
                        <div class="service__more">MORE</div>
		    </nuxt-link>
                    <div class="service dummy-block dummy-block--bottom dummy-block--bottom-right"></div>
                    <div class="service dummy-block dummy-block--bottom dummy-block--bottom-left"></div>
                    <div class="service dummy-block dummy-block--bottom dummy-block--bottom-right"></div>
                </div>
            </div>
        </section>
        <section class="index__aboutus index-section js-fullscreen-section" v-html="top_page_data.aboutus"></section>
        <section class="index__service index-section js-fullscreen-section">
            <h2>
                <span class="en">SERVICE</span>
                <span class="ja">サービス紹介</span>
            </h2>
            <div class="services services-list">
              <div class="services__service" v-for="services in top_page_data.services">
                    <div class="service__img">
                        <div class="service__img__bg"></div>
                        <div class="service__img__img">
                            <img v-bind:src="services.service_introduction_image" v-bind:alt="services.title" />
                        </div>
                        <h3>{{ services.title }}</h3>
                    </div>
                    <div class="service__desc">
                        <div class="service__desc__bg"></div>
                        <div class="service__desc__txt">{{ services.description }}</div>
                    </div>
                    <nuxt-link class="service__button" :to="services.service_introduction_url">
                        MORE
                        <ArrowRight />
                    </nuxt-link>
                </div>
            </div>

            <a class="link-aboutus inside-link inside-link-left link-goprev" href="#">
                <ArrowLeft />
                <span class="en">ABOUT US</span>
                <span class="ja">私たちについて</span>
            </a>
            <a class="link-news inside-link inside-link-right link-gonext" href="#">
                <span class="en">NEWS</span>
                <span class="ja">お知らせ</span>
                <ArrowRight />
            </a>
        </section>
        <section class="index__news index-section js-fullscreen-section">
            <h2>
                <span class="en">NEWS</span>
                <span class="ja">お知らせ</span>
            </h2>

            <div class="news-list">
                <div v-for="post in top_page_data.posts" class="news" :key="post.id">
                    <div class="news__info">
                        <div v-if="post.date" class="news__info__day">
                            {{ post.date }}
                        </div>
                        <div
                            v-if="post.terms"
                            class="news__info__tag"
                            v-html="(post.terms) || '#お知らせ'"
                        ></div>
                    </div>
                    <div class="news__title" v-html="post.title"></div>
                    <div class="news__text" v-html="str_trim(post.content)"></div>
                    <nuxt-link class="news__more" to="/news">MORE</nuxt-link>
                </div>
            </div>

            <nuxt-link to="/news" class="link-news-page">
                ニュース一覧へ
                <ArrowRight />
            </nuxt-link>

            <a class="link-service inside-link inside-link-left link-goprev" href="#">
                <ArrowLeft />
                <span class="en">SERVICE</span>
                <span class="ja">サービス紹介</span>
            </a>
            <a class="pc link-top inside-link inside-link-right link-gonext" href="#">
                <span class="en">TOP</span>
                <span class="ja">トップページ</span>
                <ArrowRight />
            </a>
            <div class="sp privacy-links">
                <nuxt-link to="/privacy">個人情報保護方針</nuxt-link>
                <a href="/pdf/margin.pdf" target="_blank"> マージン率の公開資料 </a>
            </div>
        </section>

        <div class="index-pager js-fullscreen-pager">
            <div class="index-pager__in">
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__bar"></div>
            </div>
        </div>
        <div class="js-fullscreen-bg"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import FullscreenSlider from '~/assets/js/fullscreen-slider/';
import Hover from '~/assets/js/hover/';
import { WpApi, TopPageWpApi } from '~/assets/js/wp-api/';
import Loading from '~/components/common/TheLoading';
import ArrowRight from '~/components/common/ArrowRight.vue';
import ArrowLeft from '~/components/common/ArrowLeft.vue';

export default Vue.extend({
    name: 'top',
    head() {
        return {
            titleTemplate: null,
        };
    },
    components: {
        Loading,
        ArrowRight,
        ArrowLeft,
    },
    data() {
        return {
            wd: process.browser ? window.innerWidth : 1200,
            block_size: 20, //px値
            is_loading: true, //loading
            browser: '',
        };
    },
    beforeDestroy() {
        this.toggleHtmlOverflow(true);
    },
    methods: {
        init() {
            this.toggleHtmlOverflow(false);
            this.browser = this.$ua.browser();

            // ワンブロックのサイズを算出
            this.block_size = this.wd * 0.0166667; //単位：px // 1.66667(vw)

            // サービスラッパー内をスクロールさせる
            const service_wrapper = document.getElementById('service-wrapper');
            if (this.$ua.isFromSmartphone()) {
                service_wrapper.scroll(service_wrapper.clientWidth / 4, 0);
            } else {
                service_wrapper.scrollTop = this.block_size * 11;
            }

            this.service_str_chg();
            this.fullscreen_slider();
            this.fixStyleForLegacyBrowser();

            setTimeout(() => {
                this.is_loading = false;
            }, 1500);
        },
        fixStyleForLegacyBrowser() {
            const legacyBrowsersRegex = /Edge|Internet Explorer/;
            if (legacyBrowsersRegex.test(this.browser)) {
                console.log(`this browser(${this.browser}) is legacy.`);
                // edgeの時の崩れ回避
                const service = document.querySelectorAll('.service-wrapper > .service');
                service.forEach((elm) => {
                    elm.style.width = '47.5%';
                });
            }
        },
        toggleHtmlOverflow(isOverflow) {
            const rootElement = document.querySelector('html');
            rootElement.style.overflow = isOverflow ? '' : 'hidden';
        },
        service_str_chg() {
            /** moreボタン要素 */
            const services = document.querySelectorAll('a.service');
            services.forEach((service) => {
                const button = service.getElementsByClassName('service__more')[0];
                const button_def_str = button.innerHTML;
                service.addEventListener('mouseover', (evt) => {
                    button.innerHTML = 'DETAIL';
                });
                service.addEventListener('mouseleave', (evt) => {
                    button.innerHTML = button_def_str;
                });
            });
        },
        fullscreen_slider() {
            const elmHover = document.querySelectorAll('.js-hover');
            elmHover.forEach((elm) => {
                new Hover(elm);
            });

            const fsSlider = new FullscreenSlider(
                document,
                {
                    x: window.innerWidth,
                    y: window.innerHeight,
                },
                this.$ua.isFromSmartphone()
            );

            window.addEventListener('resize', () => {
                fsSlider.reset();
                fsSlider.resize({
                    x: window.innerWidth,
                    y: window.innerHeight,
                });
            });
            fsSlider.start();

            const className_prevButton = 'link-goprev';
            const className_nextButton = 'link-gonext';
            const className_toidButton = 'link-to-id';
            const elm_PrevButton = document.querySelectorAll(`.${className_prevButton}`);
            const elm_NextButton = document.querySelectorAll(`.${className_nextButton}`);
            const elm_toidButton = document.querySelectorAll(`.${className_toidButton}`);

            elm_PrevButton.forEach((button) => {
                button.addEventListener('click', () => {
                    if (fsSlider.currentId === 0) {
                        fsSlider.goToTarget(fsSlider.maxId);
                        return;
                    }
                    fsSlider.goToPrev();
                });
            });
            elm_NextButton.forEach((button) => {
                button.addEventListener('click', () => {
                    if (fsSlider.currentId === fsSlider.maxId) {
                        fsSlider.goToTarget(0);
                        return;
                    }
                    fsSlider.goToNext();
                });
            });
            elm_toidButton.forEach((button) => {
                button.addEventListener('click', () => {
                    fsSlider.goToTarget(button.dataset.target_id || 0);
                });
            });

            // ロゴでtopに戻る
            document.getElementById('header__logo').addEventListener('click', () => {
                fsSlider.goToTarget(0);
            });
        },
        str_trim: function (txt) {
            /** 初期表示文字列の長さ */
            const display_str_length = this.$ua.isFromSmartphone() ? 30 : 70;
            // 30字以下であればそのまま返却
            if (txt.length <= display_str_length) return txt;
            // タグ存在確認用の正規表現
            const regax = /<(".*?"|'.*?'|[^'"])*?>/;
            /** タグの存在位置 */
            let num = txt.search(regax);

            if (num !== -1 && num < display_str_length) {
                // タグが存在且つタグが#{display_str_length}番目内に存在
                return txt.substr(0, num) + '...';
            } else {
                return txt.substr(0, display_str_length) + '...';
            }
        },
        change_date_format: function (str) {
            const date = new Date(str);
            return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        },
    },
    mounted() {
        this.init();
    },
    async asyncData(context) {

        const topPageWpApi = new TopPageWpApi({
            baseUrl: context.env.apiBaseUrl,
        });

        const top_page_data = topPageWpApi.getData();

        return top_page_data

    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_index.scss';
</style>
