<template>
  <v-container justify="center" align="center" class="main-page">
    <div>
      <div class="overlay-text">
        <div class="page-image">
          <h3 data-aos="zoom-in" class="home-mr">
            나만의 맞춤 카드 추천 서비스
          </h3>
          <h1 data-aos="zoom-in">MOCA에서 간편하게</h1>
          <h1></h1>
        </div>
        <v-col cols="12" class="home-font">
          <p data-aos="fade-top">모든 카드를 한눈에 보고 비교해 보세요.</p>
          <br />
          <p data-aos="fade-top">나한테 딱 맞는 카드 중계 서비스</p>
          <br />
          <p data-aos="fade-top">
            MOCA와 함께하면 당신의 카드 생활이 달라질 거에요.
          </p>
          <br />
        </v-col>
        <div>
          <v-col cols="12" class="flex">
            <h1 data-aos="fade-left" class="home-mr" align="left">
              소비에 따른 카드 추천이란?
            </h1>
            <h3 align="left" class="card-text">
              소비자들이 사용한 카드에 내역을 조회하여
            </h3>
          </v-col>
          <div>소비내역(의,식,주)</div>
          <Carousel :autoplay="1500" :items-to-show="2.5" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide.id">
              <a :href="slide.link" />
              <div>
                <img
                  :src="slide.imageUrl"
                  alt="Slide Image"
                  class="move-image"
                  data-aos="fade-top"
                />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div class="moca-card">
          <v-col cols="12">
            <h1 data-aos="fade-top" align="center" class="home-mr">
              MOCA에서 카드 만들고 해택 받자!
            </h1>
          </v-col>
          <h1 data-aos="fade-right" align="right" class="font-color">card 1</h1>
          <div class="flex-container">
              <p align="right" data-aos="fade-right" class="card-text">
                카드에 대한 설명
              </p>
            <img
              class="card"
              data-aos="fade-right"
              src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png"
            />
          </div>
          <div>
          </div>
          <h1 data-aos="fade-left" align="left" class="font-color">card 2</h1>
          <div class="flex-container2">
            <img
              class="card"
              data-aos="fade-left"
              src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png"
            />
            <p align="left" data-aos="fade-left" class="card-text">
              카드에 대한 설명
            </p>
          </div>
          <div>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div class="page-image2">
        <div class="overlay-text2">
          <h3 data-aos="fade-bottom">나에게 필요한 </h3>
          <br />
          <h3 data-aos="fade-bottom">카드 서비스</h3>
          <br />
          <h1 data-aos="fade-bottom">MOCA</h1>
          <br />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import "@/assets/css/home/home.css";
import AOS from "aos";
import { onMounted } from "vue";
import "aos/dist/aos.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

const slides = [
  {
    id: 1,
    imageUrl:
      "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
  },
];

onMounted(() => {
  AOS.init({
    duration: 1600,
  });
});
</script>

<style>
</style>