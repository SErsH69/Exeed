<template>
	<section id="contacts">
		<div class="container">
			<div class="contacts-info">
				<div class="contacts-info--logo">EXEED Центр <br />Карс Сток</div>
				<div class="contacts-info--address">
					<b>Флагманский салон</b><br />
					Московская область, <br />Берёзовая аллея, 1, корп. 6 <br />(24 км от
					МКАД по Минскому шоссе)
				</div>
				<div class="contacts-info--address">
					Москва, <br />Сельскохозяйственная 30 стр. 1
				</div>

				<div class="contacts-info--phone">
					<v-phone />
				</div>
				<div class="contacts-info--graphic">
					Ежедневно, 0{{ time_work_from }}:00 — {{ time_work_to }}:00
				</div>
				<div class="contacts-info--btn">
					<el-button class="black-btn" @click.prevent="openPopup()"
						>получить предложение</el-button
					>
				</div>
			</div>
		</div>
		<client-only>
			<yandex-map :coords="coords2" id="map" :zoom="9" :controls="controls">
				<ymap-marker
					:coords="coords"
					marker-id="123"
					:properties="{
						iconCaption: 'EXEED Центр Карс Сток',
						hintContent: 'EXEED Центр Карс Сток'
					}"
				/>
				<ymap-marker
					:coords="coords2"
					marker-id="124"
					:properties="{
						iconCaption: 'EXEED Центр Карс Сток',
						hintContent: 'EXEED Центр Карс Сток'
					}"
				/>
			</yandex-map>
		</client-only>
	</section>
</template>
<script>
import vPhone from "/components/vPhone";
export default {
	data() {
		return {
			coords: [55.83848, 37.635844],
			coords2: [55.603303, 37.017372],
			controls: ["geolocationControl", "trafficControl", "zoomControl"]
		};
	},
	components: {
		vPhone
	},
	computed: {
		time_work_from() {
			return this.$store.getters["info/time_work_from"];
		},
		time_work_to() {
			return this.$store.getters["info/time_work_to"];
		}
	}
};
</script>

<style lang="sass">
#map
	width: 100%
	height: 500px
#contacts
	.container
		position: relative
	.contacts-info
		position: absolute
		left: 0
		z-index: 2
		top: 15px
		padding: 30px
		max-width: 450px
		width: 100%
		background-color: #fff
		box-shadow: 0px 0px 10px rgba(0, 49, 69, 0.1)
.contacts-info--logo
	font-size: 30px
	line-height: 1em
	text-transform: uppercase
.contacts-info--address
	padding-left: 35px
	background-image: url('@/assets/img/point.svg')
	background-position: left top
	background-size: 15px
	background-repeat: no-repeat
	font-size: 14px
	color: $gray
	margin-top: 30px
.contacts-info--phone
	padding-left: 35px
	background-image: url('@/assets/img/phone.svg')
	background-position: left center
	background-size: 20px
	background-repeat: no-repeat
	font-size: 20px
	letter-spacing: 1px
	margin-top: 20px
	line-height: 1em
	a
		font-weight: normal
.contacts-info--graphic
	padding-left: 35px
	background-image: url('@/assets/img/clock.svg')
	background-position: left center
	background-size: 20px
	background-repeat: no-repeat
	font-size: 14px
	margin-top: 20px
.contacts-info--btn
	margin-top: 30px
@include lg-desktop
	#contacts .contacts-info
		max-width: 360px
@include sm-tablets
	#map
		height: 200px
		order: -1
	#contacts .contacts-info
		position: static
		padding: 20px 30px
		max-width: 100%
	#contacts
		display: flex
		flex-direction: column
		.container
			width: 100%
	.contacts-info--logo
		font-size: 18px
	.contacts-info--address
		margin-top: 20px
		font-size: 12px
	.contacts-info--phone
		margin-top: 20px
		a
			font-size: 16px
	.contacts-info--graphic
		margin-top: 20px
		font-size: 12px
</style>
