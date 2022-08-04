<template>
	<div id="promo" class="promo">
		<v-header></v-header>
		<lx-main></lx-main>
		<lx-page-slider></lx-page-slider>
		<!-- <v-contacts></v-contacts> -->
		<!-- <v-benefits></v-benefits> -->
		<!-- <v-test-drive></v-test-drive> -->
		<!-- <v-instagram></v-instagram> -->
		<!-- <v-reviews></v-reviews> -->
		<v-footer></v-footer>
	</div>
</template>

<script>
import vHeader from "@/components/vHeader";
import lxMain from "@/components/lx/lxMain";
import lxPageSlider from "@/components/lx/lxPageSlider";
//import vNewCar from "@/components/vNewCar";
// import vContacts from "@/components/vContacts";
// import vBenefits from "@/components/vBenefits";
// import vTestDrive from "@/components/vTestDrive";
// import vInstagram from "@/components/vInstagram";
// import vReviews from "@/components/vReviews";
import vFooter from "@/components/vFooter";
export default {
	components: {
		vHeader,
		lxMain,
		lxPageSlider,
		// vNewCar,
		// vContacts,
		// vBenefits,
		// vTestDrive,
		// vInstagram,
		// vReviews,
		vFooter
	}
};
</script>
<style lang="sass">
.promo
	max-width: 100vw
	overflow-x: hidden
</style>
