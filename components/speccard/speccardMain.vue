<template>
    <div class="spec_card">
        <div class="spec_card__frst">
            <div class="spec_card__img">
                <img 
                    :src="require(`@/assets/img/pr2.png`)" 
                    alt="УВЛЕКА­ТЕЛЬНОЕ ПУТЕШЕСТВИЕ С EXEED">
            </div>
            <div class="spec_card__subtitle">СПЕЦПРЕДЛОЖЕНИЕ</div>
            <div class="spec_card__title">УВЛЕКА­ТЕЛЬНОЕ <br> ПУТЕШЕСТВИЕ С EXEED</div>
            <div class="main__scroll" onclick="document.getElementById('txt').scrollIntoView({behavior: 'smooth', block: 'end'})">
                <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-2.7867e-08 0.637522C-2.04358e-08 0.467516 0.058651 0.315725 0.175953 0.182149C0.293255 0.0607157 0.434017 -7.67833e-07 0.59824 -7.60655e-07C0.762463 -7.53477e-07 0.903225 0.0607157 1.02053 0.182149L9.06158 8.50637L16.9619 0.309654C17.044 0.236794 17.1378 0.182149 17.2434 0.145719C17.349 0.121433 17.4487 0.121433 17.5425 0.145719C17.6481 0.182149 17.7419 0.236794 17.824 0.309654C17.9413 0.431087 18 0.576806 18 0.746812C18 0.928962 17.9413 1.08075 17.824 1.20219L9.48387 9.81785C9.42522 9.87857 9.35484 9.92107 9.27273 9.94535C9.20235 9.98178 9.1261 10 9.04399 10C8.97361 10 8.90323 9.98178 8.83284 9.94535C8.76246 9.92107 8.69795 9.87857 8.6393 9.81785L0.175953 1.07468C0.117302 1.01396 0.0762462 0.941104 0.0527858 0.856101C0.0175953 0.783241 -3.10518e-08 0.710382 -2.7867e-08 0.637522Z"
                    />
                </svg>
            </div>
        </div>
        <div class="spec_card__txt" id="txt">
            <p>Бесплатный проезд по платной трассе М4</p>
            <p>Бесплатный доступ в бизнес зал «Кандинский» терминала В аэропорта Шереметьево г. Москвы</p>
        </div>
        <div class="benefits">
            <div class="benefits__item active__item benefits__item_img benefits__item_grey-black">
                <img
                    :src="require(`@/assets/img/pr3.png`)"  
                     alt="ПОДГОТОВКА АВТОМОБИЛЯ К ПУТЕШЕСТВИЮ">
            </div>
            <div class="benefits__item  benefits__item_second benefits__item_grey-black">
                <h2 class="benefits__title benefits__title_mb-50 benefits__title_dark">ПОДГОТОВКА АВТОМОБИЛЯ К ПУТЕШЕСТВИЮ:</h2>
                <ul class="benefits__simple-list">
                    <li>Проверка автомобиля EXEED по 15 пунктам.</li>
                    <li>Комплексная мойка автомобиля.</li>
                    <li>Проверка сервисных и отзывных кампаний.</li>
                    <li>Специальные условия на мультимедийную группу товаров и оригинальные аксессуары EXEED .</li>
                </ul>
            </div>
        </div>
        <div class="benefits">
            <div class="benefits__item active__item benefits__item_img">
                <img 
                    :src="require(`@/assets/img/pr4.png`)" 
                    alt="ДОСТУП В БИЗНЕС ЗАЛ АЭРОПОРТА ШЕРЕМЕТЬЕВО">
            </div>
            <div class="benefits__item  benefits__item_second benefits__item_dark-grey">
                <h2 class="benefits__title benefits__title_mb-50  benefits__title_dark">ДОСТУП В БИЗНЕС ЗАЛ АЭРОПОРТА ШЕРЕМЕТЬЕВО</h2>
                <p class="benefits__simple-text">Бесплатный доступ в бизнес зал «Кандинский» терминала В аэропорта Шереметьево г. Москвы</p>
            </div>
        </div>
        <div class="benefits">
            <div class="benefits__item active__item benefits__item_img benefits__item_grey-black">
                <img 
                    :src="require(`@/assets/img/pr5.png`)" 
                    alt="СРОКИ АКЦИИ">
            </div>
            <div class="benefits__item  benefits__item_second benefits__item_grey-black">
                <h2 class="benefits__title benefits__title_mb-50 benefits__title_dark">СРОКИ АКЦИИ</h2>
                <p class="benefits__simple-text">Предложение действует с 11.07.2022 по 11.09.2022. Предложение ограничено. Не является публичной офертой. Действительно для автомобилей EXEED. Подробности и условия акции уточняйте у сервисного консультанта.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss">
