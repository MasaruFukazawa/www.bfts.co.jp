<template>
  <div class="page-privacy">
    <BgTop></BgTop>
    <div class="heading-en under-en-title">Social Media policy</div>

    <div class="privacy__desc">
      <h1 class="large-ja">
        <span class="ja">ソーシャルメディアポリシー</span>
      </h1>
    </div>

    <div class="privacy__txt">

        <h3>基本方針</h3>
        株式会社ＢＦＴで働く役員および従業員（以下、当社）は以下の目的をもってソーシャルメディアを活用します。<br data-v-1995df94=""><br data-v-1995df94="">

                <ul style="padding-left: 20px;">
         <li>ＩＴ技術に関する知識を公開し広く社会に還元する</li>
         <li>エンジニアとして働くことのおもしろさ、広がる世界観を伝える</li>
         <li>インフラエンジニア、開発エンジニアとして働く社員の想いを発信することでブランドを創っていく</li>
        </ul>
        <br data-v-1995df94="">
        
        <h3>機密情報の保護</h3>
        個人情報はむやみに収集せず、必要な場合はその用途を限定し、記載した用途以外には使用しません。
        ソーシャルメディア・広報での活動において知り得る個人情報はアクセス制限された環境で保存し、弊社規定の「<a data-v-229fe33b="" href="https://www.bfts.co.jp/privacy" style="color: blue;">個人情報保護方針</a>」に従います。<br data-v-1995df94=""><br data-v-1995df94="">

        <h3> 第三者の権利の保護</h3>
        投稿内容（テキスト、音楽、音声、写真、ビデオ、デザイン等）はそれぞれの著作権、商標権またはその他の所有権および法律によって保護されていることを確認し第三者の権利を尊重します。<br data-v-1995df94=""><br data-v-1995df94="">
       
        <h3>運営方針</h3>
        当社はソーシャルメディアを活用する上で以下を禁止事項とします。<br data-v-1995df94=""><br data-v-1995df94="">
        <ul style="padding-left: 20px;">
        <li>営業や採用目的でダイレクトメッセージを送ること</li>
        <li>特定の人物・企業等に対し誹謗中傷となる表現や発言をすること</li>
        <li>真偽を確認できない情報を発信すること</li>
        <li>第三者の権利・利益を侵害もしくはそのおそれのある内容を有する表現や発言をすること</li>
        </ul>
        <br data-v-1995df94="">
        
        <h3>免責事項</h3>
         <ul style="padding-left: 20px;">
         <li>いただいたすべてのコメント、DM（ダイレクトメッセージ）等へ返信をお約束はできかねますことをご了承ください。</li>
         <li>フォローいただいた方を必ずフォローするわけではありません。またフォローしていることはそのアカウントの発言内容を支持していることを意味するわけではありません。</li>
         <li>ポリシーに反する場合はいただいたコメントを削除する場合があります。</li>
         <li>公式アカウントの運営は予告なく終了、削除される場合があります。</li>
         <li>弊社の運用するアカウントを介してつながったユーザ間、もしくはユーザと第三者間のトラブルによって生じた損害に対する一切の責任を負いません。</li>
         <li>弊社が投稿した内容について再利用・引用は許可なく実施いただけますが、元々の内容や意図に反した利用をされた場合は削除を依頼させていただくこともあります。</li>
         <li>公式アカウントで発信する情報は、必ずしも弊社の公式見解を表すものではありません。また発信する情報が正確であること、不整合がないことを保証しておりませんので、あらかじめご了承ください。</li>
        </ul>
        <br data-v-1995df94="">

      <p class="right">2021年5月1日制定</p>
      <p class="right">株式会社ＢＦＴ 代表取締役　小林 道寛</p>
    </div>
</template>

<script>
import meta from "~/assets/mixins/meta";
import BgTop from "~/components/common/TheUnderRedBg_Top.vue";

export default {
  mixins: [meta],
  components: {
    BgTop,
  },
  data: function () {
    return {
      meta: {
        title: "ソーシャルメディアポリシー",
        description:
          "大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた株式会社BFTのソーシャルメディアポリシーを掲載。",
        url: "policy",
        titleTemplate: "｜人とシステムをつくる会社｜株式会社BFT",
      },
    };
  },
  created: function () {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/page/_privacy.scss";
</style>

