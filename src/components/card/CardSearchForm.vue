<template lang="">
 <div>
      <v-card class="mx-auto search-mr" color="grey-lighten-3">
      <v-text-field
      :loading="loading"
      append-inner-icon="mdi-magnify"
      density="compact"
        variant="solo"
        label="통합 검색창입니다."
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
  </v-card>
    </div>

    <!-- <div v-if="cards.length > 0"> -->
  <div class="container">
    <div class="row">
      <div v-for="card in examples" :key="card.id" class="section">
        <img :src="card.card_image" alt="example image" class="card-image" data-aos="fade-top" />
        <div class="intro">
          <p class="card-name">{{ card.name }}</p>
        </div>
      </div>
    </div>
  </div>

    <!-- </div> -->

    <!-- <div class="card-name" v-else>
      <p>Loading...</p>
    </div> -->




  
</template>
<script>

import "@/assets/css/card/cardsearch.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { mapState, mapActions } from "vuex";
const CardModule = 'CardModule';
const LINK = process.env.VUE_APP_S3_LINK;

export default {
  mounted() {
    AOS.init({
      duration: 1600,
    });
    this.cardLoading();
  },
  methods: {
    ...mapActions(CardModule, ["requestCardList"]),
    async cardLoading() {
      await this.requestCardList();
      this.cards = this.$store.state[CardModule].cards;
    },
    dynamicLink(extraPath) {
      return `${this.link}/${extraPath}`;
    },
    computed: {
      ...mapState(CardModule, ['cards']),
    },
  },
  data() {
    return {
      cards: [],
      link: LINK,
      examples: [
        {
          id: 1,
          card_image:
            "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
          name: "카드 이름1",
        },
        {
          id: 2,
          card_image:
            "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
          name: "카드 이름2",
        },
        {
          id: 3,
          card_image:
            "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
          name: "카드 이름3",
        },
        {
          id: 4,
          card_image:
            "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
          name: "카드 이름4",
        },
        {
          id: 5,
          card_image:
            "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
          name: "카드 이름5",
        },
        {
          id: 6,
          card_image:
            "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
          name: "카드 이름6",
        },
        {
          id: 7,
          card_image:
            "https://i.pinimg.com/564x/f3/bc/59/f3bc59bf46d419b3da7b2c413a99eecc.jpg",
          name: "카드 이름7",
        },
      ],
    };
  },
}
</script>
<style></style>