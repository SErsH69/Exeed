<template>
	<div class="spec_page">
		<v-header></v-header>
		<spec-main></spec-main>
		<v-footer></v-footer>
	</div>
</template>

<script>
import vHeader from "@/components/vHeader";
import specMain from "@/components/spec/specMain";

import vFooter from "@/components/vFooter";
export default {
	components: {
		vHeader,
		specMain,
		vFooter
	}
};
</script>
<style lang="sass"></style>
