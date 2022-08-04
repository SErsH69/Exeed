<template>
	<section id="navigation">
		<div class="navigation-wrapper">
			<div class="container">
				<div class="navigation-menu">
					<div
						class="navigation-name"
						@click.prevent="scrollTo('carPage-config')"
					>
						exeed {{ car.name }}
					</div>
					<a href="#" @click.prevent="scrollTo('design')" v-if="car.design"
						>Дизайн</a
					>
					<a
						href="#"
						@click.prevent="scrollTo('technology')"
						v-if="car.technology"
						>Технологии</a
					>
					<a href="#" @click.prevent="scrollTo('comfort')" v-if="car.comfort"
						>Комфорт</a
					>
					<a href="#" @click.prevent="scrollTo('safety')" v-if="car.safety"
						>безопасность</a
					>
					<a href="#" @click.prevent="scrollTo('quality')" v-if="car.quality"
						>качество</a
					>
					<a href="#" @click.prevent="scrollTo('gallery')" v-if="car.gallery"
						>галерея</a
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ["car"],
	methods: {
		scrollTo(link) {
			const top = document.getElementById(link);
			const header = document.querySelector("header");
			window.scrollTo({
				top: top.offsetTop - header.offsetHeight,
				behavior: "smooth"
			});
			document.activeElement.blur();
		},
		addFixed() {
			const nav = document.querySelector("#navigation");
			// const navWrapper = document.querySelector(".navigation-wrapper");
			const header = document.querySelector("#header");
			// let top = window.scrollY - nav.offsetTop;
			// header.style.cssText = `top: -${top}px`;
			// if (top >= header.scrollHeight) {
			// 	nav.style.cssText = `height: ${navWrapper.scrollHeight}px`;
			// 	navWrapper.classList.add("fixed");
			// }
			nav.style.cssText = `position: fixed; left: 0; top: ${header.scrollHeight}px; width: 100%`;
		},
		removeFixed() {
			const nav = document.querySelector("#navigation");
			// const navWrapper = document.querySelector(".navigation-wrapper");
			// navWrapper.classList.remove("fixed");
			// nav.style.cssText = "";
			// header.style.cssText = "";
			nav.style.cssText = ``;
		},
		fixedNav() {
			const nav = document.querySelector("#navigation");
			window.scrollY >= nav.offsetTop ? this.addFixed() : this.removeFixed();
		}
	},
	mounted() {
		const nav = document.querySelector("#navigation");
		if (nav && window.innerWidth > 768)
			window.addEventListener("scroll", this.fixedNav);
	}
};
</script>

<style lang="sass">
.navigation-wrapper
	background-color: $dark
	padding: 20px 0
	overflow: hidden
	&.fixed
		position: fixed
		top: 0
		left: 0
		width: 100%
.navigation-name
	font-weight: 300
	color: $graylight
	letter-spacing: 2px
	text-transform: uppercase
	font-size: 20px
	line-height: 1em
	border-right: 1px solid rgba(255,255,255, .2)
	width: calc(100%/7)
	cursor: pointer
.navigation-menu
	justify-content: space-between
	display: flex
	width: 100%
	a
		width: calc(100%/7)
		text-align: center
		display: block
		font-size: 12px
		color: #fff
		letter-spacing: 2px
		text-transform: uppercase
		text-decoration: none
		border-right: 1px solid rgba(255,255,255, .2)
		position: relative
		z-index: 1
		&::after
			content: ''
			position: absolute
			left: 0
			top: -20px
			height: calc(100% + 40px)
			width: 100%
			background-color: #fff
			z-index: -1
			transform: translateY(-100%)
			transition: .3s ease-in-out
		&:hover
			color: $accent
			&::after
				transform: translateY(0)
@include sm-tablets
	#navigation
		display: none
</style>
