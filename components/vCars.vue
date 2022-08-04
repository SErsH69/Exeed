<template>
	<section id="cars" class="cars">
		<v-car-full :car="lx"></v-car-full>
		<v-car-full v-for="car in cars" :key="car.id" :car="car"></v-car-full>
	</section>
</template>

<script>
import vCarFull from "@/components/vCarFull";
export default {
	data() {
		return {
			lx: {
				id: "lx",
				name: "LX",
				price: 2939900,
				rashod: 8,
				razgon: 10.5,
				power: 147,
				benefit: 776400,
				seats: 5,
				guarantee: "7 лет"
			}
		};
	},
	components: {
		vCarFull
	},
	computed: {
		cars() {
			return this.$store.getters["cars/cars"];
		}
	}
};
</script>

<style lang="sass"></style>
