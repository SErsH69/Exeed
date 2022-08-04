<template>
	<section class="lxTestDrive">
		<div class="lxTestDrive__content">
			<div class="lxTestDrive__title">
				пройдите тест-драйв
			</div>
			<div class="lxTestDrive__text">
				Попробуйте новый полноразмерный внедорожник EXEED LX в деле! Запишитесь
				на пробную поездку в ближайший официальный дилерский центр и получите
				персональное предложение на покупку на особых условиях.
			</div>
			<div class="lxTestDrive__button">
				<el-button @click.prevent="openPopup()">запись на тест-драйв</el-button>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="sass">
.lxTestDrive
	background-image: url('@/assets/img/lx/lx__testdrive.jpg')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	position: relative
	background-attachment: fixed
	min-height: 100vh
	z-index: 3
	&:after
		content: ''
		position: absolute
		left: 0
		top: 0
		bottom: 0
		right: 0
		background: linear-gradient(180deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
		z-index: 1
	&__content
		position: absolute
		top: 50%
		transform: translateY(-50%)
		left: 14%
		color: #fff
		z-index: 3
		max-width: 540px
		width: 100%
	&__title
		font-size: 60px
		line-height: 1
		text-transform: uppercase
		font-weight: 300
	&__text
		margin-top: 60px
		font-size: 18px
		line-height: 32px
	&__button
		margin-top: 60px
@include md-desktop
	.lxTestDrive
		padding: 30px 0!important
		min-height: auto!important
		height: auto
		&__content
			left: 0
			top: 0
			transform: none
			position: relative
			padding: 0px 15px
		&__title
			font-size: 30px
			line-height: 1
</style>
