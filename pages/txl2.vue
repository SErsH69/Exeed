<template>
	<div class="txl2">
		<v-header></v-header>
		<txl-main></txl-main>
		<txl-about></txl-about>
		<txl-info></txl-info>
		<txl-test-drive></txl-test-drive>
		<v-footer></v-footer>
	</div>
</template>

<script>
import vHeader from "@/components/vHeader";
import txlMain from "@/components/txl2/txlMain";
import txlAbout from "@/components/txl2/txlAbout";
import txlInfo from "@/components/txl2/txlInfo";
import txlTestDrive from "@/components/txl2/txlTestDrive";

import vFooter from "@/components/vFooter";
export default {
	components: {
		vHeader,
		txlMain,
		txlAbout,
		txlInfo,
		txlTestDrive,
		vFooter
	}
};
</script>
<style lang="sass"></style>
