<template>
	<div class="txl2Main">
		<div class="container">
			<h1>
				Уже <br />
				в продаже
			</h1>
		</div>
		<div class="txl2Main__config">
			<div class="container">
				<div class="txl2Main__items">
					<div class="txl2Main__item">
						<div class="txl2Main__item--icon">
							<img
								:src="require(`@/assets/img/power-white.svg`)"
								alt="Мощность, л.с. "
								loading="lazy"
							/>
						</div>
						<div class="txl2Main__item--value">197</div>
						<div class="txl2Main__item--label">Мощность, л.с.</div>
					</div>
					<div class="txl2Main__item">
						<div class="txl2Main__item--icon">
							<img
								:src="require(`@/assets/img/setting-white.svg`)"
								alt="Крутящий момент, Н•м"
								loading="lazy"
							/>
						</div>
						<div class="txl2Main__item--value">375</div>
						<div class="txl2Main__item--label">Крутящий момент, Н•м</div>
					</div>
					<div class="txl2Main__item">
						<div class="txl2Main__item--icon">
							<img
								:src="require(`@/assets/img/speed-white.svg`)"
								alt="Разгон до 100 км/ч, с"
								loading="lazy"
							/>
						</div>
						<div class="txl2Main__item--value">9</div>
						<div class="txl2Main__item--label">Разгон до 100 км/ч, с</div>
					</div>
					<div class="txl2Main__item">
						<div class="txl2Main__item--icon">
							<img
								:src="require(`@/assets/img/rashod-white.svg`)"
								alt="Расход топлива, л/100 км"
								loading="lazy"
							/>
						</div>
						<div class="txl2Main__item--value">8,7</div>
						<div class="txl2Main__item--label">Расход топлива, л/100 км</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.txl2Main
	margin-top: 80px
	background-image: url('@/assets/img/txl2/bg.jpg')
	background-size: cover
	background-repeat: no-repeat
	background-position: right 40%
	height: calc(100vh - 80px)
	position: relative
	padding-top: 40px
	h1
		font-size: 60px
	&__subtitle
		color: #fff
		width: 100%
		margin-top: 20px
		font-size: 24px
		line-height: 1
	&__price
		color: $accent
		margin-top: 20px
		letter-spacing: 1px
		text-transform: uppercase
		font-size: 35px
		line-height: 1.2
		display: block
	&__items
		width: 100%
		display: flex
		justify-content: space-between
		position: absolute
		left: 0
		bottom: 0
		padding: 85px 0
		width: 100%
		background: linear-gradient(0deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
	&__item
		width: 25%
		text-align: center
		border-left: 1px solid rgba($graylight, 0.2)
		&:first-child
			border-left: none
.txl2Main__item--icon
	width: 60px
	height: 60px
	border-radius: 50%
	display: flex
	justify-content: center
	align-items: center
	background: rgba(255, 255, 255, 0.1)
	margin-left: auto
	margin-right: auto
.txl2Main__item--value
	margin: 10px 0
	font-size: 80px
	text-transform: uppercase
	color: #fff
	line-height: 1em
	font-weight: 300
.txl2Main__item--label
	font-size: 14px
	color: #fff
	line-height: 1em
@include notebook
	.txl2Main
		margin-top: 78px
		height: calc(100vh - 78px)
@include lg-desktop
	.txl2Main
		h1
			font-size: 36px
		&__subtitle
			margin-top: 10px
			font-size: 16px
		&__price
			margin-top: 10px
			font-size: 16px
@include sm-tablets
	.txl2Main
		background-size: 500px, cover
		background-position: right top
		margin-top: 105px
		padding-top: 220px
		padding-bottom: 400px
		text-align: center
		background-color: $dark
		height: auto
		position: relative
		&:after
			content: ''
			position: absolute
			left: 0
			top: 0
			right: 0
			bottom: 0
			background: linear-gradient(0deg, #181B1C 0%, #171A1C 55.25%, rgba(24, 27, 28, 0) 70.13%)
			z-index: 1
		h1
			width: 100%
			display: none
	.txl2Main__item
		padding: 40px 0

	.txl2Main__items
		flex-wrap: wrap
		padding-top: 98px
		background: linear-gradient(0deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
		position: absolute
		z-index: 2
	.txl2Main__item
		width: 50%
		margin: 10px 0
		padding: 0px 10px
		border: none
	.txl2Main__item--value
		font-size: 40px
	.txl2Main__item--icon
		width: 40px
		height: 40px
	.txl2Main__item--item:first-child, .txl2Main__item--item:nth-child(3)
		border-right: 1px solid #C78E66
</style>
