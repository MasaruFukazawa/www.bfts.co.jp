import type { NuxtConfig } from '@nuxt/types';

import axios from 'axios';
import Sass from 'sass';
import Fiber from 'fibers';

// 環境変数をデプロイ環境に合わせて設定する。cross-env使用。package.jsonに記載のコマンドと連携してる。
/** cross_envの値 (無ければdev) */
const environment = process.env.NODE_ENV || 'development';
const isDev = environment === 'development';
/** 環境変数 */
const envSet = require(`./env/env.${environment}.js`);

// meta
const title = '人とシステムをつくる会社｜株式会社BFT';
const description =
    '株式会社BFTは、社会インフラといわれるような大規模な情報システム基盤環境を構築するプロジェクトに参画し、IT基盤技術を蓄積してまいりました。情報システム基盤の構築は、BFTがご支援します。';

const config: NuxtConfig = {
    target: 'static',
    ssr: true,
    env: envSet,
    srcDir: 'src/',

    /**
     * 生成時のoption
     */
    generate: {
        fallback: true,
        routes (callback) {

            Promise.all([
                axios.get(`${envSet.apiBaseUrl}/wp-json/custom/v0/pages`)
            ])
            .then (axios.spread( ( pages ) => {

                const route_pages = pages.data.map((page: any) => {

                    return {
                        route : `${page.url}`,
                        payload : {
                            page_data : page,
                        }
                    }

                })

		callback(null, route_pages)
            }))
        }
    },

    render: {
        crossorigin: 'use-credentials',
    },

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'ja',
            prefix: 'og: http://ogp.me/ns#',
        },
        title: title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: description },
            // @ts-ignore
            { hid: 'X-UA-Compatible', 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
            { hid: 'og:url', property: 'og:url', content: envSet.url },
            { hid: 'og:image', property: 'og:image', content: envSet.url + '/img/ogp.png' },
            { hid: 'og:site_name', property: 'og:site_name', content: title },
            { hid: 'og:title', property: 'og:title', content: title },
            { hid: 'og:description', property: 'og:description', content: description },
            { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
            {
                hid: 'google-site-verification',
                name: 'google-site-verification',
                content: 'YZ-Dh_aT63Y6BxKfD5oa1j6eVNaPe0qF_mij38VM-cE',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { hid: 'canonical', rel: 'canonical', href: envSet.url },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Noto+Sans+JP:500,900&subset=japanese&display=swap',
            },
        ],
        script: [{ rel: 'preload', src: '//code.createjs.com/1.0.0/createjs.min.js' }],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#F03329', continuous: true },

    /*
     ** Global CSS
     */
    css: ['ress', '~/assets/scss/main.scss'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/polyfills', mode: 'client' },
        { src: '~/plugins/vee-validate.js', mode: 'all' },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: false,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: ['@nuxt/typescript-build'],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        'nuxt-user-agent',
        '@nuxtjs/google-analytics',
        '@nuxtjs/sitemap',
    ],

    googleAnalytics: {
        id: 'UA-141392084-1',
        debug: {
            enabled: false, // default value : false
            trace: false, // default value : false
            sendHitTask: true, // default value : true
        },
    },

    styleResources: {
        // 各Vueコンポーネントに共通で読み込むものを指定
        scss: [
            '~/assets/scss/mixins/_fluid_style.scss',
            '~/assets/scss/base/_variables.scss',
            '~/assets/scss/mixins/_mixin_mq.scss',
        ],
    },

    sitemap: {
        hostname: envSet.url,
        gzip: true,
        cacheTime: 1000 * 60 * 15, // 15minutes
    },

    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        filenames: {
            app: () => (!isDev ? '[name].[chunkhash:7].js' : '[name].js'),
            chunk: () => (!isDev ? '[name].[chunkhash:7].js' : '[name].js'),
            css: () => (!isDev ? '[name].[chunkhash:7].js' : '[name].js'),
            img: () => (!isDev ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
            font: () => (!isDev ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
            video: () => (!isDev ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, { isClient }) {
            if (isClient) {
                config.devtool = !isDev ? false : 'source-map';
            }
        },
        loaders: {
            scss: {
                implementation: Sass,
                sassOptions: {
                    fiber: Fiber,
                },
            },
        },
        babel: {
            presets({ isServer }) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            useBuiltIns: 'usage',
                            corejs: { version: '3.8' },
                        },
                    ],
                ];
            },
        },
        terser: {
            terserOptions: {
                compress: { drop_console: false },
            },
        },

        postcss: {
            plugins: {
                'postcss-preset-env': {
                    autoprefixer: {
                        grid: 'autoplace', // gridをIE11に対応
                        cascade: false,
                    },
                },
            },
        },
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
            },
        },
    },
};

export default config;
