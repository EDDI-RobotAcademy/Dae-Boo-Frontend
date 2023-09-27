<template lang="">
  <!-- <div class="btn-container">
    <div>
      <button class="btn" type="button" :class="{ active: all }" @click="initializationClick"># 전체</button>
      <button class="btn" type="button" :class="{ active: gas }" @click="handleCategoryClick('GAS')"># 주유</button>
      <button class="btn" type="button" :class="{ active: eatout }" @click="handleCategoryClick('EATOUT')"># 외식</button>
    </div>
  </div> -->

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

  <div v-if="cards.length > 0">
    <div class="container">
      <div class="row">
        <div v-for="card in cards" :key="card.id" class="section">
          <img :src="card.card_image" alt="card image" class="card-image" data-aos="fade-top" />
          <div class="intro">
            <p class="card-name">{{ card.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> 
  
  <div class="card-name" v-else>
    <p>Loading...</p>
  </div>




  
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
    ...mapActions(CardModule, ["requestCardList", "requestKeywordList"]),
    async cardLoading() {
      await this.requestCardList();
      this.cards = this.$store.state[CardModule].cards;
    },
    dynamicLink(extraPath) {
      return `${this.link}/${extraPath}`;
    },
    initializationClick() {
      this.cardLoading();
    },
    handleCategoryClick(category) {
      console.log(category);
      this.requestKeywordList(category);
    },
    computed: {
      ...mapState(CardModule, ['cards']),
    },
  },
  data() {
    return {
      cards: [],
      link: LINK,
      all: false,    // all 버튼 상태
      gas: false,    // gas 버튼 상태
      eatout: false, // eatout 버튼 상태

    };
  },
}
</script>
<style></style>
