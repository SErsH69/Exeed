export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch("cars/load");
	}
};
