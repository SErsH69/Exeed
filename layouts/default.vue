<template>
	<div>
		<nuxt />
		<popup-callback />
		<popup-gallery />
		<popup-agreement />
	</div>
</template>
<script>
import popupCallback from "/components/modals/popupCallback";
import popupGallery from "/components/modals/popupGallery";
import popupAgreement from "/components/modals/popupAgreement";

export default {
	components: {
		popupCallback,
		popupGallery,
		popupAgreement
	},
	created() {
		this.$store.dispatch("info/checkPhones");
	}
};
</script>

<style></style>
