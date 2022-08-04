<template>
	<section id="gallery">
		<div class="gallery-title">
			галерея
		</div>
		<div class="gallery-list">
			<div
				v-for="(img, index) in car.gallery"
				class="gallery-list--item"
				:key="index"
				v-show="index < showPhotos"
				@click.prevent="openPopup('gallery', false, links(index))"
			>
				<img
					:src="require(`~/assets/img/${car.id}/gallery/${img}`)"
					alt=""
					loading="lazy"
				/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ["car"],
	data() {
		return {
			showPhotos: 6
		};
	},
	methods: {
		links(index) {
			let arr = {
				photos: [],
				active: index
			};
			for (let i = 0; i < this.car.gallery.length; i++) {
				const link = require(`~/assets/img/${this.car.id}/gallery/${this.car.gallery[i]}`);
				arr.photos.push(link);
			}
			return arr;
		}
	},
	mounted() {
		if (window.innerWidth <= 768) this.showPhotos = 4;
	}
};
</script>

<style lang="sass">
.gallery-title
	font-weight: 300
	color: $dark
	text-transform: uppercase
	font-size: 60px
	line-height: 1em
	text-align: center
	padding: 100px 0
.gallery-list
	display: flex
	flex-wrap: wrap
.gallery-list--item
	flex: 0 0 25%
	max-width: 25%
	position: relative
	overflow: hidden
	height: 50vh
	cursor: pointer
	&:hover
		img
			transform: scale(1.5)
	img
		object-fit: cover
		display: block
		height: 100%
		width: 100%
		transition: 3s ease-in-out
.gallery-list--item:nth-child(1),
.gallery-list--item:nth-child(6)
	flex: 0 0 50%
	max-width: 50%
@include notebook
	.gallery-list--item
		height: 300px
@include sm-tablets
	.gallery-list--item
		flex: 0 0 50vw
		max-width: 50vw
		height: 50vw
	.gallery-title
		font-size: 30px
		padding: 40px 0
</style>