.spec_card {
    margin-top: 80px;
    @media all and (max-width: 1440px) {
        margin-top: 75px;
    }
    @media all and (max-width: 1000px) {
        margin-top: 70px;
    }
    @media all and (max-width: 768px) {
        margin-top: 105px;
    }
    &__frst {
        height: calc(100vh - 80px);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media all and (max-width: 1440px) {
            height: calc(100vh - 75px);
        }
        @media all and (max-width: 1000px) {
            height: calc(100vh - 70px);
        }
        @media all and (max-width: 768px) {
            height: calc(100vh - 105px);
        }
    }
    &__img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__subtitle {
        font-weight: normal;
        font-size: 30px;
        line-height: 30px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 10px;
        color: #fff;
        text-align: center;
        position: relative;
        @media all and (max-width: 1600px) {
            font-size: 24px;
            line-height: 24px;
        }
        @media all and (max-width: 768px) {
            font-size: 18px;
            line-height: 18px;
        }
    }
    &__title {
        font-weight: 400;
        font-family: 'Tactic';
        font-size: 80px;
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        position: relative;
        line-height: 80px;
        @media all and (max-width: 1600px) {
            font-size: 60px;
            line-height: 60px;
        }
        @media all and (max-width: 768px) {
            font-size: 40px;
            line-height: 40px;
        }
        @media all and (max-width: 768px) {
            font-size: 25px;
            line-height: 25px;
        }
    }
    &__txt {
        padding: 100px 140px;
        margin-top: 80px;
        padding-top: 20px;
        color: #30363A;
        font-size: 26px;
        line-height: normal;
        width: 100%;
            p {
                &:not(:last-child) {
                    margin-bottom: 30px;
                }
            }
        @media all and (max-width: 1023px) {
            padding: 40px 20px;
            margin-top: 40px;
            padding-top: 0;
            font-size: 18px;
        }
    }
}
.benefits__item {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.benefits {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #F2F2F2;
    * {
        box-sizing: border-box;
    }
}

.benefits:nth-child(even) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
}

.benefits_reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    background-color: #30363A
}

.benefits_model .benefits__title {
    margin-bottom: 40px
}

.benefits__pictures__quality {
    margin: 0 120px
}

.benefits .active__item {
    display: block
}

