<template>
	<div class="spec_page">
		<v-header></v-header>
		<speccard-main></speccard-main>
		<v-contacts></v-contacts>
		<v-footer></v-footer>
	</div>
</template>

<script>
import vHeader from "@/components/vHeader";
import speccardMain from "@/components/speccard/speccardMain";
import vContacts from "@/components/vContacts";

import vFooter from "@/components/vFooter";
export default {
	components: {
		vHeader,
		speccardMain,
		vContacts,
		vFooter
	}
};
</script>
<style lang="sass"></style>
