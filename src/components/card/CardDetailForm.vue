<template lang="">
    <div>
        <v-container>
            <div class="card-detail-container">
            <img :src="dynamicLink(card.cardImage)" alt="카드 이미지" class="card-detail" data-aos="fade-center"/>
                <div align="center" data-aos="fade-center" class="card-detail-text">
                    <h1 data-aos="fade-center" align="center" class="font-color">{{ card.name }}</h1>
                    <h2>{{ card.company }}</h2><br>
                    <button @click="toggleHeart">
                    <i :class="heartClass"></i>
                    </button>  
                <v-btn class="card-detail-button"><h1>카드사 바로가기</h1></v-btn>
                </div>
            </div>
        <div data-aos="fade-center">
            <div class="card-info-box">
                <svg class="card-detail-svg" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            <div class="card-info-icon"><h3>카드 혜택</h3></div>
            <div class="card-info-text">{{ card.benefit }}</div>
        </div>

            <div class="card-info-box">
                <svg class="card-detail-svg" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            <div class="card-info-icon"><h3>카드 조건</h3></div>
            <div class="card-info-text">{{ card.cardCondition }}</div>
        </div>
        

            <div class="card-info-box">
                <svg class="card-detail-svg" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg>
            <div class="card-info-icon"><h3>카드 비용</h3></div>
            <div class="card-info-text">{{ card.fee }}</div>
        </div>
    </div>
    </v-container>
<v-container class="caution-card" justify="center">
    <v-card rounded class="caution-card-color">
        <h2 class="caution-card-title"> 서비스 이용조건 및 유의사항 </h2>
        <div class="caution-card-text">
        <p class="text-card-mt">- 전월실적 산정기준 : 전월실적은 해당카드의 전월(승인일 기준 1일 ~ 말일) 국내외 일시불/할부 합산 이용금액을 의미합니다</p>
        <p class="text-card-mt">- 전월 실적 제외 대상 : 대학(대학원)등록금, 교육비(학부모부담금), 임대료, 각종 세금 및 공과금, 상하수도요금, 과태료(범칙금),</p>
        <p class="text-card-mt">우체국 우편요금, 사회보험(국민건강/국민연금/고용/산재), 아파트관리비, 도시가스요금, 전기요금, 선불카드류(기프트카드, 선불</p>
        <p class="text-card-mt">전자지급수단 등) 구매 및 충전, 상품권 구매(모바일상품권/쿠폰 포함), 가상화폐 거래소 이용금액, 단기카드대출(현금 서비스), 장기</p>
        <p class="text-card-mt">카드대출(카드론), 각종 수수료 및 이자, 연체료, 연희비, 거래 취소금액, 포인트(전부/일부) 결제 시 포인트 사용분 등의 이용금액</p>
        <p class="text-card-mt"></p>
        <p class="text-card-mt">※ 모두의 카드는 신용카드 모집 업무를 대리, 중개합니다.</p>
        <p class="text-card-mt">※ 모두의 카드는 다수의 여신전문금융회사를 대리하거나 중개합니다.</p>
        <p class="text-card-mt">※ 모두의 카드는 금융상품에 대한 계약체결 권한이 없습니다</p>
        <p class="text-card-mt">※ 모두의 카드는 금융관계법률에 따라 위탁계약을 체결한 금융상품판매대리, 중개업자입니다.</p>
        <p class="text-card-mt"></p>
        <p class="text-card-mt">* 본 카드의 서비스 내용은 카드사 시정에 따라 사전 고지 후 변경 또는 중단될 수 있습니다.</p>
        <p class="text-card-mt">* 카드 사용 전 반드시 상품설명서와 약관을 읽어 보시기 바랍니다.</p>
        <p class="text-card-mt">* 모두의 카드는 소비자들에게 다양한 정보제공을 목적으로 심의번호가 미기재된 카드상품을 수집 및 노출할 수 있으며, 정보 업데이
            트에 최선을 다하고 있습니다.</p>
    </div>
</v-card>
</v-container>

</div>
</template>
<script>

import AOS from "aos";
import "aos/dist/aos.css";
const LINK = process.env.VUE_APP_S3_LINK;
import { mapActions, mapState } from "vuex"
const CardModule = "CardModule"
const LogInModule = "LoginModule"

export default {
    name:
        "CardDetailForm",
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isLiked: false,
            link: LINK,
        }
    },
    mounted() {
        AOS.init({
            duration: 1600,
        });
    },
    methods: {
        async toggleHeart() {
            try {
                const payload = {
                    userId: this.memberInfo.userId,
                    cardId: this.card.cardId,
                };
                const response = await this.responseWishCard(payload);
                this.isLiked = response.isWish;

            } catch (error) {
                console.error('Error:', error);
            }
        },
        ...mapActions(CardModule, ['responseWishCard']),
        dynamicLink(extraPath) {
            return `${LINK}/${extraPath}`;
        },
    },
    computed: {
        heartClass() {
            return this.isLiked ? 'fas fa-heart' : 'far fa-heart';
        },
        ...mapState(LogInModule, ['memberInfo']),
        ...mapState(CardModule, ['card']),
    },
}

</script>
<style>
.card-detail-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    text-align: center;
}

.card-detail {
    margin: 3rem;
    width: 15%;
}

.card-detail-text {
    margin: 2rem;
    margin-top: 8rem;
    margin-bottom: 8rem;
    font-size: 19px;
    /* color: white; */
    color: black;
}

.fas.fa-heart {
    color: red;
}

.far.fa-heart {
    color: gray;
}

.card-detail-button {
    margin: 10%;
    background-color: darkslategrey;
    color: white;
    border: none;
    padding: 30px 50px;
    cursor: pointer;
    display: flex;
    margin-bottom: -50px;
}

.card-info-box {
    margin: 20px auto;
    color: aliceblue;
    background-color: rgb(41, 40, 40);
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    width: 70%;
    display: flex;
}

.card-info-icon {
    margin-top: 5px;
    margin-right: 10px;
    text-align: left;
}

.card-info-text {
    margin-top: 5px;
    flex-grow: 1;
    text-align: center;
}

.caution-card {
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.caution-card-color {
    margin: auto;
    color: white;
    background-color: #444444;
    width: 80%;
    border-radius: 1rem;
}

.caution-card-title {
    margin-top: 2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;

}

.caution-card-text {
    margin-bottom: 2rem;
    border-top: 1px solid #ffffff;
    padding: 1rem;
    color: #d2d2d2;
}

.text-card {
    margin-top: 1rem;
}

.card-detail-svg {
    fill: #ffffff
}
</style>