<template>
	<section
		id="testDrive"
		:style="
			`background-image: url(${require('@/assets/img/testdrive-bg-' +
				car.id +
				'.jpg')})`
		"
	>
		<div class="container">
			<div class="testDrive__wrapper">
				<div class="testDrive-title">
					пройдите<br />
					тест-драйв
				</div>
				<div class="testDrive-subtitle">
					Попробуйте новый cреднеразмерный внедорожник EXEED {{ car.name }} в
					деле! Запишитесь на пробную поездку в ближайший официальный дилерский
					центр и получите персональное предложение на покупку на особых
					условиях.
				</div>
				<!-- <callback-form
					class="testDrive-form"
					button="записаться"
					:input-name="true"
				/> -->
				<div class="testDrive__button">
					<el-button @click.prevent="openPopup()"
						>ЗАПИСЬ НА ТЕСТ-ДРАЙВ</el-button
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// import callbackForm from "/components/forms/callbackForm";
export default {
	props: ["car"],
	components: {
		// callbackForm
	}
};
</script>

<style lang="sass">
#testDrive
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	position: relative
	padding: 275px 120px 305px 120px
	background-attachment: fixed
	&::after
		content: ''
		position: absolute
		left: 0
		top: 0
		right: 0
		bottom: 0
		background: linear-gradient(90deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
		z-index: 1
	.container
		position: relative
		z-index: 2
		display: block
.testDrive__button
	margin-top: 40px
.testDrive__wrapper
	max-width: 521px
	width: 100%
.testDrive-subtitle
	color: #cacaca
	margin-top: 40px
	line-height: 1.7
.testDrive-title
	font-size: 60px
	line-height: 1em
	text-transform: uppercase
	color: #fff
	font-weight: 300
.testDrive-form
	margin-top: 60px
	display: flex
	flex-direction: column
	.el-form-item__content
		width: 100%
@include notebook
	.testDrive-title
		font-size: 40px
	.testDrive-form
		margin-top: 40px
		width: 375px
@include lg-desktop
	#testDrive
		padding: 80px 40px
@include sm-tablets
	#testDrive
		padding: 140px 20px
		text-align: center
		.container
			width: 100%
	.testDrive-title
		font-size: 30px
		margin-left: auto
		margin-right: auto
	.testDrive-form
		width: 280px
		margin-top: 30px
</style>
