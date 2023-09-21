<template>
  <v-container class="my-card-mr" justify="center">
    <h2 class="my-card-title">내가 찜한 카드</h2>
    <!-- 찜한 카드가 있을 때만 카드 목록 표시 -->
    <v-card v-if="cards.length > 0" class="my-card-body" theme="dark" rounded="100%">
      <Carousel :items-to-show="3" :wrap-around="true" class="my-card-carousel">
        <Slide v-for="card in cards" :key="card.cardId">
          <div @click="cardReadLink(`/card/${card.cardId}`)">
            <div>
              <div style="color: #222">{{ card.name }}</div>
              <img
                :src="dynamicLink(card.cardImage)"
                alt="카드 이미지"
                class="my-card-img"
              />
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </v-card>
    <!-- 찜한 카드가 없을 때 "카드 보러가기" 버튼 표시 -->
    <button v-else @click="cardListLink()">카드 보러가기</button>
  </v-container>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "@/assets/css/myPage/myPageCard.css";
import { mapState, mapActions } from "vuex";
const CardModule = "CardModule";
const LINK = process.env.VUE_APP_S3_LINK;

export default {
  components: {
    Carousel,
    Navigation,
    Slide,
  },
  data() {
    return {
      link: LINK,
    };
  },
  methods: {
    cardReadLink(link) {
      this.$router.push(link);
    },
    ...mapActions(CardModule, ["requestLikeCardList"]),
    async cardLoading() {
      await this.requestLikeCardList();
      this.cards = this.$store.state[CardModule].cards;
    },
    dynamicLink(extraPath) {
      return `${LINK}/${extraPath}`;
    },
    cardListLink() {
      this.$router.push("/card")
    },
  },
  computed: {
    ...mapState(CardModule, ["cards"]),
  },
};
</script>

<style>
</style>
