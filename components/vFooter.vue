<template>
	<footer id="footer">
		<div class="container">
			<div class="footer-top">
				<div class="footer-head">
					<div class="footer-logo">
						<div class="footer-logo_image">
							<nuxt-link to="/">
								<img
									:src="require('@/assets/img/exeed-logo.png')"
									alt="EXEED"
									loading="lazy"
								/>
							</nuxt-link>
						</div>
						<div class="footer-logo_title">EXEED ЦЕНТР КАРС СТОК</div>
					</div>
					<div class="footer-menu">
						<nuxt-link to="/lx">lx</nuxt-link>
						<nuxt-link to="/txl">txl</nuxt-link>
						<nuxt-link to="/vx">vx</nuxt-link>
						<a href="#" @click.prevent="openPopup()">получить предложение</a>
					</div>
				</div>
				<div class="footer-contacts">
					<div class="footer-phone">
						<div class="footer-label">Телефон:</div>
						<p class="footer-value"><v-phone></v-phone></p>
					</div>
					<div class="footer-address">
						<div class="footer-label">Адреса салонов:</div>
						<p class="footer-value">
							<b>Флагманский салон</b><br />
							Московская область, <br />
							Берёзовая аллея, 1, корп. 6 <br />
							(24 км от МКАД по Минскому шоссе)
						</p>
						<p class="footer-value">
							Москва, <br />
							Сельскохозяйственная 30 стр. 1
						</p>
					</div>
					<ul class="footer-social">
						<!-- <li class="instagram">
							<a href="https://instagram.com/exeed.rostokino" target="_blank">
								<img
									:src="require('@/assets/img/instagram.svg')"
									alt="instagram"
									loading="lazy"
								/>
							</a>
						</li> -->
						<!-- <li class="vkontakte">
							<a href="https://vk.com/exeedru" target="_blank">
								<img
									:src="require('@/assets/img/vk.svg')"
									alt="vk"
									loading="lazy"
								/>
							</a>
						</li> -->
						<!-- <li class="facebook">
							<a href="https://m.facebook.com/exeed.rostokino/" target="_blank">
								<img
									:src="require('@/assets/img/facebook.svg')"
									alt="facebook"
									loading="lazy"
								/>
							</a>
						</li> -->
						<!-- <li class="youtube">
							<a href="https://www.youtube.com/c/CheryRussia" target="_blank">
								<img
									:src="require('@/assets/img/youtube.svg')"
									alt="youtube"
									loading="lazy"
								/>
							</a>
						</li> -->
					</ul>
				</div>
			</div>
			<div class="footer-bottom">
				<p>
					© {{ year }} ООО “Карс Сток”
					<br />
					<b>Реквизиты:</b><br />
					ООО «Карс Сток»
					<br />
					Фактический адрес: 143090, Московская обл., г. Краснознаменск, ул.
					Березовая аллея, 1, корп. 6
					<br />
					Юридический адрес: 123112, Москва г, Внутригородская территория
					муниципальный округ Пресненский, Пресненская наб, дом 12, э 45 комната
					11 пом. II
					<br />
					ИНН 7703745433
					<br />

					КПП 770301001
					<br />
					ОГРН 1117746432726
				</p>
				<p>
					<a href="/politic.pdf" target="_black">Политика конфиденциальности</a>
					<br />
					<a href="#" @click.prevent="showDisclaimer = !showDisclaimer"
						>Полные условия акции</a
					>
				</p>
			</div>
			<div class="footer-disclaimer" v-if="showDisclaimer">
				*Максимальная выгода или минимальная цена при покупке автомобиля,
				рассчитывается путем суммирования выгод:
				<br />
				1) по кредитной программе EXEED;
				<br />
				2) по программе TRADE-IN (при сдаче автомобиля марки Chery/EXEED);
				<br />
				4) прямой скидки от салона;
				<br />
				5) выгоды на покупку стандартного набора дополнительного оборудования
				для автомобиля. Максимальная выгода или минимальная цена на каждый
				конкретный автомобиль из наличия рассчитывается индивидуально с клиентом
				в нашем салоне и может отличаться от указанной цены/выгоды в
				предложении. Не является публичной офертой.
				<br /><br />
				*0,01% - процентная ставка по продукту «АвтоСтиль-Особый» в рамках
				программы кредитования новых автомобилей марки EXEED (ЭКСИД)
				TXL(ТиИксЭль), VX (ВиИкс) (все комплектации) LX(ЭлИкс) (все
				комплектации) 2021/2022 года выпуска, «EXEED Direct Light Promo»(ЭКСИД
				Директ Лайт Промо). Параметры программы: валюта кредита – рубли РФ; срок
				кредита – 12,24,36 месяцев; сумма кредита- от 90000 до 6 900 000 рублей;
				процентная ставка – 0,01% годовых, первоначальный взнос – от 40% от цены
				приобретаемого автомобиля. Программой предусмотрено оформление договора
				страхования автомобиля от рисков хищения (угона), утраты (гибели).
				Минимальный пакет документов, необходимый для оформления кредита:
				паспорт гражданина РФ. Залоговое обеспечение – залог приобретаемого
				автомобиля. Предложение действует на 01 июля 2022 года. ПАО
				«Совкомбанк». Генеральная лицензия Банка России № 963 от 05 декабря 2014
				г. Не является публичной офертой
				<br /><br />
				«Карта «Халва»: Клиентам от 20 до 75 лет по паспорту РФ. Обслуживание –
				0 руб. Ставка в течение льготного периода (36 мес.) - 0% год. При его
				нарушении, по окончании – 0,0001% годовых на задолженность с даты
				возникновения. Срок рассрочки от 1 до 30 мес. на покупки в сети
				партнёров с учетом базового срока рассрочки, срока рассрочки по купонам,
				акциям, тарифным планам. Лимит в течение 10 лет до 500 000 руб., по
				решению Банка до 4 900 000 руб. на покупку новых транспортных средств
				автомобилей EXEED(ЭКСИД): LX(ЭльИкс) (все комплектации) 2022 года
				выпуска; TXL(ТиЭскЭль) (все комплектации) 2022 года выпуска ; VX(ВиИкс)
				(все комплектации) 2022 года выпуска); и дополнительного оборудования в
				официальных дилерских центрах при подключении Тарифного плана «Авто в
				рассрочку на 18 месяцев NEW(Нью)»» или « Авто в рассрочку на 24 месяца
				NEW(Нью)» или «Авто в рассрочку на 30 месяцев NEW (Нью)». Комиссия за
				подключение: «Авто в рассрочку на 18 месяцев NEW (Нью) "- 1/18 от суммы
				увеличенного лимита в рамках тарифного плана, взимается при несоблюдении
				условия ежемесячного совершения от 5 покупок по «Карта «Халва» на общую
				сумму от 10 000 руб.; «Авто в рассрочку на 24 месяца NEW(Нью)» - 2/24 от
				суммы увеличенного лимита в рамках тарифного плана, где 1/24 взимается
				(безусловно) за увеличение срока рассрочки до 24 мес. и 1/24 взимается
				при несоблюдении вышеуказанных условий о покупках; «Авто в рассрочку на
				30 месяцев NEW(Нью)» - 4/30 от суммы увеличенного лимита в рамках
				тарифного плана, где 2/30 взимается (безусловно) за увеличение срока
				рассрочки до 30 мес. и 2/30 взимается при несоблюдении вышеуказанных
				условий о покупках. Договором предусмотрено оформление договора
				страхования автомобиля от рисков хищения (угона), утраты (гибели).
				Залоговое обеспечение – залог приобретаемого транспортного средства.
				Предложение действует с 01.07.2022 года по 31.07.2022 года
				(включительно). ПАО «Совкомбанк». Генеральная лицензия Банка России №
				963 от 05 декабря 2014 г. Не является офертой. «Подробности уточняйте у
				официальных дилеров «ЭКСИД», список которых расположен на сайте
				https://exeed.ru/dealers/. Представленные на изображениях автомобили
				могут отличаться от серийных моделей. Указанное в рекламе оборудование
				может быть опциональным.»
				<br />Подробности узнавайте в отделе продаж EXEED ЦЕНТР КАРС СТОК
			</div>
		</div>
	</footer>
