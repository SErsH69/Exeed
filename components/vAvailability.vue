<template>
	<section class="availability" id="availability">
		<div class="container">
			<h2 class="availability__title">автомобили в наличии</h2>
			<div class="availability__list">
				<div class="availability__item" v-for="car in cars" :key="car.image">
					<div class="availability__image">
						<img
							:src="require(`@/assets/img/${car.image}.jpg`)"
							:alt="car.name"
							loading="lazy"
						/>
					</div>
					<div class="availability__info">
						<div class="availability__name">exeed {{ car.name }}</div>
						<div class="availability__compl">
							{{ car.compl }}
						</div>
						<div class="availability__price">
							от <b>{{ (+car.price).toLocaleString() }}</b> ₽*
						</div>
						<ul class="availability__ul">
							<li class="availability__li">
								Цифровой кокпит с двумя 12.3” HD дисплеями
							</li>
							<li class="availability__li">
								Полностью светодиодная LED-оптика
							</li>
							<li class="availability__li">
								Легкосплавные {{ car.wheel }}-дюймовые диски
							</li>
						</ul>
						<div class="availability__button">
							<el-button class="black-btn" @click.prevent="openPopup()"
								>узнать больше</el-button
							>
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
			cars: [
				{
					image: "vx-1",
					id: "vx",
					price: 4109900,
					name: "vx",
					compl: "President",
					wheel: 20
				},
				{
					image: "txl-1",
					id: "txl",
					price: 3079900,
					name: "txl",
					compl: "Flagship",
					wheel: 19
				},
				{
					image: "lx-1",
					id: "lx",
					price: 2399900,
					name: "lx",
					compl: "Prestige",
					wheel: 19
				}
			]
		};
	},
	methods: {
		changePage(id) {
			this.$router.push(id);
		}
	}
};
</script>

<style lang="sass">
.availability
	background: #F2F2F2
	padding: 100px 0
	&__title
		font-size: 60px
		line-height: 1
		font-weight: 300
		text-transform: uppercase
		text-align: center
		width: 100%
	&__list
		margin-top: 100px
		display: grid
		gap: 30px
		grid-template-columns: repeat(3, 1fr)
		width: 100%
	&__item
		background-color: #fff
	&__image
		overflow: hidden
		img
			display: block
			width: 100%
			height: auto
	&__info
		padding: 30px 30px 35px 30px
	&__name
		text-transform: uppercase
		font-size: 40px
		line-height: 1
	&__price
		margin-top: 10px
		color: #7D8082
		font-size: 18px
		line-height: 1
	&__compl
		margin-top: 10px
		color: #7D8082
		font-size: 18px
		line-height: 1
	&__ul
		margin-top: 20px
		list-style-type: none
	&__li
		padding: 10px 0
		border-bottom: 1px solid #DEDEDE
		font-size: 14px
		line-height: 1.5
		padding-left: 20px
		background-image: url('@/assets/img/chevrone.svg')
		background-size: 10px
		background-repeat: no-repeat
		background-position: left center
	&__button
		margin-top: 30px
@include notebook
	.availability
		padding: 70px 0
		&__title
			font-size: 40px
			line-height: 1
		&__list
			margin-top: 70px
			gap: 40px
		&__image
			height: 180px
		&__name
			font-size: 30px
			line-height: 1
		&__price
			font-size: 14px
		&__li
			font-size: 12px
			line-height: 1.5
@include md-desktop
	.availability
		padding: 30px 0
		&__list
			display: block
			margin-top: 30px
			width: 100%
		&__item
			max-width: 280px
			width: 100%
			margin-left: auto
			margin-right: auto
			margin-bottom: 20px
		&__image
			height: 200px
			img
				width: 100%
				height: auto
</style>
