<template>
	<section id="reviews">
		<div class="container">
			<div class="reviews-title">Отзывы покупателей</div>
			<div v-swiper:mySwiper="swiperOption">
				<div class="swiper-wrapper">
					<div class="swiper-slide reviews-item">
						<img
							:src="require('@/assets/img/reviews-1.jpg')"
							alt="элеонора"
							class="reviews-image"
						/>
						<div class="reviews-item--content">
							<div class="reviews-item--title">элеонора</div>
							<div class="reviews-item--subTitle">EXEED TXL FL</div>
							<div class="reviews-item--text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
						</div>
					</div>
					<div class="swiper-slide reviews-item">
						<img
							:src="require('@/assets/img/reviews-2.jpg')"
							alt="иван и мария"
							class="reviews-image"
						/>
						<div class="reviews-item--content">
							<div class="reviews-item--title">иван и мария</div>
							<div class="reviews-item--subTitle">EXEED VX</div>
							<div class="reviews-item--text">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu
								fugiat nulla pariatur.
							</div>
						</div>
					</div>
					<div class="swiper-slide reviews-item">
						<img
							:src="require('@/assets/img/reviews-3.jpg')"
							alt="владимир"
							class="reviews-image"
						/>
						<div class="reviews-item--content">
							<div class="reviews-item--title">владимир</div>
							<div class="reviews-item--subTitle">EXEED TXL FL</div>
							<div class="reviews-item--text">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			swiperOption: {
				spaceBetween: 20,
				freeMode: true,
				slidesPerView: "auto"
			}
		};
	}
};
</script>

<style lang="sass">
.reviews-title
	padding: 100px 0
	font-size: 60px
	line-height: 1em
	text-transform: uppercase
	color: $dark
	text-align: center
	width: 100%
#reviews
	background-color: #f2f2f2
	padding-bottom: 162px
.swiper-wrapper
	.reviews-item
		background-color: #fff
		width: calc(33.3333% - 27px)
.reviews-image
	display: block
	width: 100%
	height: 270px
	object-fit: cover
.reviews-item--content
	padding: 30px
.reviews-item--title
	color: $dark
	font-size: 30px
	line-height: 1.2em
	text-transform: uppercase
.reviews-item--subTitle
	color: $graylight
	font-size: 18px
	line-height: 1em
.reviews-item--text
	margin-top: 20px
	color: $dark
	line-height: 1.4em
@include notebook
	#reviews
		padding-bottom: 132px
	.reviews-title
		font-size: 40px
		padding: 70px 0
	.reviews-image
		height: 188px
	.reviews-item--content
		padding: 20px
	.reviews-item--title
		font-size: 20px
	.reviews-item--subTitle
		font-size: 14px
	.reviews-item--text
		margin-top: 15px
		font-size: 12px
@include lg-desktop
	.reviews-image
		height: 188px
@include sm-tablets
	.reviews-title
		font-size: 30px
		padding: 40px 0
	#reviews .container
		width: 100%
	.swiper-wrapper .reviews-item
		width: 280px
	#reviews
		padding-bottom: 40px
</style>
