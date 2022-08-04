<template>
	<section id="design">
		<div class="design-image">
			<img
				:src="require(`@/assets/img/${car.id}/${car.design.info[image].img}`)"
				:alt="car.design.info[image].title"
				loading="lazy"
			/>
		</div>
		<div class="design-content">
			<div class="design-title">{{ car.design.title }}</div>
			<el-collapse v-model="activeName" :change="changeCollapse()" accordion>
				<el-collapse-item
					:title="col.title"
					:name="index"
					v-for="(col, index) in car.design.info"
					:key="index"
				>
					<div v-html="col.text" class="design-text"></div>
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
#design
	display: flex
.design-image
	width: 50%
	img
		object-fit: cover
		display: block
		height: 100%
		width: 100%
.design-content
	width: 50%
	padding: 139px
	background: #F2F2F2
.design-title
	font-size: 60px
	color: $dark
	font-weight: 300
	text-transform: uppercase
	line-height: 1em
@include notebook
	.design-content
		padding: 93px 85px
	.design-title
		font-size: 40px
@include lg-desktop
	.design-content
		padding: 40px 20px
@include sm-tablets
	#design
		flex-wrap: wrap
	.design-image
		width: 100vw
		height: 100vw
		order: 2
	.design-content
		width: 100%
	.design-title
		font-size: 30px
</style>
