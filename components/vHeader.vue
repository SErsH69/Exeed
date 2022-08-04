<template>
	<header id="header" class="header">
		<div class="header__left">
			<div class="header__logo">
				<div class="header__logo-image">
					<nuxt-link to="/">
						<img
							loading="lazy"
							:src="require('@/assets/img/exeed-logo.svg')"
							alt="EXEED"
						/>
					</nuxt-link>
				</div>
				<div class="header__logo-title">
					EXEED ЦЕНТР КАРС СТОК <span>официальный дилер EXEED</span>
				</div>
			</div>
			<div :class="[menu ? 'open' : '', 'header__menu']">
				<nuxt-link to="/lx">LX</nuxt-link>
				<nuxt-link to="/txl">TXL</nuxt-link>
				<nuxt-link to="/txl2">TXL 2.0</nuxt-link>
				<nuxt-link to="/vx">VX</nuxt-link>
				<nuxt-link to="/spec">Спецпредложения</nuxt-link>
				<a
					href="#"
					class="carPage-header__link"
					@click.prevent="scrollTo('design')"
					v-if="nav && nav.design"
					>Дизайн</a
				>
				<a
					href="#"
					class="carPage-header__link"
					@click.prevent="scrollTo('technology')"
					v-if="nav && nav.technology"
					>Технологии</a
				>
				<a
					href="#"
					class="carPage-header__link"
					@click.prevent="scrollTo('comfort')"
					v-if="nav && nav.comfort"
					>Комфорт</a
				>
				<a
					href="#"
					class="carPage-header__link"
					@click.prevent="scrollTo('safety')"
					v-if="nav && nav.safety"
					>безопасность</a
				>
				<a
					href="#"
					class="carPage-header__link"
					@click.prevent="scrollTo('quality')"
					v-if="nav && nav.quality"
					>качество</a
				>
				<a
					href="#"
					class="carPage-header__link"
					@click.prevent="scrollTo('gallery')"
					>галерея</a
				>
			</div>
			<div class="burger" @click.prevent="menu = !menu">
				<svg
					width="24"
					height="20"
					viewBox="0 0 24 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.31031 1.91816C0.241353 1.84996 0.181014 1.77323 0.129296 1.68798C0.0775776 1.60273 0.0430986 1.51748 0.0258591 1.43223C0.00861966 1.32992 0 1.2191 0 1.09974C0 0.775789 0.103437 0.511509 0.31031 0.306905C0.517184 0.102302 0.784395 0 1.11195 0H22.8881C23.2156 0 23.4828 0.102302 23.6897 0.306905C23.8966 0.511509 24 0.775789 24 1.09974C24 1.4237 23.8966 1.6965 23.6897 1.91816C23.4828 2.12276 23.2156 2.22506 22.8881 2.22506H1.11195C0.784395 2.22506 0.517184 2.12276 0.31031 1.91816ZM22.8881 8.90026C23.2156 8.90026 23.4828 9.00256 23.6897 9.20716C23.8966 9.41176 24 9.67604 24 10C24 10.324 23.8966 10.5882 23.6897 10.7928C23.4828 10.9974 23.2156 11.0997 22.8881 11.0997H1.11195C0.784395 11.0997 0.517184 10.9974 0.31031 10.7928C0.275831 10.7587 0.241352 10.7161 0.206874 10.665C0.172395 10.6138 0.137916 10.5627 0.103437 10.5115C0.0861974 10.4604 0.0689578 10.4092 0.0517184 10.3581C0.0344789 10.3069 0.0172395 10.2558 0 10.2046C0 10.1364 0 10.0682 0 10C0 9.67604 0.103437 9.41176 0.31031 9.20716C0.517184 9.00256 0.784395 8.90026 1.11195 8.90026H22.8881ZM23.6897 18.0818C23.8966 18.2864 24 18.5507 24 18.8747C24 19.1986 23.8966 19.4714 23.6897 19.6931C23.4828 19.8977 23.2156 20 22.8881 20H1.11195C0.784395 20 0.517184 19.8977 0.31031 19.6931C0.275831 19.659 0.241352 19.6249 0.206874 19.5908C0.189634 19.5396 0.163775 19.497 0.129296 19.4629C0.112056 19.4118 0.094817 19.3691 0.0775776 19.335C0.0603381 19.2839 0.0430986 19.2327 0.0258591 19.1816C0.00861966 19.1304 0 19.0878 0 19.0537C0 19.0026 0 18.9429 0 18.8747C0 18.5507 0.103437 18.2864 0.31031 18.0818C0.517184 17.8772 0.784395 17.7749 1.11195 17.7749H22.8881C23.1984 17.7749 23.4656 17.8772 23.6897 18.0818Z"
						fill="white"
					/>
				</svg>
			</div>
		</div>
		<div class="header__right">
			<v-phone></v-phone>
			<el-button class="header__btn" @click.prevent="openPopup()"
				>заказать звонок</el-button
			>
			<div class="header__diler">EXEED ЦЕНТР КАРС СТОК</div>
			<div class="header__contacts" @click.prevent="scrollTo('contacts')">
				<svg
					width="14"
					height="18"
					viewBox="0 0 14 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.82031 0C5.90625 0 5.02734 0.1875 4.18359 0.5625C3.35156 0.925781 2.63086 1.41797 2.02148 2.03906C1.41211 2.64844 0.919922 3.375 0.544922 4.21875C0.181641 5.0625 0 5.94141 0 6.85547C0 7.37109 0.0703125 7.91016 0.210938 8.47266C0.351562 9.03516 0.515625 9.55664 0.703125 10.0371C0.890625 10.5176 1.16016 11.0508 1.51172 11.6367C1.86328 12.2227 2.17383 12.7207 2.44336 13.1309C2.72461 13.5293 3.09961 14.0215 3.56836 14.6074C4.03711 15.1816 4.40039 15.6211 4.6582 15.9258C4.91602 16.2305 5.2793 16.6523 5.74805 17.1914C5.88867 17.3555 5.99414 17.4727 6.06445 17.543C6.08789 17.5781 6.12891 17.6191 6.1875 17.666C6.24609 17.7246 6.35156 17.7949 6.50391 17.877C6.65625 17.959 6.80273 18 6.94336 18H6.99609C7.32422 18 7.61719 17.8477 7.875 17.543C11.625 13.2305 13.5 9.66797 13.5 6.85547C13.5 4.89844 12.9023 3.27539 11.707 1.98633C10.4648 0.662109 8.83594 0 6.82031 0ZM7.03125 16.7871C7.01953 16.8105 6.99609 16.834 6.96094 16.8574C6.9375 16.834 6.91406 16.8105 6.89062 16.7871L6.5918 16.4531C6.14648 15.9375 5.80078 15.5391 5.55469 15.2578C5.30859 14.9648 4.96289 14.543 4.51758 13.9922C4.07227 13.4414 3.7207 12.9785 3.46289 12.6035C3.20508 12.2168 2.90625 11.7539 2.56641 11.2148C2.22656 10.6641 1.96289 10.1719 1.77539 9.73828C1.59961 9.29297 1.44727 8.81836 1.31836 8.31445C1.18945 7.79883 1.125 7.3125 1.125 6.85547C1.125 5.83594 1.38281 4.88672 1.89844 4.00781C2.41406 3.11719 3.10547 2.41406 3.97266 1.89844C4.85156 1.38281 5.80078 1.125 6.82031 1.125C7.74609 1.125 8.57227 1.28906 9.29883 1.61719C10.0254 1.93359 10.6055 2.36719 11.0391 2.91797C11.4844 3.46875 11.8184 4.07812 12.041 4.74609C12.2637 5.41406 12.375 6.11719 12.375 6.85547C12.375 9.38672 10.5938 12.6973 7.03125 16.7871ZM6.76758 3.39258C6.4043 3.39258 6.04688 3.45117 5.69531 3.56836C5.35547 3.68555 5.04492 3.84961 4.76367 4.06055C4.49414 4.25977 4.25391 4.5 4.04297 4.78125C3.83203 5.0625 3.66797 5.37305 3.55078 5.71289C3.44531 6.05273 3.39258 6.4043 3.39258 6.76758C3.39258 7.70508 3.7207 8.50195 4.37695 9.1582C5.04492 9.81445 5.8418 10.1426 6.76758 10.1426C7.70508 10.1426 8.50195 9.81445 9.1582 9.1582C9.81445 8.50195 10.1426 7.70508 10.1426 6.76758C10.1426 6.31055 10.0547 5.87695 9.87891 5.4668C9.70312 5.04492 9.46289 4.6875 9.1582 4.39453C8.85352 4.08984 8.49023 3.84961 8.06836 3.67383C7.6582 3.48633 7.22461 3.39258 6.76758 3.39258ZM6.76758 9.01758C6.14648 9.01758 5.61328 8.79492 5.16797 8.34961C4.72266 7.9043 4.5 7.37109 4.5 6.75C4.5 6.12891 4.7168 5.60156 5.15039 5.16797C5.5957 4.72266 6.12891 4.5 6.75 4.5C7.37109 4.5 7.89844 4.72266 8.33203 5.16797C8.77734 5.60156 9 6.12891 9 6.75C9 7.52344 8.68945 8.13867 8.06836 8.5957C7.68164 8.87695 7.24805 9.01758 6.76758 9.01758Z"
					/>
				</svg>
			</div>
		</div>
	</header>
