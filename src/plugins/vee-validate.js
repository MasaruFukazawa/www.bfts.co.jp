import Vue from 'vue';
import ja from 'vee-validate/dist/locale/ja';
import VeeValidate, { Validator } from 'vee-validate';

Vue.use(VeeValidate, {
    events: 'change', // イベントが発火するタイミングを変更 default: input
});

Validator.localize('ja', ja);
