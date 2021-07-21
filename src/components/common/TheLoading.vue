<template>
    <div
        id="loading-container"
        class="comp-loading"
        :class="{ started: is_anim_start }"
        v-if="is_loading"
    >
        <canvas id="canvas"></canvas>
        <div id="dom_overlay_container"></div>
    </div>
</template>

<script>
import Loading from '~/assets/js/loading';

export default {
    loading: false,
    data: function () {
        return {
            is_loading: true,
            is_anim_start: false, // ローディング開始後の背景透過用
        };
    },
    methods: {
        // 初期化処理
        init: function () {
            let loading = new Loading();
            loading.init();

            setTimeout(() => {
                // 開始1秒後に背景透過
                this.is_anim_start = true;
            }, 1000);

            loading.elm.addEventListener('end-anim', (evt) => {
                this.is_loading = false;
            });
        },
    },
    mounted: function () {
        this.init();
    },
};
</script>

<style scoped lang="scss">
.comp-loading {
    z-index: $z-header * 2222;
    position: absolute;
    margin: auto;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    height: 100%;

    &.started {
        background-color: transparent;
    }

    #canvas {
        position: absolute;
        display: block;
        // background-color: rgba(255, 255, 255, 1);
        width: 100%;
        height: 100%;
    }

    #dom_overlay_container {
        pointer-events: none;
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        display: block;
    }
}
</style>
