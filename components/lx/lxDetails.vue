<template>
	<transition name="lxDetails-fade">
		<div class="lxDetails">
			<div class="lxDetails__close" @click="close">
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.80384e-05 1.16066C-0.000526949 1.06187 0.0112772 0.963151 0.0354299 0.864496C0.0595825 0.765842 0.0961521 0.679604 0.145139 0.605783C0.206406 0.519682 0.280022 0.433648 0.365987 0.347683C0.59932 0.114349 0.864171 -0.00149963 1.16054 0.00013534C1.45691 0.00177031 1.72306 0.120549 1.95898 0.356472L39.6435 38.041C39.8794 38.277 39.9982 38.5431 39.9998 38.8395C40.0015 39.1358 39.8856 39.4007 39.6523 39.634C39.419 39.8674 39.148 39.9894 38.8393 40C38.5429 39.9984 38.2768 39.8796 38.0409 39.6437L0.356355 1.95911C0.120433 1.72318 0.001653 1.45704 1.80384e-05 1.16066Z"
						fill="#C78E66"
					/>
					<path
						d="M38.8395 1.8038e-05C38.9383 -0.000526943 39.037 0.0112772 39.1356 0.0354299C39.2343 0.0595826 39.3205 0.096152 39.3943 0.145139C39.4804 0.206406 39.5665 0.280023 39.6524 0.365988C39.8858 0.599321 40.0016 0.864174 40 1.16055C39.9984 1.45692 39.8796 1.72307 39.6437 1.95899L1.95913 39.6435C1.7232 39.8795 1.45706 39.9982 1.16069 39.9999C0.864315 40.0015 0.599461 39.8857 0.366128 39.6523C0.132795 39.419 0.0108068 39.148 0.00016109 38.8394C0.00179608 38.543 0.120574 38.2768 0.356496 38.0409L38.041 0.356354C38.2769 0.120431 38.5431 0.00165298 38.8395 1.8038e-05Z"
						fill="#C78E66"
					/>
				</svg>
			</div>
			<div class="lxDetails__title">
				{{ title }}
			</div>
			<div class="lxDetails__content">
				<slot name="content"></slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: ["title"],
	methods: {
		close() {
			this.$emit("close");
		}
	}
};
</script>

<style lang="sass">
.lxDetails
	position: fixed
	width: 100%
	height: 100vh
	z-index: 11
	background-color: $black
	left: 0
	top: 0
	padding: 50px 120px
	overflow: auto
	&-fade-enter,
	&-fade-leave-active
		opacity: 0
	&-fade-enter-active,
	&-fade-leave-active
		transition: opacity .5s ease
	&__close
		cursor: pointer
		position: absolute
		right: 40px
		top: 40px
	&__title
		text-transform: uppercase
		font-size: 20px
		line-height: 1
		letter-spacing: 1px
		color: #7D8082
	&__content
		margin-top: 100px
	&__image
		display: block
		max-width: 100%
		max-height: 40vh
		height: 100%
		width: 100%
		object-fit: cover
	&__item
		&-content
			margin-top: 40px
		&-title
			color: #fff
			text-transform: uppercase
			font-size: 40px
			font-weight: 300
			line-height: 1
			position: relative
			margin-bottom: 60px
			&:after
				content: ''
				position: absolute
				left: 0
				bottom: -30px
				width: 105px
				height: 1px
				background-color: $accent
		&-text
			font-size: 18px
			line-height: 27px
			color: #fff
			ul
				list-style-position: inside
	&-nav-btn
		height: 60px
		width: 60px
		background-color: $accent
		display: flex
		align-items: center
		justify-content: center
		border-radius: 50%
		cursor: pointer
		svg
			display: block
			width: 12px
			height: 22px
			path
				fill: #fff
		&.swiper-button-disabled
			background: $dark
			svg
				path
					fill: #7D8082
	&__slider
		position: relative
		padding-bottom: 100px!important
	&__nav
		width: 238px
		position: absolute
		bottom: 0
		left: 50%
		transform: translateX(-50%)
		display: flex
		justify-content: space-between
		align-items: center
		&-text
			color: #fff
			font-size: 18px
			line-height: 1
			letter-spacing: 1px
			text-transform: uppercase
@include md-desktop
	.lxDetails
		padding: 0
		&__close
			right: 20px
			top: 20px
			width: 20px
			height: 20px
			svg
				display: block
				width: 100%
				height: 100%
		&__title
			color: #7D8082
			font-size: 12px
			line-height: 18px
			padding: 20px
		&__content
			margin-top: 20px
		&__image
			height: 213px
			width: 100%
			display: block
		&__item
			&-content
				margin-top: 0
				padding: 20px
			&-title
				font-size: 18px
				line-height: 20px
				margin-bottom: 20px
				&:after
					bottom: -10px
			&-text
				font-size: 14px
				line-height: 20px
</style>
