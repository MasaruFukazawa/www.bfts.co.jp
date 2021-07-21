<template>
    <section class="sns">
        <ul class="sns__list">
            <li class="sns__item">
                <a
                    class="sns__link"
                    href="https://www.facebook.com/%EF%BC%A2%EF%BC%A6%EF%BC%B4-%E5%90%8D%E5%8F%A4%E5%B1%8B%E6%94%AF%E5%BA%97-112767063975711/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <figure class="sns__icon">
                        <img
                            src="~/assets/img/common/icon/facebook.svg"
                            alt="Facebook"
                            width="40"
                            height="40"
                        />
                    </figure>
                </a>
            </li>
            <li class="sns__item">
                <a
                    class="sns__link"
                    href="https://www.instagram.com/bft.nagoya.kouhou"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <figure class="sns__icon">
                        <img
                            src="~/assets/img/common/icon/instagram.svg"
                            alt="Instagram"
                            width="40"
                            height="40"
                        />
                    </figure>
                </a>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/_sns-list.scss';
</style>
