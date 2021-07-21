<template>
    <div class="page-con">
        <BgTop />
        <div class="heading-en under-en-title">Contact</div>

        <h1 class="con__title">
            <span class="ja">お問い合わせフォーム</span>
        </h1>

        <div class="chk-msg" v-show="check">
            <!-- 確認ボタン押した後の確認メッセージ -->
            下記の内容で承ります。<br />
            入力内容に誤りがないか再度ご確認ください。<br />
        </div>

        <div class="comp-msg" v-show="complete">
            <!-- 送信後の完了メッセージ -->
            この度はお問い合わせ頂きありがとうございます。<br />
            内容確認後、担当者より折り返し連絡いたします。
        </div>

        <form
            class="form"
            id="contact-form"
            :class="{ 'is-checked': check }"
            @submit.prevent="submit"
            v-show="!complete"
        >
            <dl class="form-field">
                <dt class="form-field__name">貴社名</dt>
                <dd class="form-field__input">
                    <input
                        class="form-input"
                        type="text"
                        name="company"
                        id="form-company"
                        placeholder="company"
                    />
                </dd>
            </dl>
            <dl class="form-field required">
                <dt class="form-field__name">お名前</dt>
                <dd class="form-field__input">
                    <input
                        class="form-input"
                        v-validate="'required'"
                        data-vv-as="お名前"
                        type="text"
                        name="name"
                        id="form-name"
                        placeholder="name"
                    />
                    <p class="validate-error" v-if="errors.first('name')">
                        {{ errors.first('name') }}
                    </p>
                </dd>
            </dl>
            <dl class="form-field required">
                <dt class="form-field__name">メールアドレス</dt>
                <dd class="form-field__input">
                    <input
                        class="form-input"
                        v-validate="'required|email'"
                        data-vv-as="メールアドレス"
                        type="email"
                        inputmode="email"
                        name="email"
                        id="form-email"
                        placeholder="aaa@bbb.jp"
                    />
                    <p class="validate-error" v-if="errors.first('email')">
                        {{ errors.first('email') }}
                    </p>
                </dd>
            </dl>
            <dl class="form-field required">
                <dt class="form-field__name">電話番号</dt>
                <dd class="form-field__input">
                    <input
                        class="form-input"
                        v-validate="{ required: true, regex: /^[0-9]+$/ }"
                        data-vv-as="電話番号"
                        type="tel"
                        inputmode="tel"
                        name="tel"
                        id="form-tel"
                        placeholder="1234567890"
                    />
                    <p class="validate-error" v-if="errors.first('tel')">
                        {{ errors.first('tel') }}
                    </p>
                </dd>
            </dl>
            <dl class="form-field required form-content">
                <dt class="form-field__name">お問い合わせ</dt>
                <dd class="form-field__input">
                    <textarea
                        class="form-input"
                        v-validate="'required'"
                        data-vv-as="お問い合わせ内容"
                        name="content"
                        id="form-content"
                        placeholder=""
                    ></textarea>
                    <p class="validate-error" v-if="errors.first('content')">
                        {{ errors.first('content') }}
                    </p>
                </dd>
            </dl>

            <section class="form-confirm">
                <div class="form-confirm__policy" v-show="!check">
                    <input
                        class="agree-input form-input"
                        v-model="agree"
                        type="checkbox"
                        name="agree-policy"
                        id="agree"
                    />
                    <label class="agree-label" for="agree">
                        <nuxt-link class="policy-link" to="/privacy">
                            「個人情報保護方針」
                        </nuxt-link>
                        の内容に同意する
                    </label>
                    <p class="notice">※ ご同意いただけない場合は送信ができません。</p>
                </div>
                <div
                    class="form-confirm__chk-btn"
                    :class="{ 'is-checked': agree }"
                    @click="validation_check()"
                    v-show="!check"
                >
                    入力内容確認画面へ
                </div>

                <div class="form-confirm__checked" v-show="check">
                    <input type="button" value="" id="goback" @click="goback()" />
                    <label for="goback" class="form-confirm__checked__goback"> 戻る </label>
                    <input type="submit" value="" id="submit" />
                    <label for="submit" class="form-confirm__checked__submit"> 送信する </label>
                </div>
            </section>
        </form>
    </div>
</template>

<script>
import Vue from 'vue';
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';

export default Vue.extend({
    mixins: [meta],
    components: {
        BgTop,
    },
    head() {
        return {
            htmlAttrs: {
                class: 'contact',
            },
        };
    },
    data() {
        return {
            meta: {
                title: 'お問い合わせ',
                description:
                    '株式会社BFTは、大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してまいりました。そうした経験を経て、自社IT技術を基盤構築し、技術を蓄積。お問い合わせや確認したい内容等ございましたらこちらからお願いします。',
                url: 'contact',
            },
            agree: '', // 個人情報保護方針の同意
            check: false, // バリデーション結果
            complete: false, // 送信完了フラグ
        };
    },
    methods: {
        init() {
            //
        },
        // 確認内容確認ボタンを押したとき
        validation_check() {
            this.$validator.validate().then((result) => {
                // 確認フラグを更新
                this.check = result;
                // バリデーションが全てOK
                if (result) {
                    // topにスクロールする
                    scrollTo(0, 0);
                    // readonlyにする
                    const inputs = document.querySelectorAll('.form-input');
                    inputs.forEach((input) => {
                        input.setAttribute('readonly', 'readonly');
                    });
                } else {
                    // バリデーションNGの場合
                    scrollTo(0, 0);
                }
            });
        },
        // 戻って修正する
        goback() {
            this.check = false;
            // topにスクロールする
            scrollTo(0, 0);
            // readonlyにする
            const inputs = document.querySelectorAll('.form-input');
            inputs.forEach((input) => {
                input.removeAttribute('readonly');
            });
        },
        // 送信処理
        submit() {
            // チェックが完了していない場合（enterで進んだ場合）
            if (!this.check) return;
            /** フォームデータ */
            let data = new FormData();
            /** フォーム項目リスト */
            const entry_list = [
                { form_id: 'entry.25142193', elm_id: 'form-company' }, //貴社名
                { form_id: 'entry.1316543584', elm_id: 'form-name' }, //お名前
                { form_id: 'entry.647603526', elm_id: 'form-email' }, //メールアドレス
                { form_id: 'entry.3675648', elm_id: 'form-tel' }, //電話番号
                { form_id: 'entry.164097602', elm_id: 'form-content' }, //お問い合わせ内容
            ];
            entry_list.forEach((entry) => {
                data.append(entry.form_id, document.getElementById(entry.elm_id).value);
            });

            /** データの送信先 */
            const url =
                'https://docs.google.com/forms/u/4/d/e/1FAIpQLSfXjmdbe1ECDJxvsx12rJQMVheo2sDfY3MlbaI98fAk3vA6oQ/formResponse';
            /** リクエストの初期化オプション*/
            const init = {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                body: data,
            };

            // 非同期通信の処理
            fetch(url, init)
                .catch((Error) => {
                    console.log(Error);
                })
                .then((response) => {
                    // 成功
                    if (process.env.NODE_ENV !== 'production') {
                        response.json().then((res) => {
                            console.log(JSON.stringify(res));
                        });
                    }
                    scrollTo(0, 0);
                    this.check = false;
                    this.complete = true;
                });
        },
    },
    mounted() {
        this.init();
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_contact.scss';
</style>

<style>
html.contact {
    scroll-behavior: smooth;
}
</style>
