<template>
	<section id="comfort">
		<div class="comfort-image">
			<img
				:src="require(`@/assets/img/${car.id}/${car.comfort.info[image].img}`)"
				:alt="car.comfort.info[image].title"
				loading="lazy"
			/>
		</div>
		<div class="comfort-content">
			<div class="comfort-title">{{ car.comfort.title }}</div>
			<el-collapse v-model="activeName" :change="changeCollapse()" accordion>
				<el-collapse-item
					:title="col.title"
					:name="index"
					v-for="(col, index) in car.comfort.info"
					:key="index"
				>
					<div v-html="col.text" class="comfort-text"></div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</section>
</template>

<script>
export default {
	props: ["car"],
	data() {
		return {
			activeName: null,
			image: 0
		};
	},
	methods: {
		changeCollapse() {
			this.activeName ? (this.image = this.activeName) : (this.image = 0);
		}
	}
};
</script>

<style lang="sass">
#comfort
	display: flex
.comfort-image
	width: 50%
	img
		object-fit: cover
		display: block
		width: 100%
		height: 100%
.comfort-content
	width: 50%
	padding: 139px
	background: #F2F2F2
.comfort-title
	font-size: 60px
	color: $dark
	font-weight: 300
	text-transform: uppercase
	line-height: 1em
@include notebook
	.comfort-content
		padding: 93px 85px
	.comfort-title
		font-size: 40px
@include lg-desktop
	.comfort-content
		padding: 40px 20px
@include sm-tablets
	#comfort
		flex-wrap: wrap
	.comfort-image
		width: 100vw
		height: 100vw
		max-width: 100%
		order: 2
	.comfort-content
		width: 100%
		max-width: 100%
	.comfort-title
		font-size: 30px
</style>
