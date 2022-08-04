<template>
	<div id="car-page">
		<v-header
			:nav="{
				design: car.design ? true : false,
				technology: car.technology ? true : false,
				comfort: car.comfort ? true : false,
				safety: car.safety ? true : false,
				quality: car.quality ? true : false
			}"
		></v-header>
		<v-car-main :car="car"></v-car-main>
		<v-car-nav :car="car"></v-car-nav>
		<v-car-config :car="car"></v-car-config>
		<v-car-design v-if="car.design" :car="car"></v-car-design>
		<v-car-tech v-if="car.technology" :car="car"></v-car-tech>
		<v-car-comfort v-if="car.comfort" :car="car"></v-car-comfort>
		<v-car-safety v-if="car.safety" :car="car"></v-car-safety>
		<v-car-quality v-if="car.quality" :car="car"></v-car-quality>
		<v-test-drive :car="car"></v-test-drive>
		<v-car-gallery v-if="car.gallery" :car="car"></v-car-gallery>
		<v-contacts></v-contacts>
		<v-benefits></v-benefits>
		<v-footer></v-footer>
	</div>
</template>

<script>
import vHeader from "@/components/vHeader";
import vCarMain from "@/components/carPage/vCarMain";
import vCarNav from "@/components/carPage/vCarNav";
import vCarConfig from "@/components/carPage/vCarConfig";
import vCarDesign from "@/components/carPage/vCarDesign";
import vCarTech from "@/components/carPage/vCarTech";
import vCarComfort from "@/components/carPage/vCarComfort";
import vCarSafety from "@/components/carPage/vCarSafety";
import vCarQuality from "@/components/carPage/vCarQuality";
import vTestDrive from "@/components/vTestDrive";
import vCarGallery from "@/components/carPage/vCarGallery";
import vContacts from "@/components/vContacts";
import vBenefits from "@/components/vBenefits";
import vFooter from "@/components/vFooter";
export default {
	asyncData({ params, store }) {
		const car = store.getters["cars/car"](params.car);
		return { car };
	},
	components: {
		vHeader,
		vCarMain,
		vCarNav,
		vCarConfig,
		vCarDesign,
		vCarTech,
		vCarComfort,
		vCarSafety,
		vCarQuality,
		vTestDrive,
		vCarGallery,
		vContacts,
		vBenefits,
		vFooter
	}
};
</script>

<style lang="sass">
@include sm-mobile
	#car-page
		overflow-x: hidden
		max-width: 100vw
</style>
