// 下層ページでデフォルトのメタタグを上書きするUtil
// vue-metaの仕様にのっとり、上書きするものにはhid(ユニーク識別子)を付与する必要がある
export default {
    head() {
        // 定義されていれば私用し、無ければdefault値
        const titleTemplate =
            this.meta.titleTemplate || '｜社会インフラシステムの設計、基盤構築なら株式会社BFT';
        const title = this.meta.title || '人とシステムをつくる会社';
        const url = this.$route.path ? process.env.url + this.$route.path : '';
        const description =
            this.meta.description ||
            '株式会社BFTは、社会インフラといわれるような大規模な情報システム基盤環境を構築するプロジェクトに参画し、IT基盤技術を蓄積してまいりました。情報システム基盤の構築は、BFTがご支援します。';

        return {
            title: title + titleTemplate,
            meta: [
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:type', property: 'og:type', content: this.meta.type || 'website' },
                { hid: 'og:title', property: 'og:title', content: title + titleTemplate },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'og:url', property: 'og:url', content: url },
            ],
            link: [{ hid: 'canonical', rel: 'canonical', href: url }],
        };
    },
};
