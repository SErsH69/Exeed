<template>
	<main id="main" class="main">
		<p class="main__subtitle">
			В ЧЕСТЬ ОТКРЫТИЯ НОВОГО САЛОНА
		</p>
		<h1>
			ВЫГОДА ДО 990 400 РУБ.* <br />
			НА ВСЕ АВТОМОБИЛИ EXEED!
		</h1>
		<div class="main__scroll" @click.prevent="scrollTo('cars')">
			<svg
				width="18"
				height="10"
				viewBox="0 0 18 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M-2.7867e-08 0.637522C-2.04358e-08 0.467516 0.058651 0.315725 0.175953 0.182149C0.293255 0.0607157 0.434017 -7.67833e-07 0.59824 -7.60655e-07C0.762463 -7.53477e-07 0.903225 0.0607157 1.02053 0.182149L9.06158 8.50637L16.9619 0.309654C17.044 0.236794 17.1378 0.182149 17.2434 0.145719C17.349 0.121433 17.4487 0.121433 17.5425 0.145719C17.6481 0.182149 17.7419 0.236794 17.824 0.309654C17.9413 0.431087 18 0.576806 18 0.746812C18 0.928962 17.9413 1.08075 17.824 1.20219L9.48387 9.81785C9.42522 9.87857 9.35484 9.92107 9.27273 9.94535C9.20235 9.98178 9.1261 10 9.04399 10C8.97361 10 8.90323 9.98178 8.83284 9.94535C8.76246 9.92107 8.69795 9.87857 8.6393 9.81785L0.175953 1.07468C0.117302 1.01396 0.0762462 0.941104 0.0527858 0.856101C0.0175953 0.783241 -3.10518e-08 0.710382 -2.7867e-08 0.637522Z"
				/>
			</svg>
		</div>
		<!-- <div class="main__button">
			<el-button class="light-btn" @click.prevent="openPopup()"
				>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</el-button
			>
		</div> -->
	</main>
</template>

<script>
export default {
	computed: {
		month() {
			var currentDate = new Date();
			return this.$store.getters["info/months_3"](currentDate.getMonth());
		}
	},
	methods: {
		scrollTo(link) {
			const top = document.getElementById(link);
			const header = document.querySelector("header");
			window.scrollTo({
				top: top.offsetTop - header.offsetHeight,
				behavior: "smooth"
			});
			document.activeElement.blur();
		}
	}
};
</script>

<style lang="sass">
.main
	text-align: center
	padding-top: 30px
	margin-top: 78px
	height: calc(100vh - 78px)
	background-image: url('@/assets/img/bg.jpg')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	position: relative
	&__subtitle
		font-size: 36px
		letter-spacing: 2px
		text-transform: uppercase
		line-height: 1.2em
		color: #fff
		text-shadow: 0 0 1px #000
	&__scroll
		position: absolute
		bottom: 0
		left: 50%
		transform: translateX(-50%)
		width: 60px
		height: 60px
		background-color: $dark
		display: flex
		align-items: center
		justify-content: center
		cursor: pointer
		&:hover
			svg
				fill: #fff
		svg
			fill: $accent
			transition: .3s ease
	&__button
		position: absolute
		bottom: 80px
		left: 0
		width: 100%
		text-align: center
h1
	font-size: 50px
	font-weight: 300
	text-transform: uppercase
	line-height: 1.2em
	color: #fff
	text-shadow: 0 0 20px #000
@include notebook
	.main
		&__subtitle
			font-size: 30px
	h1
		font-size: 40px
@include lg-desktop
	.main
		&__subtitle
			font-size: 20px
	h1
		font-size: 30px
@include md-desktop
	.main
		margin-top: 74px
		min-height: 700px
		height: auto
@include sm-tablets
	h1
		margin-top: 10px
		font-size: 20px
	.main
		margin-top: 109px
		padding-top: 20px
		min-height: calc(100vh - 109px)
		// background-position: 62% center
		// background-image: url('@/assets/img/bg_m.jpg')
		&__subtitle
			font-size: 16px
		&__scroll
			width: 40px
			height: 40px
			svg
				width: 14px
</style>
