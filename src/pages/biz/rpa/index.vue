<template>
	<div class="page-rpa">
		<BgTop></BgTop>
		<div class="heading-en under-en-title">
			ＲＰＡ
			<div class="heading__img"></div>
		</div>

		<div class="rpa__desc">
			<h1 class="large-ja">
				<span class="ja">サービス内容</span>
			</h1>

			<div class="desc__txt">
				<div class="txt-bg"></div>
				<h3>
					RPAによる業務の自動化を提供
				</h3>
				<div class="desc__txt__txt">
					業務時間の改善にRPAを使ってみたいがRPAがどんなものかよくわからない、<br />
					調べてはみたが作るのが大変そう。<br />
					<br />
					そのようなお客様へBFTではRPAのためのサービスを提供しています。<br />
					各サービスの詳細について知りたい方は、サイト下の問い合わせからお気軽にご質問下さい。
				</div>
			</div>
		</div>

		<section class="sec-why">
			<div class="side-red"></div>
			<h2 class="sec-why__title">
				<span class="ja">サービスのご紹介</span>
			</h2>

			<div class="sec-why__in">
				<div class="sec-why__desc">
					<b>■簡易診断</b><br />
					RPAの導入には現在行っている業務の分析が必要不可欠です。<br />
					日々の業務を圧迫しているあの作業は自動化することでどれくらいの時間を削減することができるのか。<br />
					いつも残業ばかりしているあの社員はどれだけの作業を一人で抱えているのか。<br />
					このような問題を見える化し、どれだけの時間や工数を削減できるを、<br />
					弊社が一緒に業務分析しRPAの効果を無償で簡易診断致します。<br />
					<br />
					<b>■実践トレーニング</b><br />
					RPAを導入したはいいがロボットの作り方がわからない。<br />
					新しいロボットの作成や既存のロボットの改修ができる人材が限られている。<br />
					そのようなお客様向けに、実践を通して学ぶことができるトレーニングコースを用意しています。<br />
					<br />
					<b>■ロボット開発</b><br />
					自社内ではロボットを作ることができない、<br />
					または今そこまで人員を割けないなど、自分たちでロボット開発が出来ないケースもあると思われます。<br />
					そのような方々には弊社のエンジニアが訪問し、一緒にロボットの仕様検討や開発までをサポートします。
				</div>

				<div class="sec-why__img rpa"></div>
			</div>

			<div class="red-bg">
				<div class="red-bg__1"></div>
				<div class="red-bg__2"></div>
				<div class="red-bg__3"></div>
				<div class="red-bg__4"></div>
			</div>
		</section>

	</div>
</template>

<script>
import meta from '~/assets/mixins/meta';
import BgTop from '~/components/common/TheUnderRedBg_Top.vue';

export default {
	mixins: [meta],
	components: {
		BgTop
	},
	data: function() {
		return {
			meta: {
				title: 'ＲＰＡ',
				description:
					'RPA（ロボティック・プロセス・オートメーション）は日々の業務を効率化します。業務改善のための診断や効率化を図るためのシステムの提案、簡単に扱えるツールの紹介など、社内やプロジェクト内のご要望に応じたご支援が可能です。',
				url: 'rpa',
				titleTemplate: '｜強いエンジニアを育てる研修｜人とシステムをつくる会社｜BFT'
			}
		};
	},
	created: function() {}
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_rpa.scss';
</style>
