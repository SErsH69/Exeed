<template>
	<section id="safety">
		<div class="safety-content">
			<div class="safety-title">{{ car.safety.title }}</div>
			<el-collapse
				class="dark"
				v-model="activeName"
				:change="changeCollapse()"
				accordion
			>
				<el-collapse-item
					:title="col.title"
					:name="index"
					v-for="(col, index) in car.safety.info"
					:key="index"
				>
					<div v-html="col.text" class="safety-text"></div>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div class="safety-image">
			<img
				:src="require(`@/assets/img/${car.id}/${car.safety.info[image].img}`)"
				:alt="car.safety.info[image].title"
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
#safety
	display: flex
.safety-image
	max-width: 50%
	width: 100%
	img
		object-fit: cover
		display: block
		height: 100%
		width: 100%
.safety-content
	max-width: 50%
	width: 100%
	padding: 139px
	background: $black
.safety-title
	font-size: 60px
	color: #fff
	font-weight: 300
	text-transform: uppercase
	line-height: 1em
@include notebook
	.safety-content
		padding: 93px 85px
	.safety-title
		font-size: 40px
@include lg-desktop
	.safety-content
		padding: 40px 20px
@include sm-tablets
	#safety
		flex-wrap: wrap
	.safety-image
		width: 100vw
		height: 100vw
		max-width: 100%
		order: 2
	.safety-content
		width: 100%
		max-width: 100%
	.safety-title
		font-size: 30px
</style>
