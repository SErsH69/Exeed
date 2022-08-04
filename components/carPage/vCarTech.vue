<template>
	<section id="technology">
		<div class="technology-content">
			<div class="technology-title">{{ car.technology.title }}</div>
			<el-collapse
				class="dark"
				v-model="activeName"
				:change="changeCollapse()"
				accordion
			>
				<el-collapse-item
					:title="col.title"
					:name="index"
					v-for="(col, index) in car.technology.info"
					:key="index"
				>
					<div v-html="col.text" class="technology-text"></div>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div class="technology-image">
			<img
				:src="
					require(`@/assets/img/${car.id}/${car.technology.info[image].img}`)
				"
				:alt="car.technology.info[image].title"
				loading="lazy"
			/>
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
#technology
	display: flex
.technology-image
	max-width: 50%
	width: 100%
	img
		object-fit: cover
		display: block
		height: 100%
		width: 100%
.technology-content
	max-width: 50%
	width: 100%
	padding: 139px
	background: $black
.technology-title
	font-size: 60px
	color: #fff
	font-weight: 300
	text-transform: uppercase
	line-height: 1em
@include notebook
	.technology-content
		padding: 93px 85px
	.technology-title
		font-size: 40px
@include lg-desktop
	.technology-content
		padding: 40px 20px
@include sm-tablets
	#technology
		flex-wrap: wrap
	.technology-image
		width: 100vw
		height: 100vw
		max-width: 100%
	.technology-content
		width: 100%
		max-width: 100%
	.technology-title
		font-size: 30px
</style>
