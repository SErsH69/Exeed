<template>
	<div class="car">
		<div class="car-name">
			{{ car.name }}
		</div>
		<div class="car-type">
			{{ car.type }}
		</div>
		<div class="car-image">
			<img
				:src="require(`@/assets/img/${car.id}.png`)"
				:alt="car.name"
				loading="lazy"
			/>
		</div>
		<div class="car-config">
			<div class="car-config_item">
				<img
					:src="require(`@/assets/img/power.svg`)"
					alt="Мощность, л.с. "
					loading="lazy"
				/>
				<div class="config-value">{{ car.power }}</div>
				<div class="config-label">Мощность, л.с.</div>
			</div>
			<div class="car-config_item">
				<img
					:src="require(`@/assets/img/moment.svg`)"
					alt="Крутящий момент, Н•м"
					loading="lazy"
				/>
				<div class="config-value">{{ car.moment }}</div>
				<div class="config-label">Крутящий момент, Н•м</div>
			</div>
			<div class="car-config_item">
				<img
					:src="require(`@/assets/img/razgon.svg`)"
					alt="Разгон до 100 км/ч, с"
					loading="lazy"
				/>
				<div class="config-value">{{ car.razgon }}</div>
				<div class="config-label">Разгон до 100 км/ч, с</div>
			</div>
			<div class="car-config_item">
				<img
					:src="require(`@/assets/img/rashod.svg`)"
					alt="Расход топлива, л/100 км"
					loading="lazy"
				/>
				<div class="config-value">{{ car.rashod }}</div>
				<div class="config-label">Расход топлива, л/100 км</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["car"]
};
</script>

<style lang="sass">
.car
	width: calc(33.333333% - 50px)
	text-align: center
.car-name
	font-size: 64px
	text-transform: uppercase
	font-weight: 300
	line-height: 1.2em
.car-type
	font-size: 20px
	letter-spacing: 1px
	text-transform: uppercase
	color: $gray
	line-height: 1.2em
.car-image
	margin-top: 20px
	max-width: 550px
	max-width: 100%
	img
		display: block
		max-width: 100%
		max-height: 100%
		height: auto
.car-config
	display: flex
	flex-wrap: wrap
	align-items: center
.car-config_item
	width: 50%
	text-align: center
	margin: 20px 0
	&:first-child,
	&:nth-child(3)
		border-right: 1px solid $accent
.config-value
	font-size: 46px
	font-weight: 300
	text-transform: uppercase
	line-height: 1.2em
.config-label
	font-size: 14px
	line-height: 1.2em
	padding: 0 5px
@include lg-desktop
	.car
		width: 100%
		margin-bottom: 80px
		&:last-child
			margin-bottom: 0
	.car-image img
		margin-left: auto
		margin-right: auto
@include sm-tablets
	.car-name
		font-size: 40px
	.car-type
		font-size: 16px
	.config-value
		font-size: 40px
	.config-label
		font-size: 14px
	.car-config_item
		margin: 10px 0
		padding: 0px 10px
	.car
		padding-bottom: 60px
		margin-bottom: 40px
		border-bottom: 1px solid #DEDEDE
		&:last-child
			margin-bottom: 0
			padding-bottom: 0
			border: none
</style>