</template>

<script>
import vPhone from "@/components/vPhone";
export default {
	props: ["nav"],
	components: {
		vPhone
	},
	data() {
		return {
			menu: false
		};
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
			this.menu = false;
		}
	}
};
</script>

<style lang="sass">
.header
	background-color: $dark
	padding: 20px 40px
	color: #fff
	display: flex
	align-items: center
	justify-content: space-between
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1)
	position: fixed
	left: 0
	top: 0
	width: 100%
	z-index: 10
	&__btn
		height: 40px
		padding: 11px 50px 11px 30px
		margin-left: 20px
	&__diler
		display: none
	&__left
		display: flex
		align-items: center
	&__logo-title
		padding-left: 40px
		border-left: 1px solid $accent
		text-transform: uppercase
		font-size: 14px
		letter-spacing: 1px
		font-weight: 700
		span
			display: block
			font-size: 10px
			font-weight: 300
	&__logo
		display: flex
		align-items: center
	&__logo-image
		margin-right: 40px
	&__menu
		margin-left: 70px
		a
			color: #fff
			text-transform: uppercase
			letter-spacing: 1px
			font-size: 12px
			font-weight: 600
			text-decoration: none
			padding: 0px 15px
			&:hover
				color: $accent
				text-decoration: underline
		.nuxt-link-active
			color: $gray
	&__right
		display: flex
		align-items: center
		.phone
			a
				color: #fff
				letter-spacing: 1px
				text-transform: uppercase
				font-size: 20px
				line-height: 1.2em
				font-weight: 400
				text-decoration: none
				&:hover
					color: $accent
					text-decoration: underline
	&__contacts
		margin-left: 20px
		padding-left: 22px
		border-left: 1px solid rgba(255,255,255, .2)
		cursor: pointer
		&:hover
			svg
				fill: $accent
		svg
			fill: #fff
			transition: .3s ease