</template>

<script>
import vPhone from "@/components/vPhone";
export default {
	data() {
		return {
			showDisclaimer: false
		};
	},
	components: {
		vPhone
	},
	computed: {
		year() {
			const date = new Date();
			return date.getFullYear();
		}
	}
};
</script>

<style lang="sass">
#footer
	background-color: $dark
	color: #fff
	position: relative
	z-index: 4
.footer-head
	display: flex
	width: 100%
	justify-content: space-between
	align-items: center
.footer-logo_title
	padding-left: 30px
	border-left: 1px solid $accent
	text-transform: uppercase
	font-size: 12px
	letter-spacing: 1px
.footer-disclaimer
	margin-bottom: 20px
	font-size: 12px
	color: $graylight
	line-height: 1.7
.footer-logo
	display: flex
	align-items: center
.footer-logo_image
	margin-right: 30px
.footer-top
	width: 100%
	padding: 44px 0
.footer-menu
	a
		font-size: 12px
		color: #fff
		text-transform: uppercase
		letter-spacing: 2px
		margin-left: 40px
		text-decoration: none
		&:hover
			color: $accent
			text-decoration: underline
.footer-contacts
	display: flex
	justify-content: space-between
	margin-top: 44px
.footer-social
	margin-left: auto
	list-style-type: none
	display: flex
	align-items: center
	li
		width: 50px
		height: 50px
		border-radius: 50%
		background-color: $black
		position: relative
		overflow: hidden
		margin-left: 20px
		transition: .3s ease
		&:hover
			background-color: $accent
		a
			top: 0
			position: absolute
			bottom:  0
			right: 0
			left: 0
			display: flex
			justify-content: center
			align-items: center
