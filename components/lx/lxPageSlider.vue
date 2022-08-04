<template>
	<section id="lxPageSlider" class="lxPageSlider">
		<div class="lxPageSlider__items">
			<div class="lxPageSlider__menu">
				<div class="container">
					<div class="lxPageSlider__wrapper">
						<a
							href="#feature"
							class="lxPageSlider__menu-link active"
							@click.prevent="scrollTo('feature')"
							>ХАРАКТЕРИСТИКИ</a
						>
						<a
							href="#design"
							class="lxPageSlider__menu-link"
							@click.prevent="scrollTo('design')"
							>ДИЗАЙН</a
						>
						<a
							href="#style"
							class="lxPageSlider__menu-link"
							@click.prevent="scrollTo('style')"
							>СТИЛЬ И КОМФОРТ</a
						>
						<a
							href="#safety"
							class="lxPageSlider__menu-link"
							@click.prevent="scrollTo('safety')"
							>БЕЗОПАСНОСТЬ</a
						>
						<a
							href="#dynamic"
							class="lxPageSlider__menu-link"
							@click.prevent="scrollTo('dynamic')"
							>ДИНАМИКА</a
						>
						<a
							href="#technology"
							class="lxPageSlider__menu-link"
							@click.prevent="scrollTo('technology')"
							>ТЕХНОЛОГИИ</a
						>
						<a
							href="#test-drive"
							class="lxPageSlider__menu-link"
							@click.prevent="scrollTo('test-drive')"
							>ТЕСТ-ДРАЙВ</a
						>
						<a
							href="#prices"
							class="lxPageSlider__menu-link"
							@click.prevent="scrollTo('prices')"
							>КОМПЛЕКТАЦИИ И ЦЕНЫ</a
						>
						<div class="lxPageSlider__menu-selector"></div>
					</div>
				</div>
			</div>
			<slider-feature class="lxPageSlider__item" id="feature"></slider-feature>
			<slider-design class="lxPageSlider__item" id="design"></slider-design>
			<slider-style class="lxPageSlider__item" id="style"></slider-style>
			<slider-safety class="lxPageSlider__item" id="safety"></slider-safety>
			<slider-dynamic class="lxPageSlider__item" id="dynamic"></slider-dynamic>
			<slider-technology
				class="lxPageSlider__item"
				id="technology"
			></slider-technology>
			<slider-test-drive
				class="lxPageSlider__item"
				id="test-drive"
			></slider-test-drive>
			<slider-prices class="lxPageSlider__item" id="prices"></slider-prices>
		</div>
	</section>
</template>

<script>
import sliderFeature from "@/components/lx/sliderFeature";
import sliderDesign from "@/components/lx/sliderDesign";
import sliderStyle from "@/components/lx/sliderStyle";
import sliderSafety from "@/components/lx/sliderSafety";
import sliderDynamic from "@/components/lx/sliderDynamic";
import sliderTechnology from "@/components/lx/sliderTechnology";
import sliderTestDrive from "@/components/lx/sliderTestDrive";
import sliderPrices from "@/components/lx/sliderPrices";
export default {
	components: {
		sliderFeature,
		sliderDesign,
		sliderStyle,
		sliderSafety,
		sliderDynamic,
		sliderTechnology,
		sliderTestDrive,
		sliderPrices
	},
	methods: {
		scrollTo(link) {
			const top = document.getElementById(link);
			const header = document.querySelector("header");
			console.log(top.offsetTop);
			window.scrollTo({
				top: top.offsetTop - header.offsetHeight + window.innerHeight,
				behavior: "smooth"
			});
			document.activeElement.blur();
		},
		moveSelector() {
			const menu = document.querySelector(".lxPageSlider__menu");
			const selector = menu.querySelector(".lxPageSlider__menu-selector");
			const menuLinks = menu.querySelectorAll(".lxPageSlider__menu-link");
			[...menuLinks].forEach((el, index) => {
				if (el.classList.contains("active")) {
					selector.style.cssText = `top: ${40 * index + 10 * index}px`;
				}
			});
		},
		addFixed() {
			const menu = document.querySelector(".lxPageSlider__menu");
			menu.style.cssText = `position: fixed;`;
		},
		removeFixed() {
			const menu = document.querySelector(".lxPageSlider__menu");
			menu.style.cssText = ``;
		},
		fixedMenu() {
			const lxPageSlider = document.querySelector(".lxPageSlider");
			const lxPageSliderWrapper = document.querySelector(
				".lxPageSlider__wrapper"
			);
			if (
				window.scrollY >= lxPageSlider.offsetTop &&
				window.scrollY <=
					lxPageSlider.offsetTop +
						lxPageSlider.clientHeight -
						window.innerHeight +
						lxPageSliderWrapper.clientHeight
			) {
				this.addFixed();
			} else {
				this.removeFixed();
			}
		}
	},
	mounted() {
		const menu = document.querySelector(".lxPageSlider__menu");
		if (menu && window.innerWidth > 768)
			window.addEventListener("scroll", this.fixedMenu);
		window.addEventListener("scroll", () => {
			let scrollDistance = window.scrollY;
			document.querySelectorAll(".lxPageSlider__item").forEach((el, i) => {
				if (
					el.offsetTop -
						document.querySelector(".header").clientHeight +
						window.innerHeight <=
					scrollDistance
				) {
					document.querySelectorAll(".lxPageSlider__menu-link").forEach(el => {
						if (el.classList.contains("active")) {
							el.classList.remove("active");
						}
					});

					document
						.querySelectorAll(".lxPageSlider__menu-link")
						[i].classList.add("active");
					this.moveSelector();
				}
			});
		});
	}
};
</script>

<style lang="sass">
.lxPageSlider
	position: relative
	overflow: hidden
	&__menu
		position: absolute
		left: 0
		top: 0
		padding-top: 110px
		z-index: 2
		width: 100%
		height: 100%
		&:after
			content: ''
			position: absolute
			left: 0
			top: 0
			right: 0
			bottom: 0
			background: linear-gradient(90deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
			opacity: 0.9
			z-index: -1
		&-link
			display: flex
			height: 40px
			align-items: center
			padding: 0 40px
			font-size: 14px
			color: #fff
			text-transform: uppercase
			opacity: .75
			letter-spacing: 1px
			margin-bottom: 10px
			line-height: 1
			white-space: nowrap
			text-decoration: none
			&.active
				font-size: 20px
				line-height: 1
				opacity: 1
		&-selector
			position: absolute
			width: 5px
			height: 40px
			background-color: $accent
			left: 0
			top: 0
			border-radius: 3px
			transform: translateX(-50%)
			transition: .1s ease
	&__wrapper
		border-left: 1px solid rgba(#C4C4C4, .3)
		position: relative
	&__item
		min-height: 100vh
		padding-bottom: 110px
	&__title
		font-size: 60px
		line-height: 1
		font-weight: 300
		text-transform: uppercase
	&__text
		padding: 40px 0
		font-size: 18px
		line-height: 32px
	&__content
		position: relative
		z-index: 3
		color: #fff
		max-width: 540px
		margin-left: auto
		padding-top: 110px
@include lg-desktop
	.lxPageSlider
		&__menu
			display: none
		&__content
			max-width: 100%
			width: 100%
			text-align: center
			position: static
		&__text
			display: none
		.detailBtn
			position: absolute
			bottom: 30px
			left: 50%
			transform: translateX(-50%)
@include md-desktop
	.lxPageSlider
		padding: 30px 0
		&__content
			padding-top: 30px
		&__title
			font-size: 30px
			line-height: 1
		&__item
			min-height: calc(100vh - 105px)
</style>
