<template>
    <div class="spec_block">
        <div class="spec_block__title">СПЕЦПРЕДЛОЖЕНИЯ</div>
        <div class="spec_block__blocks">
            <div class="spec_block__block">
                <div class="spec_block__img">
                    <img 
                        :src="require(`@/assets/img/pr.png`)" 
                        alt=""
                        loading="lazy">
                </div>
                <div class="spec_block__info">
                    <div class="spec_block__tit">УВЛЕКАТЕЛЬНОЕ ПУТЕШЕСТВИЕ С EXEED</div>
                    <div class="spec_block__subtit">Получи привилегии EXEED при обращении на сервис</div>
                    <a href="/exciting-journey-with-exceed" class="spec_block__link">узнать больше</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    .spec_block {
        margin-top: 80px;
        background-color: #30363A;
        padding: 100px 112px;
        @media all and (max-width: 1440px) {
            padding: 40px;
            margin-top: 75px;
        }
        @media all and (max-width: 1000px) {
            margin-top: 70px;
        }
        @media all and (max-width: 768px) {
            margin-top: 105px;
        }
        &__title {
            text-align: center;
            font-weight: 300;
            font-size: 60px;
            line-height: 60px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-bottom: 94px;
            @media all and (max-width: 1380px) {
                font-size: 40px;
                line-height: normal;
                margin-bottom: 30px;
            }
            @media all and (max-width: 1024px) {
                font-size: 30px;
            }
            @media all and (max-width: 480px) {
                font-size: 20px;
            }
        }
        &__block {
            display: flex;
            justify-content: start;
            background: #fff;
            @media all and (max-width: 1024px) {
                flex-direction: column;
            }
        }
        &__img {
            font-size: 0;
            width: 50%;
            @media all and (max-width: 1024px) {
                width: 100%;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__info {
            padding: 20px;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media all and (max-width: 1024px) {
                width: 100%;
                padding: 15px;
                padding-top: 0;
            }
        }
        &__tit {
            font-weight: 400;
            font-size: 40px;
            line-height: 45px;
            color: #30363A;
            margin-bottom: 20px;
            text-transform: uppercase;
            margin-top: auto;
            @media all and (max-width: 1024px) {
                font-size: 16px;
                margin-bottom: 15px;
                line-height: normal;
            }
        }
        &__subtit {
            font-weight: 400;
            font-size: 25px;
            line-height: normal;
            color: #30363A;
            margin-bottom: 30px;
            @media all and (max-width: 1024px) {
                font-size: 14px;
                margin-bottom: 20px;
            }
        }
        &__link {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 16px;
            max-width: 220px;
            color: #30363A;
            text-transform: uppercase;
            border: 1px solid #30363A;
            position: relative;
            margin-bottom: auto;
            &:before {
                position: absolute;
                content: '';
                width: 10px;
                height: 18px;
                margin-top: -9px;
                top: 50%;
                right: 20px;
                background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 18' id='arrow-lf' fill='%23C78E66'%3E%3Cpath d='M.638 18a.671.671 0 01-.456-.176.566.566 0 01-.182-.422c0-.165.06-.305.182-.422l8.324-8.042-8.196-7.9A.825.825 0 01.146.757a.623.623 0 010-.3A.825.825 0 01.31.176.607.607 0 01.747 0a.63.63 0 01.455.176l8.616 8.34c.06.059.103.13.127.211a.49.49 0 01.055.229c0 .07-.018.14-.055.211a.492.492 0 01-.127.194l-8.743 8.463a.5.5 0 01-.219.123.499.499 0 01-.218.053z'%3E%3C/path%3E%3C/svg%3E") 50% / 100% no-repeat;
            }
            @media all and (max-width: 1024px) {
                font-size: 14px;
                padding: 12px;
            }
        }
    }  
</style>