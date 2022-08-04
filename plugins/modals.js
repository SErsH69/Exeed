import Vue from "vue";
Vue.mixin({
	methods: {
		openPopup(name, title, gallery) {
			this.$store.commit("modals/modalOpen", {
				name,
				title,
				gallery
			});
		},
		closePopup(name) {
			this.$store.commit("modals/modalClose", { name });
		}
	}
});
