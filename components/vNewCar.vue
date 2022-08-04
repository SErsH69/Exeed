<template>
	<section id="newCar">
		<div class="newCar-image"></div>
		<div class="newCar-content">
			<div class="newCar-content_subtitle">
				УЖЕ В НАЛИЧИИ!
			</div>
			<div class="newCar-content_title">Новый <br />exeed {{ car.name }}</div>
			<div class="newCar-content_text">
				Успейте получить максимально выгодные условия!
			</div>
			<el-button class="btn" @click.prevent="openPopup()"
				>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ<i class="chevrone-icon"></i
			></el-button>
		</div>
	</section>
</template>

<script>
export default {
	computed: {
		car() {
			return this.$store.getters["cars/car"]("txl-fl");
		},
		month() {
			const date = new Date();
			const month = date.getMonth();
			return this.$store.getters["info/months"](month);
		},
		months_2() {
			const date = new Date();
			const month = date.getMonth();
			return this.$store.getters["info/months_2"](month);
		}
	}
};
</script>

<style lang="sass">
#newCar
	display: flex
.newCar-image
	width: 50%
	background-image: url('@/assets/img/new-car.jpg')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
.newCar-content
	padding: 320px 140px
	width: 50%
	background-color: $dark
	color: #fff
.newCar-content_subtitle
	color: $graylight
	font-size: 20px
	text-transform: uppercase
	letter-spacing: 1px
	line-height: 1em
.newCar-content_title
	font-weight: 300
	font-size: 60px
	line-height: 1em
	text-transform: uppercase
	margin-top: 20px
.newCar-content_text
	margin: 40px 0
	color: $graylight
	font-size: 18px
	line-height: 1.4em
@include notebook
	.newCar-content_title
		font-size: 40px
	.newCar-content_subtitle
		font-size: 16px
	.newCar-content_text
		font-size: 14px
		margin: 30px 0
	.newCar-content
		padding: 212px 85px
@include lg-desktop
	#newCar
		flex-wrap: wrap
	.newCar-image
		width: 100%
		height: 40vh
		order: 1
	.newCar-content
		width: 100%
		padding: 40px
@include sm-tablets
	.newCar-content_subtitle
		font-size: 12px
	.newCar-content_title
		font-size: 30px
		margin-top: 10px
	.newCar-content
		padding: 40px 20px
	.newCar-content_text
		margin-top: 25px
		margin-bottom: 50px
	.newCar-image
		height: 100vw
</style>