@media (max-width: 768px) {
    .benefits .active__item {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .benefits .active__item picture {
        width: 100%
    }
}

.benefits__item {
    width: 50%;
    position: relative;
    display: none
}

.benefits__item__quality {
    display: block;
    height: 100%;
    padding-top: 151px;
    padding-bottom: 135px;
    padding-left: 20px;
    padding-right: 20px
}

.benefits__item_second {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 140px
}

.benefits__item_dark-grey {
    background-color: #30363A
}

.benefits__item_dark-grey .benefits__title,.benefits__item_dark-grey .benefits__simple-text,.benefits__item_dark-grey .benefits__simple-list {
    color: #FFFFFF
}

.benefits__item_dark-grey .benefits__list span {
    color: #CACACA
}

.benefits__item_dark-grey .benefits__list-right {
    color: #FFFFFF
}

.benefits__item_dark-grey .benefits__btn:nth-child(odd) {
    background-color: #FFFFFF;
    color: #30363A
}

.benefits__item_dark-grey .benefits__btn:nth-child(odd):hover {
    background-color: transparent;
    color: #C78E66
}

.benefits__item_very-dark {
    background-color: #181B1D
}

.benefits__item_very-dark .benefits__title {
    color: #FFFFFF
}

.benefits__item_very-dark .benefits__list span {
    color: #CACACA
}

.benefits__item_very-dark .benefits__list-right {
    color: #FFFFFF
}

.benefits__item_very-dark .benefits__btn:nth-child(odd) {
    background-color: #FFFFFF;
    color: #30363A
}

.benefits__item_very-dark .benefits__btn:nth-child(odd):hover {
    background-color: transparent;
    color: #C78E66
}

.benefits__item_grey-black {
    background-color: #F2F2F2
}

.benefits__item_grey-black .benefits__text_dark {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #7D8082;
    margin-bottom: 15px
}

.benefits__item_grey-black .benefits__btn {
    color: #30363A;
    border: 1px solid #30363A
}

.benefits__item_grey-black .benefits__btn:hover {
    color: #C78E66
}

.benefits__item_grey-black .benefits__btn:nth-child(odd) {
    background-color: #30363A;
    color: #fff
}

.benefits__item_grey-black .benefits__btn:nth-child(odd):hover {
    background-color: transparent;
    color: #C78E66
}

.benefits__item_very-dark .benefits__title,.benefits__item_dark-grey .benefits__title,.benefits__item_grey-black .benefits__title {
    font-family: "Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 0
}

.benefits__item_very-dark .benefits__text,.benefits__item_dark-grey .benefits__text,.benefits__item_grey-black .benefits__text {
    color: #C78E66;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    text-align: left;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 20px
}

.benefits__item_very-dark .benefits__btn,.benefits__item_dark-grey .benefits__btn,.benefits__item_grey-black .benefits__btn {
    min-width: 250px;
    padding: 16px 30px;
    margin-bottom: 30px
}

.benefits__item_very-dark .benefits__btn:nth-child(odd),.benefits__item_dark-grey .benefits__btn:nth-child(odd),.benefits__item_grey-black .benefits__btn:nth-child(odd) {
    margin-right: 30px
}

@media (max-width: 768px) {
    .benefits__item_very-dark .benefits__btn:nth-child(odd),.benefits__item_dark-grey .benefits__btn:nth-child(odd),.benefits__item_grey-black .benefits__btn:nth-child(odd) {
        margin-right:auto
    }
}

@media (max-width: 768px) {
    .benefits__item_very-dark .benefits__btn,.benefits__item_dark-grey .benefits__btn,.benefits__item_grey-black .benefits__btn {
        margin:10px auto
    }
}

.benefits__item_dark,.benefits__item_black {
    background-color: #30363A
}

.benefits__item_dark .benefits__title,.benefits__item_dark .features__head,.benefits__item_dark .features__body p,.benefits__item_black .benefits__title,.benefits__item_black .features__head,.benefits__item_black .features__body p {
    color: #fff
}

.benefits__item_dark .features__item:not(:last-child),.benefits__item_black .features__item:not(:last-child) {
    border-bottom: 1px solid rgba(255,255,255,0.2)
}

.benefits__item_black {
    background-color: #181B1D
}

.benefits__item_grey,.benefits__item_white {
    background-color: #F2F2F2
}

.benefits__item_grey .benefits__title,.benefits__item_white .benefits__title {
    color: #1B1D23
}

.benefits__item_white {
    background-color: #fff
}

.benefits__item_pd {
    padding: 100px 140px 80px;
    display: block
}

.benefits__over {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100%;
    background-color: rgba(24,27,29,0.8);
    text-align: center;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.benefits__over-list {
    width: 100%;
    max-width: 780px;
    margin: 0 auto
}

.benefits__over-list li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 60px 0
}

.benefits__over-list li:not(:last-child) {
    border-bottom: 1px solid #C78E66
}

.benefits__over-numb {
    font-weight: 300;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    margin-bottom: 10px
}

.benefits__over-text {
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    color: #CACACA
}

.benefits__suptitle {
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #CACACA;
    margin-bottom: 20px
}

.benefits__suptitle_dark {
    color: #30363A
}

.benefits__title {
    font-weight: 300;
    font-size: 60px;
    line-height: 60px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px
}

.benefits__title__quality {
    font-size: 60px;
    font-weight: 400;
    padding-top: 0;
    padding-bottom: 30px;
    text-align: center;
    text-transform: uppercase
}

.benefits__title_dark {
    color: #30363A
}

.benefits__title.benefits__title_mb-50 {
    margin-bottom: 50px
}

@media (max-width: 768px) {
    .benefits__title.benefits__title_mb-50 {
        margin-bottom:20px
    }
}

.benefits__text {
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #CACACA;
    margin-bottom: 40px
}

.benefits__text__quality {
    padding: 0 90px;
    text-align: center;
    font-size: 18px;
    line-height: 1.5
}

.benefits__text_dark {
    color: #30363A
}

.benefits__simple-text {
    font-size: 16px;
    line-height: 24px;
    color: #30363A
}

.benefits__simple-text-bold {
    font-weight: 600
}

.benefits__simple-text:not(:last-child) {
    margin-bottom: 20px
}

@media (max-width: 768px) {
    .benefits__simple-text {
        font-size:14px;
        line-height: 17px
    }
}

.benefits__simple-list {
    font-size: 16px;
    line-height: 24px;
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 50px
}

@media (max-width: 768px) {
    .benefits__simple-list {
        margin-bottom:20px
    }
}

.benefits__simple-list li:not(:last-child) {
    padding: 5px
}

@media (max-width: 768px) {
    .benefits__simple-list {
        font-size:14px;
        line-height: 17px
    }
}

.benefits__btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 250px
}

