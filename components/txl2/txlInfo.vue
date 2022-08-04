<template>
	<div class="txlInfo">
		<div class="txlInfo__items">
			<div class="txlInfo__item">
				<div
					class="txlInfo__image"
					:style="
						`background-image: url(${require('@/assets/img/txl2/info-1.jpg')})`
					"
				></div>
				<div class="txlInfo__container">
					<div class="txlInfo__content">
						<div class="txlInfo__title">
							Мощный и экономичный двигатель 2.0 TGDI
						</div>
						<div class="txlInfo__text">
							Новый турбомотор c фазовращателями на впуске и выпуске отличают
							уменьшенная масса, улучшенная балансировка и превосходные
							эксплуатационные показатели: 197 лошадиных сил и 375 Нм, снятые с
							двух литров объема, позволяют набирать 100 км/ч всего за 9 секунд.
							При этом расход в смешанном цикле не превышает 8,7 л/100 км. Вклад
							в экономичность вносит и система Start/Stop.
						</div>
					</div>
				</div>
			</div>
			<div class="txlInfo__item">
				<div
					class="txlInfo__image"
					:style="
						`background-image: url(${require('@/assets/img/txl2/info-2.jpg')})`
					"
				></div>
				<div class="txlInfo__container">
					<div class="txlInfo__content">
						<div class="txlInfo__title">
							Спортивные и статусные акценты
						</div>
						<div class="txlInfo__text">
							Подчеркнуть взрывной темперамент EXEED TXL с двигателем 2.0 TGDI
							призваны контрастные тормозные суппорты и затемненные задние
							стекла. А боковые зеркала обзавелись функцией автоматической
							регулировки при движении задним ходом.
						</div>
					</div>
				</div>
			</div>
			<div class="txlInfo__item">
				<div
					class="txlInfo__image"
					:style="
						`background-image: url(${require('@/assets/img/txl2/info-3.jpg')})`
					"
				></div>
				<div class="txlInfo__container">
					<div class="txlInfo__content">
						<div class="txlInfo__title">
							Акустические стекла и новые «теплые опции»
						</div>
						<div class="txlInfo__text">
							Комфорт водителя и всех пассажиров — один из главных приоритетов
							EXEED. В активе нового TXL с двухлитровым турбомотором появились
							акустические стекла (лобовое и боковые передние), надежно
							защищающие от любых внешних шумов. А нагревательные элементы
							теперь присутствуют не только в подушках, но и в спинках сидений.
						</div>
					</div>
				</div>
			</div>
			<div class="txlInfo__item">
				<div
					class="txlInfo__image"
					:style="
						`background-image: url(${require('@/assets/img/txl2/info-4.jpg')})`
					"
				></div>
				<div class="txlInfo__container">
					<div class="txlInfo__content">
						<div class="txlInfo__title">
							Бортовые гаджеты и зарядные слоты
						</div>
						<div class="txlInfo__text">
							Интерьер мощной версии внедорожника украшает иной селектор
							трансмиссии — точь-в-точь как у флагманской модели VX. Появился
							встроенный бортовой регистратор, позволяющий забыть о громоздких
							внешних устройствах и проводах. А к привычным USB-слотам
							добавилась пара гнезд нового формата Type-C. Один на переднем
							ряду, второй — на заднем.
						</div>
					</div>
				</div>
			</div>
			<div class="txlInfo__item">
				<div
					class="txlInfo__image"
					:style="
						`background-image: url(${require('@/assets/img/txl2/info-5.jpg')})`
					"
				></div>
				<div class="txlInfo__container">
					<div class="txlInfo__content">
						<div class="txlInfo__title">
							Улучшенный уровень комфорта
						</div>
						<div class="txlInfo__text">
							Удобная подножка и полноразмерное запасное колесо на легкосплавном
							диске — удобнее и приятнее докатки.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.txlInfo
	&__item
		display: flex
		min-height: 540px
		&:nth-child(even)
			.txlInfo__container
				order: -1
				background-color: #181B1D
	&__image
		width: 50%
		background-size: cover
		background-repeat: no-repeat
		background-position: center center 0
	&__container
		width: 50%
		display: flex
		align-items: center
		justify-content: center
		padding: 80px 140px
		flex-wrap: wrap
		background-color: #30363A
	&__title
		width: 100%
		font-size: 50px
		font-weight: 300
		line-height: 1
		text-transform: uppercase
		color: #fff
	&__text
		width: 100%
		margin-top: 40px
		color: #fff
		font-size: 18px
		color: #DEDEDE
		line-height: 1.7
@include notebook
	.txlInfo__container
		padding: 60px
	.txlInfo__title
		font-size: 36px
	.txlInfo__text
		margin-top: 20px
		font-size: 16px
	.txlInfo__item
		min-height: 450px
@include sm-tablets
	.txlInfo__item
		display: block
		min-height: auto
	.txlInfo__image
		height: 240px
		width: 100%
	.txlInfo__container
		width: 100%
		padding: 30px 15px
	.txlInfo__title
		font-size: 20px
		line-height: 1.2
	.txlInfo__text
		display: none
</style>
