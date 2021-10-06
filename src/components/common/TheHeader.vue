<template>
    <header class="header" v-bind:class="$route.name">
        <nuxt-link to="/" class="header__logo" id="header__logo" @click.native="header_menu_close">
            <h1>
                <img src="~assets/img/common/logo/logo.svg" alt="BFT株式会社" />
            </h1>
        </nuxt-link>
        <div class="header__btn" @click="header_menu_open">
            <div class="header__btn__txt">MENU</div>
            <div class="header__btn__white-blocks">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <transition name="header" v-on:after-enter="btn_show">
            <section v-if="header_is_active" class="header__menu-wrapper">
                <transition name="header_btn" v-on:after-leave="header_menu_close">
                    <div
                        v-if="btn_is_show"
                        class="header__menu-btn header__close-btn"
                        @click="btn_show"
                    >
                        <p>CLOSE</p>
                        <p class="close-btn__white-blocks">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                </transition>
                <transition v-for="menu in header_menu_data" name="header_btn" v-on:after-leave="header_menu_close">
                    <nuxt-link
                        :to="menu.url"
                        class="header__menu-btn"
                        @click.native="btn_show"
                        v-if="btn_is_show"
                    >
                        {{ menu.title }}
                    </nuxt-link>
                </transition>
            </section>
        </transition>
    </header>
</template>

<script>
import axios from 'axios';
//import { HeaderMenuApi } from '~/assets/js/wp-api/';

export default {
    data: function () {
        return {
            header_is_active: false,
            btn_is_show: false,
            header_menu_data: [],
        };
    },
    methods: {
        // 初期化処理
        init: function () {
	    // header以外の要素をクリック時メニューを閉じる
            const contents = document.querySelectorAll('.contents , .footer');
            contents.forEach((content) => {
                content.addEventListener('click', (e) => {
                    if (!this.header_is_active) return;
                    this.btn_is_show = false;
                    this.header_is_active = false;
                });
            });
	},
        // ヘッダーメニュー開閉処理
        header_menu_open: function () {
            this.header_is_active = !this.header_is_active;
        },
        // ヘッダーメニュー開閉処理
        header_menu_close: function () {
            this.header_is_active = false;
        },
        // ヘッダーメニュー開閉処理
        btn_show: function () {
            this.btn_is_show = !this.btn_is_show;
        },
    },
    mounted: function () {
        this.init();
    },
   async fetch() {

        const { data: header_menu_data } = await axios.get(
            `${this.$nuxt.context.env.apiBaseUrl}/wp-json/custom/v0/header-menu`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        this.header_menu_data = header_menu_data;
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/components/_header.scss';
</style>
