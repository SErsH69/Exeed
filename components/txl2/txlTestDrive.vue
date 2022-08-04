<template>
	<section
		id="txlTestDrive"
		:style="
			`background-image: url(${require('@/assets/img/txl2/test-drive.jpg')})`
		"
	>
		<div class="container">
			<div class="txlTestDrive__wrapper">
				<div class="txlTestDrive-title">
					пройдите<br />
					тест-драйв
				</div>
				<div class="txlTestDrive-subtitle">
					<!-- Попробуйте новый cреднеразмерный внедорожник EXEED {{ car.name }} в
					деле! Запишитесь на пробную поездку в ближайший официальный дилерский
					центр и получите персональное предложение на покупку на особых
					условиях. -->
				</div>
				<!-- <callback-form
					class="txlTestDrive-form"
					button="записаться"
					:input-name="true"
				/> -->
				<div class="txlTestDrive__button">
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
	components: {
		// callbackForm
	}
};
</script>

<style lang="sass">
#txlTestDrive
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
.txlTestDrive__button
	margin-top: 40px
.txlTestDrive__wrapper
	max-width: 521px
	width: 100%
.txlTestDrive-subtitle
	color: #cacaca
	margin-top: 40px
	line-height: 1.7
.txlTestDrive-title
	font-size: 60px
	line-height: 1em
	text-transform: uppercase
	color: #fff
	font-weight: 300
.txlTestDrive-form
	margin-top: 60px
	display: flex
	flex-direction: column
	.el-form-item__content
		width: 100%
@include notebook
	.txlTestDrive-title
		font-size: 40px
	.txlTestDrive-form
		margin-top: 40px
		width: 375px
@include lg-desktop
	#txlTestDrive
		padding: 80px 40px
@include sm-tablets
	#txlTestDrive
		padding: 80px 20px 30px 20px
		min-height: 510px
		text-align: center
		display: block
		position: relative
		.container
			width: 100%
			position: static
	.txlTestDrive-title
		font-size: 30px
		margin-left: auto
		margin-right: auto
		position: relative
		z-index: 2
	.txlTestDrive-form
		width: 280px
		margin-top: 30px
	.txlTestDrive__button
		position: absolute
		z-index: 2
		bottom: 30px
		left: 50%
		transform: translateX(-50%)
</style>