.carPage-header__link
	display: none
.burger
	display: none
@include notebook
	.header__btn
		display: none
@include lg-desktop

	.header__menu
		margin-left: 10px
@include md-desktop
	.header
		&__logo-title
			display: none
		&__logo-image
			margin-right: 0
		&__menu
			margin-left: auto
			margin-right: auto
		&__left
			width: 100%
		&__right
			width: 100%
			justify-content: flex-end

@include sm-tablets
	.header
		padding: 0
		flex-wrap: wrap
		&__menu
			position: fixed
			top: 105px
			left: 0
			width: 100%
			height: calc(100vh - 105px)
			background-color: $dark
			display: flex
			flex-direction: column
			align-items: center
			padding: 40px 20px
			transform: translateX(-100vw)
			transition: .3s ease-in-out
			&.open
				transform: translateX(0)
			a
				font-size: 18px
				line-height: 1.4em
				margin-bottom: 20px
		&__left
			width: 100%
			justify-content: space-between
			padding: 15px 20px
		&__right
			padding: 11px 20px
			border-top: 1px solid $accent
			justify-content: space-between
			.header__btn
				display: none
			.phone
				display: block
				width: 18px
				height: 18px
				position: relative
				overflow: hidden
				background-image: url('@/assets/img/white-phone.svg')
				background-size: contain
				a
					left: 0
					top: 0
					right: 0
					bottom: 0
					opacity: 0
					z-index: 10
		&__diler
			display: block
			letter-spacing: 1px
			color: #fff
			text-transform: uppercase
			font-size: 10px
		&__contacts
			margin: 0
			padding: 0
			border: none
	.burger
		display: block
	.carPage-header__link
		display: none
	#car-page .carPage-header__link
		display: block
</style>
