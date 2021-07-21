<template>
    <div class="layout-error">
        <section class="error">
            <h1 v-if="error.statusCode === 404">404</h1>
            <h1 v-else>エラーが発生しました</h1>

            <div class="message" v-if="error.message">{{ error.message }}</div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    methods: {
        init() {
            const layout = document.querySelector('.layout-error');
            const footer = document.querySelector('.footer');

            layout.style.height = `calc(${window.innerHeight}px - ${footer.clientHeight}px)`;

            window.addEventListener('resize', () => {
                layout.style.height = `calc(${window.innerHeight}px - ${footer.clientHeight}px)`;
            });
        },
    },
    mounted() {
        if (process.env.NODE_ENV !== 'production') console.error(this.error);
        this.init();
    },
});
</script>

<style scoped lang="scss">
.layout-error {
    height: calc(100vh - #{get_vw(180)}); //180はフッターの高さ
    width: 100%;

    .error {
        padding: 15vh 0 0 10vw;
    }

    @media #{$media-sm} {
        height: calc(100vh - #{get_vw_sp(86)}); //86はフッターの高さ

        .error {
            padding: 15vh 0 0 10vw;
        }
    }
}
</style>
