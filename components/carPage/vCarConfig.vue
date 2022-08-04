<template>
	<section id="carPage-config">
		<div class="container">
			<div class="carPage-config--title">
				{{ car.type }} <br />exeed {{ car.name }}
			</div>

			<!-- <div class="carPage-config--subTitle">
				{{ car.type }} exeed {{ car.name }}
			</div> -->
			<div class="carPage-config--image">
				<img
					:src="require(`@/assets/img/${car.id}.png`)"
					:alt="car.name"
					loading="lazy"
				/>
			</div>
			<div class="carPage-config--list">
				<div class="carPage-config--item">
					<div class="carPage-config--icon">
						<img
							:src="require(`@/assets/img/power.svg`)"
							alt="Мощность, л.с. "
							loading="lazy"
						/>
					</div>
					<div class="carPage-config--value">{{ car.power }}</div>
					<div class="carPage-config--label">Мощность, л.с.</div>
				</div>
				<div class="carPage-config--item">
					<div class="carPage-config--icon">
						<img
							:src="require(`@/assets/img/moment.svg`)"
							alt="Крутящий момент, Н•м"
							loading="lazy"
						/>
					</div>
					<div class="carPage-config--value">{{ car.moment }}</div>
					<div class="carPage-config--label">Крутящий момент, Н•м</div>
				</div>
				<div class="carPage-config--item">
					<div class="carPage-config--icon">
						<img
							:src="require(`@/assets/img/razgon.svg`)"
							alt="Разгон до 100 км/ч, с"
							loading="lazy"
						/>
					</div>
					<div class="carPage-config--value">{{ car.razgon }}</div>
					<div class="carPage-config--label">Разгон до 100 км/ч, с</div>
				</div>
				<div class="carPage-config--item">
					<div class="carPage-config--icon">
						<img
							:src="require(`@/assets/img/rashod.svg`)"
							alt="Расход топлива, л/100 км"
							loading="lazy"
						/>
					</div>
					<div class="carPage-config--value">{{ car.rashod }}</div>
					<div class="carPage-config--label">Расход топлива, л/100 км</div>
				</div>
			</div>
			<div class="carPage-config--buttons">
				<el-button class="dark-btn" @click.prevent="getPrice()"
					>ПРАЙС-ЛИСТ И СПЕЦИФИКАЦИЯ</el-button
				>
				<el-button class="dark-btn" @click.prevent="openPopup()"
					>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</el-button
				>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ["car"],
	methods: {
		getPrice() {
			window.location.href = `${window.location.origin}/${this.car.id}_price.pdf`;
		}
	}
};
</script>

<style lang="sass">
#carPage-config
	padding: 80px 0
.carPage-config--title
	width: 100%
	font-size: 60px
	text-align: center
	font-weight: 300
	text-transform: uppercase
	color: $dark
	line-height: 1em
.carPage-config--buttons
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	width: 100%
	margin-top: 80px
	.el-button
		max-width: 350px
		width: 100%
		margin: 0
		margin-bottom: 10px
.carPage-config--subTitle
	margin-top: 20px
	font-size: 20px
	letter-spacing: 1px
	text-transform: uppercase
	text-align: center
	color: $gray
	line-height: 1em
	width: 100%
.carPage-config--image
	width: 100%
	max-width: 1100px
	margin: 30px auto
	img
		display: block
		width: 100%
		height: 100%
.carPage-config--list
	width: 100%
	display: flex
	justify-content: space-between
.carPage-config--item
	width: 25%
	text-align: center
	border-left: 1px solid $graylight
	&:first-child
		border-left: none
.carPage-config--icon
	width: 60px
	height: 60px
	border-radius: 50%
	display: flex
	justify-content: center
	align-items: center
	background-color: #F2F2F2
	margin-left: auto
	margin-right: auto
.carPage-config--value
	margin: 10px 0
	font-size: 80px
	text-transform: uppercase
	color: $dark
	line-height: 1em
	font-weight: 300
.carPage-config--label
	font-size: 14px
	color: $dark
	line-height: 1em
@include sm-tablets
	.carPage-config--title
		font-size: 30px
	.carPage-config--subTitle
		font-size: 14px
		margin-top: 10px
	#carPage-config
		padding: 40px 0
	.carPage-config--list
		flex-wrap: wrap
	.carPage-config--item
		width: 50%
		margin: 10px 0
		padding: 0px 10px
		border: none
	.carPage-config--value
		font-size: 40px
	.carPage-config--icon
		width: 40px
		height: 40px
	.carPage-config--item:first-child, .carPage-config--item:nth-child(3)
		border-right: 1px solid #C78E66
</style>
