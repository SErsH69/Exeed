<template>
	<section
		id="txl2About"
		:style="`background-image: url(${require('@/assets/img/txl2/about.jpg')})`"
	>
		<div class="container">
			<div class="txl2About__wrapper">
				<div class="txl2About-title">новый. мощный. <br />спортивный.</div>
				<div class="txl2About-subtitle">
					Оцените взрывной темперамент EXEED TXL с двигателем 2.0 TGDI!
					Поклонники динамичного вождения оценят не только новый мощный мотор и
					статусные детали в дизайне, но повышенный уровень комфорта в салоне.
					Встречайте TXL 2.0 Sport Edition!
				</div>
				<!-- <callback-form
					class="txl2About-form"
					button="записаться"
					:input-name="true"
				/> -->
				<div class="txl2About__button">
					<el-button @click.prevent="getPrice">спецификации</el-button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// import callbackForm from "/components/forms/callbackForm";
export default {
	components: {
		// callbackForm
	},
	methods: {
		getPrice() {
			window.location.href = `${window.location.origin}/txl20s.pdf`;
		}
	}
};
</script>

<style lang="sass">
#txl2About
	background-size: cover
	background-repeat: no-repeat
	background-position: 40% center
	position: relative
	min-height: 100vh
	background-attachment: fixed
	display: flex
	align-self: center
	justify-content: flex-end
	&::after
		content: ''
		position: absolute
		left: 0
		top: 0
		right: 0
		bottom: 0
		background: linear-gradient(90deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
		z-index: 1
	&::before
		content: ''
		position: absolute
		right: 110px
		top: 110px
		width: 246px
		height: 90px
		z-index: 1
		background-image: url('@/assets/img/txl2/7.png')
		background-size: contain
		background-repeat: no-repeat
		background-position: center center
	.container
		position: relative
		z-index: 2
		display: block
		align-self: center
		justify-content: flex-end
.txl2About__button
	margin-top: 40px
.txl2About__wrapper
	max-width: 682px
	margin-left: auto
	width: 100%

.txl2About-subtitle
	color: #cacaca
	margin-top: 40px
	line-height: 1.7
.txl2About-title
	font-size: 60px
	line-height: 1em
	text-transform: uppercase
	color: #fff
	font-weight: 300
.txl2About-form
	margin-top: 60px
	display: flex
	flex-direction: column
	.el-form-item__content
		width: 100%
@include notebook
	.txl2About-title
		font-size: 40px
	.txl2About-form
		margin-top: 40px
		width: 375px
@include lg-desktop
	#txl2About
		padding: 80px 40px
@include sm-tablets
	#txl2About
		padding: 140px 20px
		text-align: center
		min-height: 510px
		display: block
		padding: 110px 0
		position: relative
		background-position: 20% center
		.container
			width: 100%
			position: static
		&::before
			content: ''
			position: absolute
			right: 50%
			transform: translateX(50%)
			top: 40px
			width: 123px
			height: 45px
			z-index: 2
			background-image: url('@/assets/img/txl2/7.png')
			background-size: contain
			background-repeat: no-repeat
			background-position: center center
	.txl2About-title
		font-size: 30px
		margin-left: auto
		margin-right: auto
		position: relative
		z-index: 2
	.txl2About-subtitle
		display: none
	.txl2About-form
		width: 280px
		margin-top: 30px
	.txl2About__button
		position: absolute
		bottom: 30px
		left: 50%
		transform: translateX(-50%)
		z-index: 2
</style>
