<template>
	<section id="benefits">
		<div class="benefits-content">
			<div class="container">
				<div class="benefits-subtitle">EXEED ЦЕНТР РОСТОКИНО ПРЕМИУМ</div>
				<div class="benefits-title">наши<br />преимущества</div>
				<div class="benefits-text">
					Официальный дилер «EXEED ЦЕНТР РОСТОКИНО ПРЕМИУМ» предлагает выгодные
					условия на автомобили марки EXEED и предоставляет широкий спектр
					высококачественных финансовых, технических и сервисных услуг.
				</div>
				<ul class="benefits-list">
					<li class="icon-like">
						Официальный дилер EXEED с момента появления бренда на российском
						рынке
					</li>
					<li class="icon-individual">
						Индивидуальный подход к каждому клиенту
					</li>
					<li class="icon-car">Автомобили в наличии с ПТС</li>
					<li class="icon-trade">
						Честный TRADE-IN и минимальные ставки по кредитным программам
					</li>
					<li class="icon-sup">
						Сертифицированный сервис с гарантией на работы
					</li>
					<li class="icon-wheel">
						Бесплатный шиномонтаж и хранение шин
					</li>
				</ul>
				<div class="benefits-button">
					<el-button class="dark-btn" @click.prevent="openPopup()"
						>ЗАКАЗАТЬ ЗВОНОК</el-button
					>
				</div>
			</div>
		</div>
		<div class="benefits-image">
			<!-- <div class="benefits-item">
				<b>26</b>
				лет на автомобильном рынке
			</div>
			<div class="benefits-item">
				<b>120 000</b>
				проданных автомобилей
			</div>
			<div class="benefits-item">
				<b>>250</b>
				автомобилей в наличии
			</div> -->
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="sass">
#benefits
	display: flex
.benefits-content
	width: 50%
	background-color: #f2f2f2
	padding: 165px 80px 165px 139px
.benefits-button
	margin-top: 10px
.benefits-image
	width: 50%
	display: flex
	justify-content: center
	align-items: center
	flex-direction: column
	background-image: url('@/assets/img/benefits-bg.jpg')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	position: relative
	// &::after
	// 	content: ''
	// 	position: absolute
	// 	left: 0
	// 	top: 0
	// 	bottom: 0
	// 	right: 0
	// 	background-color: $black
	// 	opacity: .8
	// 	z-index: 1
.benefits-item
	z-index: 2
	color: $graylight
	font-size: 18px
	line-height: 1em
	padding: 60px 0
	border-bottom: 1px solid $accent
	text-align: center
	&:last-child
		border-bottom: none
	b
		font-size: 80px
		font-weight: 300
		line-height: 1em
		display: block
		margin-bottom: 10px
.benefits-subtitle
	font-size: 20px
	color: $gray
	letter-spacing: 1px
	text-transform: uppercase
	line-height: 1em
.benefits-title
	margin-top: 20px
	font-size: 60px
	line-height: 1em
	font-weight: 300
	text-transform: uppercase
.benefits-text
	margin-top: 40px
	font-size: 16px
	line-height: 1.4em
	color: $dark
.benefits-list
	margin-top: 50px
	list-style-type: none
	li
		padding: 20px 0
		border-bottom: 1px solid #dedede
		color: $dark
		font-weight: 600
		line-height: 1.2em
		padding-left: 30px
		background-repeat: no-repeat
		background-position: left center
.icon-like
	background-image: url('@/assets/img/like.svg')
	background-size: 20px
.icon-individual
	background-image: url('@/assets/img/individual.svg')
	background-size: 20px
.icon-car
	background-image: url('@/assets/img/car.svg')
	background-size: 16px
.icon-trade
	background-image: url('@/assets/img/trade.svg')
	background-size: 20px
.icon-sup
	background-image: url('@/assets/img/support.svg')
	background-size: 20px
.icon-wheel
	background-image: url('@/assets/img/wheel.svg')
	background-size: 20px
@include notebook
	.benefits-content
		padding: 93px 85px
	.benefits-subtitle
		font-size: 16px
	.benefits-title
		font-size: 40px
	.benefits-text
		margin-top: 20px
		font-size: 14px
	.benefits-list
		margin-top: 15px
		li
			padding: 15px 0 15px 30px
			font-size: 14px
	.benefits-item
		font-size: 14px
		padding: 30px 0
		width: 271px
		b
			font-size: 60px
@include lg-desktop
	#benefits
		flex-wrap: wrap
	.benefits-content
		width: 100%
		padding: 40px
	.benefits-subtitle
		width: 100%
	.benefits-image
		padding: 40px
		order: 1
		width: 100%
@include sm-tablets
	.benefits-content
		padding: 40px 20px
		.container
			width: 100%
	.benefits-subtitle
		font-size: 12px
	.benefits-title
		font-size: 30px
		margin-top: 10px
	.benefits-text
		margin-top: 30px
	.benefits-list li
		font-size: 14px
	.benefits-item b
		font-size: 40px
		margin-bottom: 10px
	.benefits-image
		padding: 127px 40px
</style>
