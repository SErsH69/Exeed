export const state = () => ({
	phone: "",
	toGisPhone: "+74951264498",
	yandexPhone: "+74951261803",
	mainPhone: "+74951287475",
	time_work_from: 9, // Начало работы колл-центра (в часах)
	time_work_to: 21, // Конец работы колл-центра (в часах)
	months: [
		"январь",
		"февраль",
		"март",
		"апрель",
		"май",
		"июнь",
		"июль",
		"август",
		"сентябрь",
		"октябрь",
		"ноябрь",
		"декабрь"
	],
	months_2: [
		"январе",
		"феврале",
		"марте",
		"апреле",
		"мае",
		"июне",
		"июле",
		"августе",
		"сентябре",
		"октябре",
		"ноябре",
		"декабре"
	],
	months_3: [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря"
	]
});

export const mutations = {
	setPhone(state) {
		state.phone = state.mainPhone;
		if (this.$router.currentRoute.query.utm_source === "2gis")
			state.phone = state.toGisPhone;
		if (this.$router.currentRoute.query.utm_source === "yandexkart")
			state.phone = state.yandexPhone;
	}
};

export const actions = {
	checkPhones({ commit }) {
		commit("setPhone");
	}
};

export const getters = {
	phone: s => s.phone,
	time_work_from: s => s.time_work_from,
	time_work_to: s => s.time_work_to,
	months: s => m => s.months[+m],
	months_2: s => m => s.months_2[+m],
	months_3: s => m => s.months_3[+m]
};
