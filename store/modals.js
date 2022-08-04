export const state = () => ({
	callBack: false,
	agreement: false,
	gallery: false,
	modal: {
		open: false,
		title: ""
	}
});

export const mutations = {
	modalOpen(state, { name = "callBack", title, gallery }) {
		state.modal.open = true;
		state.modal.title = title || "Оставьте заявку и мы Вам перезвоним";
		console.log(state);
		name === "gallery" ? (state[name] = gallery) : (state[name] = true);
	},
	modalClose(state, { name }) {
		state.modal.open = false;
		state[name] = false;
	},
	galleryNext(state) {
		if (state.gallery) {
			state.gallery.photos.length - 1 !== state.gallery.active
				? state.gallery.active++
				: (state.gallery.active = 0);
		}
	},
	galleryPrev(state) {
		if (state.gallery) {
			state.gallery.active !== 0
				? state.gallery.active--
				: (state.gallery.active = state.gallery.photos.length - 1);
		}
	}
};

export const getters = {
	title: s => s.modal.title,
	visible: s => s.modal.open,
	gallery: s => s.gallery,
	callback: s => s.callBack,
	agreement: s => s.agreement
};