.footer-label
	font-size: 12px
	line-height: 1.4em
	color: $graylight
	font-weight: 500
.footer-value
	font-size: 12px
	line-height: 1.4em
	color: $graylight
	margin-top: 10px
.footer-phone .phone a
	font-size: 20px
	letter-spacing: 1px
	color: #fff
	font-weight: 400
.footer-address
	margin-left: 99px
.footer-bottom
	display: flex
	justify-content: space-between
	width: 100%
	padding: 40px 0
	border-top: 1px solid rgba(255,255,255, .2)
	p, a
		font-size: 12px
		line-height: 1.4em
		font-weight: 500
		color: $graylight
@include md-desktop
	.footer-head
		flex-direction: column
	.footer-menu
		margin-top: 20px
	.footer-contacts
		flex-direction: column
	.footer-phone
		text-align: center
	.footer-address
		margin-left: 0
		margin-top: 20px
		text-align: center
	.footer-social
		margin-top: 20px
		margin-left: auto
		margin-right: auto
@include sm-tablets
	.footer-logo
		flex-wrap: wrap
	.footer-logo_image
		margin: 0
		width: 100%
	.footer-logo_title
		border: none
		position: relative
		margin-top: 15px
		padding-top: 15px
		padding-left: 0
		&::after
			content: ''
			position: absolute
			top: 0
			left: 0
			width: 30px
			border-top: 1px solid $accent
	.footer-menu
		display: none
	.footer-contacts
		margin-top: 30px
	.footer-phone
		text-align: left
	.footer-address
		margin-top: 30px
		text-align: left
	.footer-social
		margin-top: 45px
		li
			margin-left: 0
			margin-right: 20px
	.footer-top
		padding: 30px 0
	.footer-bottom
		padding: 30px 0
		flex-wrap: wrap
	.footer-head
		align-items: flex-start
</style>
