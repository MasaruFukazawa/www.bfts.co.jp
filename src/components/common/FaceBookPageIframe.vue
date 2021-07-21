<template>
    <div>
        <iframe
            :src="`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${encodedPageId}&tabs=timeline&small_header=false&width=${currentWidth}px&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`"
            :width="currentWidth"
            :height="currentHeight"
            :style="`border: none; overflow: hidden;`"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { createScriptElement } from '~/utils/dom/createElement';
import { delay } from '~/utils/effects/delay';

export default Vue.extend({
    props: {
        pageId: {
            type: String,
            required: true,
        },
        width: {
            type: Object as PropType<{
                desktop: number;
                mobile: number;
            }>,
            required: true,
        },
        height: {
            type: Object as PropType<{
                desktop: number;
                mobile: number;
            }>,
            required: true,
        },
    },
    data() {
        return {
            desktopWidthRatio: 0,
            mobileWidthRatio: 0,
            desktopHeightRatio: 0,
            mobileHeightRatio: 0,
        };
    },
    async mounted() {
        this.createScriptElement();
        await delay(2000);
        const desktopBaseWidth = 1200;
        const mobileBaseWidth = 320;
        this.desktopWidthRatio = this.width.desktop / desktopBaseWidth;
        this.mobileWidthRatio = this.width.mobile / mobileBaseWidth;
        this.desktopHeightRatio = this.height.desktop / desktopBaseWidth;
        this.mobileHeightRatio = this.height.mobile / mobileBaseWidth;
    },
    computed: {
        encodedPageId(): string {
            return encodeURI(this.pageId);
        },
        isMobile(): boolean {
            return process.browser ? window.innerWidth < 768 : false;
        },
        currentWidth(): number {
            return process.browser
                ? Math.floor(
                      window.innerWidth *
                          (this.isMobile ? this.mobileWidthRatio : this.desktopWidthRatio)
                  )
                : 0;
        },
        currentHeight(): number {
            return process.browser
                ? Math.floor(
                      window.innerWidth *
                          (this.isMobile ? this.mobileHeightRatio : this.desktopHeightRatio)
                  )
                : 0;
        },
    },
    methods: {
        createScriptElement(): void {
            if (!document.getElementById('facebook-jssdk')) {
                createScriptElement({
                    elementId: 'facebook-jssdk',
                    elementSrc: 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v9.0',
                    elementNonce: 'WciEjkVv',
                });
            }
        },
    },
});
</script>
