<template>
    <div>
        <v-carousel cycle hide-delimiters show-arrows="hover" class="mx-auto">
            <v-carousel-item
                src="https://support.catchfashion.com/hc/article_attachments/360102149993/201229_hyundai_Mainbanner_web.jpg"
                cover @click="eventLink('/event/1')" />

            <v-carousel-item
                src="https://support.catchfashion.com/hc/article_attachments/4402717938583/210601_hyundaimpoint_Mainbanner_web.jpg"
                cover @click="eventLink('/event/2')" />

            <v-carousel-item
                src="https://support.catchfashion.com/hc/article_attachments/360098761074/201120_hyundaicard_Mainbanner_web.jpg"
                cover @click="eventLink('/event/3')" />
        </v-carousel>
    </div>
    <div class="container">
        <div class="section">
            <div class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
                    <path
                        d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
                </svg>
            </div>
            <h3>
                <p>
                    효율적인 소비를 위한 선택
                </p>
            </h3>

            <div class="intro">
                현망한 소비를 지지해요.
            </div>
        </div>
        <div class="line" />
        <div class="section">
            <div class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
                    <path
                        d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" />
                </svg>
            </div>
            <h3>
                <p>
                    세계적인 소비를 위한 선택
                </p>
            </h3>

            <div class="intro">
                이 세상 어디에서 사용할 수 있습니다.
            </div>
        </div>
        <div class="line" />
        <div class="section">
            <div class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
                    <path
                        d="M302.2 218.4c0 17.2-10.5 27.1-29 27.1h-24.3v-54.2h24.4c18.4 0 28.9 9.8 28.9 27.1zm47.5 62.6c0 8.3 7.2 13.7 18.5 13.7 14.4 0 25.2-9.1 25.2-21.9v-7.7l-23.5 1.5c-13.3.9-20.2 5.8-20.2 14.4zM576 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM127.8 197.2c8.4.7 16.8-4.2 22.1-10.4 5.2-6.4 8.6-15 7.7-23.7-7.4.3-16.6 4.9-21.9 11.3-4.8 5.5-8.9 14.4-7.9 22.8zm60.6 74.5c-.2-.2-19.6-7.6-19.8-30-.2-18.7 15.3-27.7 16-28.2-8.8-13-22.4-14.4-27.1-14.7-12.2-.7-22.6 6.9-28.4 6.9-5.9 0-14.7-6.6-24.3-6.4-12.5.2-24.2 7.3-30.5 18.6-13.1 22.6-3.4 56 9.3 74.4 6.2 9.1 13.7 19.1 23.5 18.7 9.3-.4 13-6 24.2-6 11.3 0 14.5 6 24.3 5.9 10.2-.2 16.5-9.1 22.8-18.2 6.9-10.4 9.8-20.4 10-21zm135.4-53.4c0-26.6-18.5-44.8-44.9-44.8h-51.2v136.4h21.2v-46.6h29.3c26.8 0 45.6-18.4 45.6-45zm90 23.7c0-19.7-15.8-32.4-40-32.4-22.5 0-39.1 12.9-39.7 30.5h19.1c1.6-8.4 9.4-13.9 20-13.9 13 0 20.2 6 20.2 17.2v7.5l-26.4 1.6c-24.6 1.5-37.9 11.6-37.9 29.1 0 17.7 13.7 29.4 33.4 29.4 13.3 0 25.6-6.7 31.2-17.4h.4V310h19.6v-68zM516 210.9h-21.5l-24.9 80.6h-.4l-24.9-80.6H422l35.9 99.3-1.9 6c-3.2 10.2-8.5 14.2-17.9 14.2-1.7 0-4.9-.2-6.2-.3v16.4c1.2.4 6.5.5 8.1.5 20.7 0 30.4-7.9 38.9-31.8L516 210.9z" />
                </svg>
            </div>
            <h3>
                <p>
                    스마트한 소비를 위한 선택
                </p>
            </h3>
            <div class="intro">
                애플페이로 스마트한 소비를 하세요.
            </div>
        </div>
    </div>

    <div>
        <div v-if="cards.length > 0">
            <v-col cols="12" class="flex">
                <h1 data-aos="fade-left" class="card-mr" align="left">
                    {{ myInfo ? myInfo.nickname : '아무개' }} 님을 위한 혜택 만땅 카드
                </h1>

            </v-col>
            <Carousel :items-to-show="4" :wrap-around="true">
                <Slide v-for="card in cards" :key="card.cardId">
                    <div @click="eventLink(`/card-detail/${card.cardId}`)">

                        <div>
                            <img :src="dynamicLink(card.cardImage)" alt="카드 이미지" class="move-image" data-aos="fade-top"
                                style="width: 142px;height: 225px;" />
                            <p class="card-name">{{ card.name }}</p>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="card-name" v-else>
            <p>Loading...</p>
        </div>
    </div>

    <div>
        <div v-if="cards.length > 0">
            <v-col cols="12" class="flex">
                <h1 data-aos="fade-left" class="card-mr" align="left">
                    {{ myInfo ? myInfo.nickname : '아무개' }} 님과 같은 연령대 사용자들에게 인기에요!
                </h1>
            </v-col>
            <Carousel :items-to-show="4" :wrap-around="true">
                <Slide v-for="card in cards" :key="card.cardId">

                    <div @click="eventLink(`/card-detail/${card.cardId}`)">
                        <div>
                            <img :src="dynamicLink(card.cardImage)" alt="카드 이미지" class="move-image" data-aos="fade-top"
                                style="width: 142px;height: 225px;" />
                            <p class="card-name">{{ card.name }}</p>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="card-name" v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>
<script>

import '@/assets/css/card/card.css'
import AOS from "aos";
import { Carousel, Slide } from "vue3-carousel";
import "aos/dist/aos.css";
import { mapState, mapActions } from "vuex";
const CardModule = 'CardModule';
const MyPageModule = 'MyPageModule'
const LogInModule = 'LogInModule'
const LINK = process.env.VUE_APP_S3_LINK;

export default {
    data() {
        return {
            cards: [],
            link: LINK
        }
    },
    components: {
        Carousel,
        Slide,
    },
    mounted() {
        this.loadData();
        AOS.init({
            duration: 1600,
        });
        this.cardLoading();
    },
    methods: {
        eventLink(link) {
            this.$router.push(link);
        },
        ...mapActions(CardModule, ["requestCardList"]),
        ...mapActions(MyPageModule, ['getMyInfoToSpring']),
        async cardLoading() {
            await this.requestCardList();
            this.cards = this.$store.state[CardModule].cards;
        },
        dynamicLink(extraPath) {
            return `${LINK}/${extraPath}`;
        },
        loadData() {
            // this.userId가 설정된 이후에 데이터를 가져옵니다.
            if (this.userId) {
                this.getMyInfoToSpring(this.userId);
            }
        }
    },
    created() {
        this.userId = this.$store.state[LogInModule].memberInfo.userId;
    },
    computed: {
        ...mapState(LogInModule, ['memberInfo']),
        ...mapState(CardModule, ['cards']),
        ...mapState(MyPageModule, ['myInfo'])
    },
};
</script>
<style></style>