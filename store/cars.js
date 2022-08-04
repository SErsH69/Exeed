export const state = () => ({
	cars: null
});
export const mutations = {
	setCars(state, cars) {
		state.cars = cars;
	}
};

export const actions = {
	async load({ commit }) {
		const response = await fetch("https://ks-exeed.ru/cars.json");
		// const response = await fetch("http://localhost:3000/cars.json");
		let cars = await response.json();
		commit("setCars", cars);
	}
};

export const getters = {
	cars: s => s.cars,
	car: s => id => s.cars.find(car => car.id === id)
};
