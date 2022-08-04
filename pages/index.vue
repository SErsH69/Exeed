<template>
	<div id="main-page">
		<v-header></v-header>
		<div v-swiper:mainSwiper="swiperOption" class="main__swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide main__item">
					<v-main></v-main>
				</div>
				<div
					class="swiper-slide main__item"
					@click.prevent="changePage('txl2')"
				>
					<txl-main></txl-main>
				</div>
			</div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<v-cars></v-cars>
		<v-special></v-special>
		<!-- <v-new-car></v-new-car> -->
		<v-terms></v-terms>
		<v-availability></v-availability>
		<v-contacts></v-contacts>
		<!-- <v-benefits></v-benefits> -->

		<v-test-drive :car="vx"></v-test-drive>
		<!-- <v-instagram></v-instagram> -->
		<!-- <v-reviews></v-reviews> -->
		<v-footer></v-footer>
	</div>
</template>

<script>
import vHeader from "@/components/vHeader";
import vMain from "@/components/vMain";
import txlMain from "@/components/txl2/txlMain";
import vCars from "@/components/vCars";
//import vNewCar from "@/components/vNewCar";
import vTerms from "@/components/vTerms";
import vAvailability from "@/components/vAvailability";
import vContacts from "@/components/vContacts";
// import vBenefits from "@/components/vBenefits";
import vSpecial from "@/components/vSpecial";
import vTestDrive from "@/components/vTestDrive";
// import vInstagram from "@/components/vInstagram";
// import vReviews from "@/components/vReviews";
import vFooter from "@/components/vFooter";
export default {
	components: {
		vHeader,
		vMain,
		txlMain,
		vCars,
		// vNewCar,
		vTerms,
		vAvailability,
		vContacts,
		// vBenefits,
		vSpecial,
		vTestDrive,
		// vInstagram,
		// vReviews,
		vFooter
	},
	data() {
		return {
			swiperOption: {
				spaceBetween: 0,
				freeMode: false,
				slidesPerView: "auto",
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			}
		};
	},
	methods: {
		changePage(id) {
			console.log(id);
			this.$router.push(id);
		}
	},
	computed: {
		vx() {
			return this.$store.getters["cars/car"]("vx");
		}
	}
};
</script>
<style lang="sass">
#main-page
	max-width: 100vw
	overflow-x: hidden
.main__swiper
	.swiper-button-next, .swiper-button-prev
		color: #fff
</style>
