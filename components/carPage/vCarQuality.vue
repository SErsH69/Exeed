<template>
	<section id="quality">
		<div class="quality-image">
			<img
				:src="require(`@/assets/img/${car.id}/${car.quality.info[image].img}`)"
				:alt="car.quality.info[image].title"
				loading="lazy"
			/>
		</div>
		<div class="quality-content">
			<div class="quality-title">{{ car.quality.title }}</div>
			<el-collapse v-model="activeName" :change="changeCollapse()" accordion>
				<el-collapse-item
					:title="col.title"
					:name="index"
					v-for="(col, index) in car.quality.info"
					:key="index"
				>
					<div v-html="col.text" class="quality-text"></div>
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
#quality
	display: flex
.quality-image
	width: 50%
	img
		object-fit: cover
		display: block
		height: 100%
		width: 100%
.quality-content
	width: 50%
	padding: 139px
	background: #F2F2F2
.quality-title
	font-size: 60px
	color: $dark
	font-weight: 300
	text-transform: uppercase
	line-height: 1em
@include notebook
	.quality-content
		padding: 93px 85px
	.quality-title
		font-size: 40px
@include lg-desktop
	.quality-content
		padding: 40px 20px
@include sm-tablets
	#quality
		flex-wrap: wrap
	.quality-image
		width: 100vw
		height: 100vw
		max-width: 100%
		order: 2
	.quality-content
		width: 100%
		max-width: 100%
	.quality-title
		font-size: 30px
</style>
