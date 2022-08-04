import cars from "./static/cars.json";
let dynamicRoutes = () => {
	return new Promise(resolve => {
		resolve(cars.map(el => `/${el.id}`));
	});
};
export default {
	target: "static",
	/*
	 ** Headers of the page
	 */
	head: {
		title:
			"EXEED ЦЕНТР КАРС СТОК — Официальный дилер EXEED в Москве и Краснознаменске. Купить новый EXEED с выгодой до 990 400 руб. Авторассрочка 0%",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content:
					"EXEED ЦЕНТР КАРС СТОК — Официальный дилер EXEED в Москве и Краснознаменске. У нас Вы можете купить новый премиальный автомобиль EXEED с выгодой до 990 400 руб. Выгодные кредитные программы на покупку EXEED, авторассрочка 0%."
			},
			{
				hid: "keywords",
				name: "keywords",
				content:
					"EXEED, LX, TXL, VX, купить, официальный, дилер, новый, Москва, Краснознаменск, продажа"
			},
			{
				hid: "yandex-verification",
				name: "yandex-verification",
				content: "4d0c8c2a74712751"
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},
	generate: {
		routes: dynamicRoutes
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#30363A" },
	/*
	 ** Global CSS
	 */
	css: ["~/sass/main.sass"],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		"@/plugins/element-ui",
		"@plugins/send.js",
		"@plugins/modals.js",
		{ src: "~/plugins/swiper.js", mode: "client" },
		{ src: "~/plugins/ymapPlugin.js", mode: "client" }
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		"@nuxtjs/style-resources"
		// "@nuxtjs/gtm",
		// "@nuxtjs/axios"
		// ["nuxt-mailru-counter", { id: "3209655" }]
	],
	// gtm: {
	// 	id: "GTM-K8J2SG6"
	// },
	styleResources: {
		sass: ["~/sass/mixins/*.sass", "~/sass/vars.sass"]
	},
	router: {
		mode: "history"
	},
	/*
	 ** Build configuration
	 */
	build: {
		transpile: [/^element-ui/]
		/*
		 ** You can extend webpack config here
		 */
	}
};
