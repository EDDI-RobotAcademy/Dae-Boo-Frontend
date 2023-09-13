<template>
    <v-container class="my-card-mr" justify="center">
        <h2 class="my-card-title">내가 찜한 카드</h2>
        <v-card class="my-card-body" theme="dark" rounded="100%">
            <Carousel :items-to-show="3" :wrap-around="true" class="my-card-carousel">
          <Slide v-for="slide in slides" :key="slide.id">
            <a :href="slide.link" />
            <div>
              <div style="color: #222;">{{ slide.text }}</div>
              <img :src="slide.imageUrl" alt="Slide Image" class="my-card-img"/>
            </div>
          </Slide>
          <template #addons>
            <Navigation/>
          </template>
        </Carousel>
        </v-card>
    </v-container>
</template>
<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import '@/assets/css/myPage/myPageCard.css'
export default {
components: {
    Carousel,
    Navigation,
    Slide
},
data() {
    return {
        slides: [
  {
    id: 1,
    imageUrl:
      "https://www.hyundaicard.com/images/cardscommon/img_card_TRE5_metal_0.png",
    text:"현대카드",
  },
  {
    id: 2,
    imageUrl:
      "https://www.hyundaicard.com/images/cardscommon/img_card_Caution.png",
      text:"현대카드",
  },
  {
    id: 3,
    imageUrl:
      "https://www.hyundaicard.com/img/com/card/card_SGE2_03_f.png",
      text:"현대카드",
  },
  {
    id: 4,
    imageUrl:
      "https://www.hyundaicard.com/images/cardscommon/img_card_NVHC_line.png",
      text:"MOCA카드",
  },
  {
    id: 5,
    imageUrl:
      "https://www.hyundaicard.com/img/com/card/card_SGE2_01_f.png",
      text:"MOCA카드",
  },
]
    }
},
}
</script>
<style>

</style>