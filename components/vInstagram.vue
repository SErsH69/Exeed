<template>
	<section id="instagram">
		<div class="instagram-title">
			мы в instagram
		</div>
		<div id="instafeed"></div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			limitPhotos: 8
		};
	},
	mounted() {
		if (window.innerWidth <= 768) this.limitPhotos = 4;
		const feed = new Instafeed({
			accessToken:
				"IGQVJVX1BLM3RMX2RwaTkxeTVTeDFONWtpSmwtVXhROW1xN3FpNHFEWTJvZAkVvcHNNeVdraUZAxbVd6cGFsaGY3dHhzcnFyTDVZAOFNVVE5zWmZAwb3dxMWhqcDNET0k2NkN2ajBJZAUIyNmFXZAXpVQzdwRAZDZD",
			limit: this.limitPhotos,
			template:
				'<div class="instafeed-item" style="background-image: url({{image}})"><div class="instafeed-content">{{caption}}</div><a href="{{link}}" target="_blank"></a></div>'
		});
		feed.run();
	}
};
</script>

<style lang="sass">
#instafeed
	display: flex
	flex-wrap: wrap
.instafeed-item
	width: 25%
	height: 480px
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	position: relative
	overflow: hidden
	&:hover
		&::after
			transform: translateX(0)
		.instafeed-content
			opacity: 1
			transition: 1.5s ease-in-out
	&::after
		content: ''
		position: absolute
		left: 0
		top: 0
		right: 0
		bottom: 0
		background-color: $black
		opacity: 0.9
		transform: translateY(-100%)
		transition: .3s ease-in-out
		z-index: 1
	a
		position: absolute
		left: 0
		top: 0
		bottom: 0
		right: 0
		z-index: 3
.instafeed-content
	opacity: 0
	z-index: 2
	line-height: 1.5em
	font-size: 14px
	color: #fff
	position: absolute
	left: 10%
	top: 50%
	transform: translateY(-50%)
	width: 80%
	text-align: center
	overflow: auto
.instagram-title
	padding: 100px 0
	font-size: 60px
	line-height: 1em
	font-weight: 300
	text-transform: uppercase
	color: $dark
	text-align: center
@include notebook
	.instagram-title
		padding: 70px 0
		font-size: 40px
	.instafeed-item
		height: 342px
@include lg-desktop
	.instafeed-item
		height: 200px
@include sm-tablets
	.instafeed-item
		width: 50vw
		height: 50vw
		&::after
			display: none
	.instafeed-content
		display: none
	.instagram-title
		font-size: 30px
		padding: 40px 0
</style>
