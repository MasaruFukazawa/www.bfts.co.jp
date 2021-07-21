<template>
    <div class="l-default">
        <TheHeader />

        <TheBackground />

        <main class="contents">
            <Nuxt />
        </main>

        <TheFooter />
    </div>
</template>

<script>
import Vue from 'vue';
import TheHeader from '~/components/common/TheHeader.vue';
import TheFooter from '~/components/common/TheFooter.vue';
import TheBackground from '~/components/common/TheBackground.vue';

export default Vue.extend({
    components: {
        TheHeader,
        TheFooter,
        TheBackground,
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/layouts/_default';
</style>
