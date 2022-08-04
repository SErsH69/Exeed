<template>
	<div class="carFull">
		<div
			class="carFull__image"
			:style="
				`background-image: url(${require(`@/assets/img/${car.id}/main.jpg`)})`
			"
		></div>
		<div class="carFull__wrapper">
			<div class="carFull__content">
				<div class="carFull__name">EXEED {{ car.name }}</div>
				<div class="carFull__price">
					с выгодой до {{ (+car.benefit).toLocaleString() }} ₽*
					<!-- от {{ (+car.price).toLocaleString() }} ₽* -->
				</div>
				<div class="carFull__settings">
					<div class="carFull__setting" v-if="car.rashod">
						<img
							:src="require(`@/assets/img/rashod.svg`)"
							alt="Расход топлива, л/100 км"
							loading="lazy"
						/>
						<div class="carFull__label">Расход топлива, л/100 км</div>
						<div class="carFull__value">{{ car.rashod }}</div>
					</div>
					<div class="carFull__setting" v-if="car.razgon">
						<img
							:src="require(`@/assets/img/razgon.svg`)"
							alt="Разгон до 100 км/ч, с"
							loading="lazy"
						/>
						<div class="carFull__label">Разгон до 100 км/ч, с</div>
						<div class="carFull__value">{{ car.razgon }}</div>
					</div>
					<div class="carFull__setting" v-if="car.power">
						<img
							:src="require(`@/assets/img/power.svg`)"
							alt="Мощность, л.с."
							loading="lazy"
						/>
						<div class="carFull__label">Мощность, л.с.</div>
						<div class="carFull__value">{{ car.power }}</div>
					</div>
					<div class="carFull__setting" v-if="car.seats">
						<img
							:src="require(`@/assets/img/seats.svg`)"
							alt="Мест"
							loading="lazy"
						/>
						<div class="carFull__label">Мест</div>
						<div class="carFull__value">{{ car.seats }}</div>
					</div>
					<div class="carFull__setting" v-if="car.guarantee">
						<img
							:src="require(`@/assets/img/guarantee.svg`)"
							alt="Гарантия"
							loading="lazy"
						/>
						<div class="carFull__label">Гарантия</div>
						<div class="carFull__value">{{ car.guarantee }}</div>
					</div>
				</div>
				<div class="carFull__buttons">
					<el-button class="accent-btn" @click.prevent="openPopup()"
						>заказать звонок</el-button
					>
					<el-button class="page-btn" @click.prevent="changePage()"
						>узнать больше</el-button
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["car"],
	methods: {
		changePage() {
			this.$router.push(this.car.id);
		}
	}
};
</script>

<style lang="sass">
.carFull
	display: flex
	min-height: 100vh
	&:first-child
		.carFull__wrapper
			background-color: $grayback
		.carFull__label
			color: $graymedium
		.accent-btn
			background-color: $dark
			color: #fff
			border: none
		.page-btn
			color: $black
			border-color: $black
	&:nth-child(2)
		.carFull__wrapper
			background-color: $dark
			color: #fff
	&:nth-child(3)
		.carFull__wrapper
			background-color: $black
			color: #fff
	&:nth-child(even)
		.carFull__image
			order: 2
	&__image
		width: 50%
		background-size: cover
		background-repeat: no-repeat
		background-position: center center
	&__wrapper
		width: 50%
		display: flex
		justify-content: center
		align-items: center
		padding: 15px
	&__content
		width: 75%
	&__name
		font-size: 60px
		font-weight: 300
		line-height: 1
		text-transform: uppercase
	&__price
		color: $accent
		font-size: 30px
		line-height: 1
		letter-spacing: 2px
		text-transform: uppercase
		margin-top: 20px
	&__settings
		margin-top: 30px
	&__setting
		padding: 20px 0
		border-bottom: 1px solid rgba(255,255,255, .1)
		display: flex
		justify-content: space-between
		align-items: center
	&__value
		font-weight: 600
		font-size: 18px
		line-height: 1
	&__label
		font-size: 18px
		line-height: 1
		margin-left: 20px
		margin-right: auto
		color: $graylight
	&__buttons
		margin-top: 50px
		display: flex
		align-items: center
		.accent-btn
			background-color: #fff
			color: $black
			border: none
		.page-btn
			margin-left: 30px
@include lg-desktop
	.carFull
		min-height: auto
		&__content
			width: 100%
		&__wrapper
			padding: 50px
@include md-desktop
	.carFull
		display: block
		&__image
			width: 100%
			height: 350px
		&__wrapper
			padding: 30px 20px
			width: 100%
		&__name
			text-align: center
			font-size: 30px
		&__price
			text-align: center
			letter-spacing: 1px
			font-size: 16px
			margin-top: 10px
		&__label
			font-size: 14px
			margin-left: 12px
		&__value
			font-size: 14px
		&__setting
			padding: 13px 0
		&__settings
			margin-top: 15px
		&__buttons
			justify-content: space-around
			flex-wrap: wrap
			margin-top: 30px
			.page-btn
				margin-left: 0
			button
				margin-bottom: 20px
</style>
