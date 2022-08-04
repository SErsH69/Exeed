<template>
	<section
		id="carMain"
		class="carMain"
		v-if="!car.hideTitle"
		:style="
			`background-image:url('${require('@/assets/img/' + car.id + '-bg.jpg')}')`
		"
	>
		<div class="carMain__title">
			<p>BORN FOR MORE</p>
			<h1>exeed {{ car.name }}</h1>
			<p class="carMain__price">
				С ВЫГОДОЙ ДО {{ (+car.benefit).toLocaleString() }} РУБ.
			</p>
		</div>
		<div class="carMain__button">
			<el-button class="light-btn" @click.prevent="openPopup()"
				>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</el-button
			>
		</div>
	</section>
	<section id="carMain__image" @click.prevent="openPopup()" v-else>
		<img
			:src="require('@/assets/img/' + car.id + '-bg.jpg')"
			alt=""
			class="img-responsive"
		/>
	</section>
</template>

<script>
export default {
	props: ["car"]
};
</script>

<style lang="sass">
.carMain
	margin-top: 78px
	height: calc(100vh - 78px)
	position: relative
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	&__image
		margin-top: 78px
	&__price
		color: #fff
		font-size: 18px
		letter-spacing: 2px
	&__title
		position: relative
		padding: 40px 0
		color: #fff
		text-align: center
		h1
			position: relative
			z-index: 2
			margin: 10px 0
			color: #fff
		p
			position: relative
			font-size: 30px
			letter-spacing: 2px
			text-transform: uppercase
			color: #fff
			z-index: 2
		&::after
			content: ''
			background: linear-gradient(180deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
			position: absolute
			left: 0
			top: 0
			right: 0
			bottom: 0
			opacity: .8
	&__button
		position: absolute
		bottom: 60px
		left: 0
		width: 100%
		text-align: center
@include sm-tablets
	.carMain__title p
		font-size: 16px
	#carMain
		background-position: 30% center
	#carMain__image
		margin-top: 109px
</style>