.benefits__btn-block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 50px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media (max-width: 768px) {
    .benefits__btn-block {
        display:block;
        margin-top: 30px
    }
}

.benefits__btn img {
    width: 18px;
    height: 18px;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    margin-left: 20px;
    margin-top: -2px
}

.benefits__btn svg {
    width: 10px;
    height: 18px;
    margin-left: 20px;
    fill: #C78E66
}

@media (max-width: 1366px) {
    .benefits__btn svg {
        width:6px;
        height: 14px
    }
}

.benefits__list-right {
    text-align: right
}

.benefits__list li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #DEDEDE
}

.benefits__list li span {
    width: 46%
}

.benefits__list img {
    margin-right: 10px;
    width: 20px;
    height: 21px
}

.benefits__list span {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #30363A
}

.benefits__list-icon2 {
    height: 19px !important
}

@media (max-width: 1765px) {
    .benefits__item_second {
        padding:70px 60px
    }
}

@media (max-width: 1366px) {
    .benefits__suptitle {
        font-size:16px;
        line-height: 16px
    }

    .benefits__title {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 30px
    }

    .benefits__title_dark {
        margin-bottom: 24px
    }

    .benefits__text {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 30px
    }

    .benefits__item_second {
        padding: 25px 40px
    }

    .benefits__btn {
        font-size: 12px;
        line-height: 18px;
        max-width: -webkit-max-content;
        max-width: -moz-max-content;
        max-width: max-content;
        width: auto;
        padding: 12px 20px
    }

    .benefits__btn img {
        width: 14px;
        height: 14px
    }

    .benefits__list li {
        padding: 15px 0
    }

    .benefits__list span {
        font-size: 14px;
        line-height: 18px
    }

    .benefits__over li {
        padding: 30px 0
    }

    .benefits__over-numb {
        font-size: 50px;
        line-height: 50px
    }

    .benefits__over-text {
        font-size: 14px;
        line-height: 14px
    }
}

@media (max-width: 1765px) {
    .benefits__item_pd {
        padding:90px 90px 30px
    }
}

@media (max-width: 1250px) {
    .benefits_model .benefits__title {
        margin-bottom:30px
    }

    .benefits__item_second {
        padding: 50px 30px
    }

    .benefits__item_pd {
        padding: 50px
    }
}

@media (max-width: 768px) {
    .benefits {
        -ms-flex-wrap:wrap;
        flex-wrap: wrap
    }

    .benefits_first {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }

    .benefits__suptitle {
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 10px
    }

    .benefits__title {
        font-size: 28px;
        line-height: 30px
    }

    .benefits__title_dark {
        margin-bottom: 30px
    }

    .benefits__title__quality {
        font-size: 28px;
        line-height: 30px;
        text-align: left
    }

    .benefits__text__quality {
        display: none
    }

    .benefits__item {
        width: 100%
    }

    .benefits__item_second {
        padding: 40px 20px
    }

    .benefits__item_pd {
        padding: 40px 20px 20px
    }

    .benefits__item_black,.benefits__item_dark {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }

    .benefits__item__quality {
        padding: 40px 20px
    }

    .benefits__over-list {
        max-width: 300px
    }

    .benefits__over-numb {
        font-size: 30px;
        line-height: 30px
    }

    .benefits__pictures__flag {
        width: 200px;
        height: 70px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0
    }

    .benefits__pictures__flag img {
        height: auto
    }

    .benefits__pictures__quality {
        margin: 0
    }
}
.benefits .active__item {
    font-size: 0;
    line-height: normal;
}
.benefits img {
    width: 100%;
}
</style>