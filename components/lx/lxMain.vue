<template>
	<section id="lxMain" class="lxMain">
		<div class="lxMain__title">
			<h1>exeed lx</h1>
			<div class="lxMain__price">
				с выгодой до 776 400 ₽*
			</div>
		</div>

		<div class="lxMain__button">
			<el-button class="light-btn" @click.prevent="openPopup()"
				>узнать больше</el-button
			>
		</div>
		<div class="lxMain__scroll" @click.prevent="scrollTo('lxSlider')">
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
	</section>
</template>

<script>
export default {
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
.lxMain
	background-image: url('@/assets/img/lx__bg.jpg')
	margin-top: 78px
	height: calc(100vh - 78px)
	position: relative
	background-size: cover
	background-repeat: no-repeat
	background-position: left center
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
		text-align: center

@include sm-tablets
	.lxMain__title p
		font-size: 16px
	#lxMain
		background-position: 30% center
	#lxMain__image
		margin-top: 109px
</style>
