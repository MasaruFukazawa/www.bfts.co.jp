<template>
    <section class="sns">
        <header class="sns__header">
            <h2 class="sns__title">SNS</h2>
        </header>
        <div class="sns__body">
            <div class="sns__column">
                <p class="sns__column-title">Facebook</p>
                <div class="sns__facebook">
                    <FaceBookPageIframe
                        :pageId="facebookPageId"
                        :width="{ desktop: 450, mobile: 300 }"
                        :height="{ desktop: 455, mobile: 400 }"
                    />
                </div>
            </div>
            <div class="sns__column">
                <p class="sns__column-title">Instagram</p>
                <div class="sns__instagram">
                    <iframe
                        src="https://cdn.lightwidget.com/widgets/4b06bfd3b87359b0a7aeec8123bdf7d9.html"
                        scrolling="no"
                        allowtransparency="true"
                        class="lightwidget-widget"
                        style="width: 100%; border: 0; overflow: hidden"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import FaceBookPageIframe from '~/components/common/FaceBookPageIframe.vue';
import { createScriptElement } from '~/utils/dom/createElement';

export default Vue.extend({
    components: {
        FaceBookPageIframe,
    },
    data() {
        return {
            facebookPageId: 'ＢＦＴ-名古屋支店-112767063975711',
        };
    },
    mounted() {
        this.createScriptElement();
    },
    methods: {
        createScriptElement(): void {
            if (!document.getElementById('lightwidget-sdk')) {
                createScriptElement({
                    elementId: 'lightwidget-sdk',
                    elementSrc: 'https://cdn.lightwidget.com/widgets/lightwidget.js',
                });
            }
        },
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/media/_sns.scss';
</style>
