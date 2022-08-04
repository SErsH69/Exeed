<template>
	<div class="lxDynamic">
		<div class="container">
			<div class="lxPageSlider__content">
				<div class="lxPageSlider__title">Динамика</div>
				<div class="lxPageSlider__text">
					Стильная внешность и качественный интерьер с множеством передовых
					опций – лишь вершина айсберга. Современный двигатель, трансмиссия и
					подвеска словно созданы для людей, легких на подъем. В любой поездке
					по любым дорогам вы непременно оцените превосходную динамику нового
					EXEED LX.
				</div>
				<el-button class="light-btn detailBtn" @click.prevent="showModal"
					>в деталях</el-button
				>
			</div>
		</div>
		<lx-details
			v-show="isModalVisible"
			id="lxDetailsDynamic"
			@close="closeModal"
			title="Динамика"
		>
			<template v-slot:content>
				<div v-swiper:lxDynamicSwiper="swiperOption" class="lxDetails__slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide lxDetails__item">
							<img
								:src="require('@/assets/img/lx/dynamic-1.jpg')"
								alt="Модульная платформа T1X и шасси Benteler"
								class="lxDetails__image"
							/>
							<div class="lxDetails__item-content">
								<div class="lxDetails__item-title">
									Модульная платформа T1X и шасси Benteler
								</div>
								<div class="lxDetails__item-text">
									Синергия основных элементов создает автомобиль с превосходными
									динамическими характеристиками, отличной геометрической
									проходимостью и уровнем комфорта.
								</div>
							</div>
						</div>
						<div class="swiper-slide lxDetails__item">
							<img
								:src="require('@/assets/img/lx/dynamic-2.jpg')"
								alt="Двигатель 1.5TCI 147 л.с.
"
								class="lxDetails__image"
							/>
							<div class="lxDetails__item-content">
								<div class="lxDetails__item-title">
									Двигатель 1.5TCI 147 л.с.
								</div>
								<div class="lxDetails__item-text">
									Двигатель 1.5T имеет мощность 147 л.с., что соответствует
									мощности среднего атмосферного бензинового двигателя ~ 2,0 л.
									(140 -150 л.с.). Расход топлива – один из лучших в классе.
									Максимальный крутящий момент 210 нм достигается в диапазоне
									оборотов коленчатого вала 1750-4000 об/мин, а не менее 80% от
									максимального его значения – во всём рабочем диапазоне
									двигателя (от 1350 до «отсечки» на 6000 об/мин). Расход
									топлива – один из лучших в классе.
								</div>
							</div>
						</div>
					</div>
					<div class="lxDetails__nav">
						<div class="lxDetails-prev lxDetails-nav-btn">
							<svg
								width="12"
								height="22"
								viewBox="0 0 12 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.235 -1.84047e-06C11.439 -1.8583e-06 11.6211 0.0716839 11.7814 0.215052C11.9271 0.358421 12 0.530464 12 0.731182C12 0.931898 11.9271 1.10394 11.7814 1.24731L1.79235 11.0753L11.6284 20.7312C11.7158 20.8315 11.7814 20.9462 11.8251 21.0753C11.8543 21.2043 11.8543 21.3262 11.8251 21.4409C11.7814 21.5699 11.7158 21.6846 11.6284 21.7849C11.4827 21.9283 11.3078 22 11.1038 22C10.8852 22 10.7031 21.9283 10.5574 21.7849L0.21858 11.5914C0.145721 11.5197 0.094719 11.4337 0.0655747 11.3333C0.0218592 11.2473 9.59172e-07 11.1541 9.50398e-07 11.0538C9.42878e-07 10.9677 0.0218592 10.8817 0.0655746 10.7957C0.0947189 10.7097 0.14572 10.6308 0.21858 10.5591L10.7104 0.215052C10.7832 0.143368 10.8707 0.0931893 10.9727 0.0645142C11.0601 0.0215035 11.1475 -1.83282e-06 11.235 -1.84047e-06Z"
								/>
							</svg>
						</div>
						<div class="lxDetails__nav-text">
							<div class="lxDetails-pagination"></div>
						</div>
						<div class="lxDetails-next lxDetails-nav-btn">
							<svg
								width="12"
								height="22"
								viewBox="0 0 12 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.765027 22C0.56102 22 0.378871 21.9283 0.218579 21.7849C0.0728597 21.6416 0 21.4695 0 21.2688C0 21.0681 0.0728597 20.8961 0.218579 20.7527L10.2077 10.9247L0.371585 1.26882C0.284153 1.16846 0.218579 1.05376 0.174863 0.924731C0.145719 0.795699 0.145719 0.673835 0.174863 0.55914C0.218579 0.430108 0.284153 0.315412 0.371585 0.215054C0.517304 0.0716846 0.692168 0 0.896175 0C1.11475 0 1.2969 0.0716846 1.44262 0.215054L11.7814 10.4086C11.8543 10.4803 11.9053 10.5663 11.9344 10.6667C11.9781 10.7527 12 10.8459 12 10.9462C12 11.0323 11.9781 11.1183 11.9344 11.2043C11.9053 11.2903 11.8543 11.3692 11.7814 11.4409L1.28962 21.7849C1.21676 21.8566 1.12933 21.9068 1.02732 21.9355C0.939891 21.9785 0.852459 22 0.765027 22Z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</template>
		</lx-details>
	</div>
</template>

<script>
import lxDetails from "@/components/lx/lxDetails";
export default {
	components: {
		lxDetails
	},
	data() {
		return {
			activeSlide: 1,
			slidesLength: 1,
			isModalVisible: false,
			swiperOption: {
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
						pagination: {
							type: "fraction",
							el: ".lxDetails-pagination"
						},
						navigation: {
							nextEl: ".lxDetails-next",
							prevEl: ".lxDetails-prev"
						}
					},
					996: {
						slidesPerView: 2,
						spaceBetween: 120,
						pagination: {
							type: "fraction",
							el: ".lxDetails-pagination"
						},
						navigation: {
							nextEl: ".lxDetails-next",
							prevEl: ".lxDetails-prev"
						}
					}
				}
			}
		};
	},
	methods: {
		showModal() {
			this.isModalVisible = true;
			setTimeout(() => {
				this.lxDynamicSwiper.update();
			}, 100);
			this.slidesLength = this.lxDynamicSwiper.slides.length;
			document.body.style.cssText = "overflow: hidden; padding-right: 8px";
		},
		closeModal() {
			document.body.style.cssText = "";
			this.isModalVisible = false;
		}
	}
};
</script>

<style lang="sass">
.lxDynamic
	background-repeat: no-repeat
	background-position: center
	background-size: cover
	background-attachment: fixed
	background-image: url('@/assets/img/lx/dynamic.jpg')
	position: relative
	&:after
		content: ''
		position: absolute
		left: 0
		top: 0
		right: 0
		bottom: 0
		background: linear-gradient(90deg, #181B1D 0%, rgba(24, 27, 29, 0) 100%)
		opacity: 0.5
</style>
