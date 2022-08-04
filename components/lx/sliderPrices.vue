<template>
	<section class="lxPrices">
		<div class="container">
			<div class="lxPrices__item">
				<div class="lxPrices__name">exeed Lx luxury</div>
				<div class="lxPrices__image">
					<img
						:src="require('@/assets/img/lx/lx-luxury.png')"
						alt="exeed Lx luxury"
					/>
				</div>
				<div class="lxPrices__price">
					от 2 939 900 ₽*
				</div>
			</div>
			<div class="lxPrices__item">
				<div class="lxPrices__name">exeed Lx Prestige</div>
				<div class="lxPrices__image">
					<img
						:src="require('@/assets/img/lx/lx-prestige.png')"
						alt="exeed Lx Prestige"
					/>
				</div>
				<div class="lxPrices__price">от 3 239 900 ₽*</div>
			</div>

			<div class="lxPrices__buttons">
				<el-button class="accent-btn" @click.prevent="getPrice"
					>Узнать больше</el-button
				>
				<!-- <el-button @click.prevent="openPopup()">exeed finance </el-button> -->
			</div>
			<div class="lxPrices__disclaimer">
				* Максимальная цена перепродажи с учетом маркетинговых акций. Не оферта.
				Подробности уточняйте у официальных дилеров ЭКСИД.
			</div>
		</div>
	</section>
</template>

<script>
export default {
	methods: {
		getPrice() {
			window.location.href = `${window.location.origin}/lx-price-list.pdf`;
		}
	}
};
</script>

<style lang="sass">
.lxPrices
	background-color: #fff
	padding-top: 151px!important
	padding-bottom: 85px!important
	position: relative
	z-index: 3
	min-height: auto!important
	height: auto!important
	&__item
		width: 50%
	&__name
		text-transform: uppercase
		font-size: 50px
		font-weight: 300
		line-height: 1
		text-align: center
	&__image
		margin-top: 35px
		img
			display: block
			height: 330px
			max-width: 100%
			margin-left: auto
			margin-right: auto
	&__price
		margin-top: 35px
		font-weight: 600
		font-size: 40px
		line-height: 50px
		text-transform: uppercase
		text-align: center
		color: $accent
	&__buttons
		width: 100%
		margin-top: 70px
		text-align: center
		.accent-btn
			background-color: $dark
			color: #fff
			border: none
	&__disclaimer
		width: 100%
		margin-top: 60px
		text-align: center
		font-size: 12px
		line-height: 18px
		color: #7D8082
@include lg-desktop
	.lxPrices
		&__image
			img
				height: 210px
				max-width: 100%
@include md-desktop
	.lxPrices
		padding: 0 0 40px 0!important
		.container
			display: block
		&__item
			width: 100%
			max-width: 300px
			margin-left: auto
			margin-right: auto
			padding: 40px 0
			border-top: 1px solid #DEDEDE
		&__name
			font-size: 25px
			line-height: 30px
		&__image
			margin-top: 30px
			img
				height: auto
		&__price
			font-size: 18px
			line-height: 20px
			margin-top: 30px
		&__buttons
			margin-top: 0
		&__disclaimer
			font-size: 10px
			line-height: 15px
			margin-top: 20px
</style>
